"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[53524],{

/***/ 53524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PortalsModule": () => (/* binding */ PortalsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/customization/portals/examples/1/portal/custom-portal.service.ts
var custom_portal_service = __webpack_require__(72872);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/portals/examples/1/index.ts






function TuiPortalsExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 4);
    fesm2015_core/* ɵɵtext */._uU(2, " Hello Taiga UI ");
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiPortalsExample1 = /*#__PURE__*/(() => {
  class TuiPortalsExample1 {
    constructor(customPortalService) {
      this.customPortalService = customPortalService;
      this.templates = [];
    }

    addTemplate(template) {
      this.templates.push(this.customPortalService.addTemplate(template));
    }

    removeTemplate() {
      const viewRef = this.templates.pop();

      if (viewRef) {
        this.customPortalService.removeTemplate(viewRef);
      }
    }

  }

  TuiPortalsExample1.ɵfac = function TuiPortalsExample1_Factory(t) {
    return new (t || TuiPortalsExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(custom_portal_service/* CustomPortalService */.Y));
  };

  TuiPortalsExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPortalsExample1,
    selectors: [["tui-portals-example-1"]],
    decls: 6,
    vars: 0,
    consts: [["tuiButton", "", "size", "s", "icon", "tuiIconPlus", 3, "click"], ["tuiButton", "", "size", "s", "appearance", "secondary", "icon", "tuiIconTrash", 1, "tui-space_left-3", 3, "click"], ["someTemplate", ""], [1, "template"], [1, "greeting"], ["src", "tuiIconHeartFilledLarge", 1, "icon"]],
    template: function TuiPortalsExample1_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPortalsExample1_Template_button_click_0_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r2);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

          return ctx.addTemplate(_r0);
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Add\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPortalsExample1_Template_button_click_2_listener() {
          return ctx.removeTemplate();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Remove\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiPortalsExample1_ng_template_4_Template, 4, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, svg_component/* TuiSvgComponent */.P],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.template[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);padding:.5rem;margin:.5rem;border-radius:.25rem;-webkit-animation:tuiFadeIn var(--tui-duration) var(--tui-duration);animation:tuiFadeIn var(--tui-duration) var(--tui-duration);-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards;background:var(--tui-support-01);font:var(--tui-font-text-m)}.icon[_ngcontent-%COMP%]{color:var(--tui-support-10)}"],
    changeDetection: 0
  });
  return TuiPortalsExample1;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/customization/portals/examples/1/portal/сustom-host.module.ts
var _ustom_host_module = __webpack_require__(97541);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/portals/portals.component.ts







function PortalsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-portals-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function PortalsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 8);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵi18n */.SDv(13, 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.service);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.host);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.insert);
  }
}

let PortalsComponent = /*#__PURE__*/(() => {
  class PortalsComponent {
    constructor() {
      this.host = __webpack_require__.e(/* import() */ 8425).then(__webpack_require__.t.bind(__webpack_require__, 8425, 17));
      this.service = __webpack_require__.e(/* import() */ 46303).then(__webpack_require__.t.bind(__webpack_require__, 46303, 17));
      this.insert = __webpack_require__.e(/* import() */ 41663).then(__webpack_require__.t.bind(__webpack_require__, 41663, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 9839).then(__webpack_require__.t.bind(__webpack_require__, 9839, 17)),
        HTML: __webpack_require__.e(/* import() */ 91068).then(__webpack_require__.t.bind(__webpack_require__, 91068, 17)),
        LESS: __webpack_require__.e(/* import() */ 19649).then(__webpack_require__.t.bind(__webpack_require__, 60344, 17)),
        'portal/custom-portal.service.ts': __webpack_require__.e(/* import() */ 36648).then(__webpack_require__.t.bind(__webpack_require__, 36648, 17)),
        'portal/custom-host.component.ts': __webpack_require__.e(/* import() */ 36703).then(__webpack_require__.t.bind(__webpack_require__, 36703, 17)),
        'portal/custom-host.template.html': __webpack_require__.e(/* import() */ 6298).then(__webpack_require__.t.bind(__webpack_require__, 21065, 17)),
        'portal/custom-host.module.ts': __webpack_require__.e(/* import() */ 19111).then(__webpack_require__.t.bind(__webpack_require__, 19111, 17)),
        'portal/custom-host.style.less': __webpack_require__.e(/* import() */ 87553).then(__webpack_require__.t.bind(__webpack_require__, 87553, 17))
      };
    }

  }

  PortalsComponent.ɵfac = function PortalsComponent_Factory(t) {
    return new (t || PortalsComponent)();
  };

  PortalsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: PortalsComponent,
    selectors: [["portals"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4093869278527257288$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS_1 = goog.getMsg("Portals");
        i18n_0 = MSG_EXTERNAL_4093869278527257288$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟6990ad8d6182662e864495ac31c3758cda1c7a28␟4093869278527257288:Portals`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3650013461314841380$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__3 = goog.getMsg(" You can easily create your custom portals by extending our abstract classes and put your own portal-host on any layer ");
        i18n_2 = MSG_EXTERNAL_3650013461314841380$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟23f7de716c50a1eebccc6387a6e2f7d867b65480␟3650013461314841380: You can easily create your custom portals by extending our abstract classes and put your own portal-host on any layer `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2457071683719965623$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__5 = goog.getMsg("Custom portals");
        i18n_4 = MSG_EXTERNAL_2457071683719965623$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c51166dc63b5688fe60ffe24ba365a8911ece80a␟2457071683719965623:Custom portals`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6349617148825393682$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__7 = goog.getMsg(" Create your own portal service by extending {$startTagCode}AbstractTuiPortalService{$closeTagCode}", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_6349617148825393682$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟82f2c5c1fe0161297fee7aab419529bff368851e␟6349617148825393682: Create your own portal service by extending ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:AbstractTuiPortalService${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7294662001982175681$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__9 = goog.getMsg(" Create your own portal host by extending {$startTagCode}AbstractTuiPortalHost{$closeTagCode}", {
          "startTagCode": "\uFFFD#9\uFFFD",
          "closeTagCode": "\uFFFD/#9\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_7294662001982175681$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟f2023abf0fd8d24e02029d1438769aab4a736381␟7294662001982175681: Create your own portal host by extending ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:AbstractTuiPortalHost${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8697865943911271747$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__11 = goog.getMsg("Put the created portal host on a desired layer");
        i18n_10 = MSG_EXTERNAL_8697865943911271747$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_PORTALS_PORTALS_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟43f073c96be41fe59aed7ce4ea22d162ae2cd599␟8697865943911271747:Put the created portal host on a desired layer`;
      }

      return [["header", i18n_0], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "custom-portals", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "my-service.ts", 3, "code"], i18n_8, ["filename", "my-host.component.ts", 3, "code"], i18n_10, ["filename", "app.template.html", 3, "code"]];
    },
    template: function PortalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, PortalsComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, PortalsComponent_ng_template_2_Template, 15, 3, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPortalsExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return PortalsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/portals/portals.module.ts










let PortalsModule = /*#__PURE__*/(() => {
  class PortalsModule {}

  PortalsModule.ɵfac = function PortalsModule_Factory(t) {
    return new (t || PortalsModule)();
  };

  PortalsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: PortalsModule
  });
  PortalsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, _ustom_host_module/* CustomHostModule */.T, core.TuiButtonModule, kit.TuiAvatarModule, public_api/* TuiAddonDocModule */.fV, core.TuiSvgModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(PortalsComponent))]]
  });
  return PortalsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(PortalsModule, {
    declarations: [PortalsComponent, TuiPortalsExample1],
    imports: [common/* CommonModule */.ez, _ustom_host_module/* CustomHostModule */.T, core.TuiButtonModule, kit.TuiAvatarModule, public_api/* TuiAddonDocModule */.fV, core.TuiSvgModule, router/* RouterModule */.Bz],
    exports: [PortalsComponent]
  });
})();

/***/ })

}]);