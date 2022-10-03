"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[22398],{

/***/ 22398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ShadowsModule": () => (/* binding */ ShadowsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/shadows/shadows.component.ts




function ShadowsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "div", 3);
    core/* ɵɵi18nStart */.tHW(3, 4);
    core/* ɵɵelementStart */.TgZ(4, "div", 5);
    core/* ɵɵelementStart */.TgZ(5, "span");
    core/* ɵɵelement */._UZ(6, "code");
    core/* ɵɵelement */._UZ(7, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "div", 6);
    core/* ɵɵelement */._UZ(9, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "div", 7);
    core/* ɵɵelement */._UZ(11, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "div", 8);
    core/* ɵɵelement */._UZ(13, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(14, "div", 9);
    core/* ɵɵelement */._UZ(15, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(16, "div", 10);
    core/* ɵɵelement */._UZ(17, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
  }
}

let ShadowsComponent = /*#__PURE__*/(() => {
  class ShadowsComponent {}

  ShadowsComponent.ɵfac = function ShadowsComponent_Factory(t) {
    return new (t || ShadowsComponent)();
  };

  ShadowsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ShadowsComponent,
    selectors: [["shadows"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6080636402906195970$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS_1 = goog.getMsg("Shadows");
        i18n_0 = MSG_EXTERNAL_6080636402906195970$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟46fba2e0e76610d72c2a584aad073b08e6e159d9␟6080636402906195970:Shadows`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5057450223131222697$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__3 = goog.getMsg("Different kinds of shadows can be applied with mixin:");
        i18n_2 = MSG_EXTERNAL_5057450223131222697$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟7b962e5b3264e35cc81dc382afebed42cb516541␟5057450223131222697:Different kinds of shadows can be applied with mixin:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1584871198682525738$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__5 = goog.getMsg("{$startTagDiv}{$startTagSpan} Basic shadow: {$startTagCode}.shadow(1){$closeTagCode} with {$startTagCode}.shadow(5){$closeTagCode} when hovered {$closeTagSpan}{$closeTagDiv}{$startTagDiv_1} Dropdown shadow: {$startTagCode}.shadow(2){$closeTagCode}{$closeTagDiv}{$startTagDiv_2} Modal shadow: {$startTagCode}.shadow(3){$closeTagCode}{$closeTagDiv}{$startTagDiv_3} Sidebar shadow: {$startTagCode}.shadow(4){$closeTagCode}{$closeTagDiv}{$startTagDiv_4} Navigation shadow: {$startTagCode}.shadow(6){$closeTagCode}{$closeTagDiv}{$startTagDiv_5} Mobile modal shadow: {$startTagCode}.shadow(7){$closeTagCode}{$closeTagDiv}", {
          "startTagDiv": "\uFFFD#4\uFFFD",
          "startTagSpan": "\uFFFD#5\uFFFD",
          "startTagCode": "[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]",
          "closeTagCode": "[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]",
          "closeTagSpan": "\uFFFD/#5\uFFFD",
          "closeTagDiv": "[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]",
          "startTagDiv_1": "\uFFFD#8\uFFFD",
          "startTagDiv_2": "\uFFFD#10\uFFFD",
          "startTagDiv_3": "\uFFFD#12\uFFFD",
          "startTagDiv_4": "\uFFFD#14\uFFFD",
          "startTagDiv_5": "\uFFFD#16\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_1584871198682525738$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SHADOWS_SHADOWS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ec25ca0c99f8b0a2501d2906b4e69622215d5042␟1584871198682525738:${"\uFFFD#4\uFFFD"}:START_TAG_DIV:${"\uFFFD#5\uFFFD"}:START_TAG_SPAN: Basic shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(1)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: with ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(5)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: when hovered ${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_SPAN:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#8\uFFFD"}:START_TAG_DIV_1: Dropdown shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(2)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#10\uFFFD"}:START_TAG_DIV_2: Modal shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(3)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#12\uFFFD"}:START_TAG_DIV_3: Sidebar shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(4)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#14\uFFFD"}:START_TAG_DIV_4: Navigation shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(6)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#16\uFFFD"}:START_TAG_DIV_5: Mobile modal shadow: ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:.shadow(7)${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_DIV:`;
      }

      i18n_4 = core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      return [["header", i18n_0], ["pageTab", ""], i18n_2, [1, "example"], i18n_4, [1, "item", "item_default"], [1, "item", "item_dropdown"], [1, "item", "item_modal"], [1, "item", "item_sidebar"], [1, "item", "item_navigation"], [1, "item", "item_mobile"]];
    },
    template: function ShadowsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ShadowsComponent_ng_template_1_Template, 18, 0, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n],
    styles: [".example[_ngcontent-%COMP%]{display:flex;flex:1;flex-wrap:wrap;padding:1.25rem}.item[_ngcontent-%COMP%]{transition-property:box-shadow;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center;margin-top:2.5rem;margin-left:2.5rem;width:17.5rem;height:5rem;border-radius:var(--tui-radius-m);color:var(--tui-text-03);cursor:pointer;text-align:center}.item_default[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12)}.item_default[_ngcontent-%COMP%]:hover{box-shadow:0 .75rem 2.25rem rgba(0,0,0,.2)}.item_dropdown[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.16)}.item_modal[_ngcontent-%COMP%]{box-shadow:0 1.125rem 1.875rem rgba(0,0,0,.48)}.item_sidebar[_ngcontent-%COMP%]{box-shadow:.25rem 0 1.5rem rgba(0,0,0,.12)}.item_navigation[_ngcontent-%COMP%]{box-shadow:0 .125rem 1rem rgba(0,0,0,.08)}.item_mobile[_ngcontent-%COMP%]{box-shadow:0 -1rem 1.75rem rgba(0,0,0,.24)}"],
    changeDetection: 0
  });
  return ShadowsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/shadows/shadows.module.ts





let ShadowsModule = /*#__PURE__*/(() => {
  class ShadowsModule {}

  ShadowsModule.ɵfac = function ShadowsModule_Factory(t) {
    return new (t || ShadowsModule)();
  };

  ShadowsModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ShadowsModule
  });
  ShadowsModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ShadowsComponent))]]
  });
  return ShadowsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ShadowsModule, {
    declarations: [ShadowsComponent],
    imports: [public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ShadowsComponent]
  });
})();

/***/ })

}]);