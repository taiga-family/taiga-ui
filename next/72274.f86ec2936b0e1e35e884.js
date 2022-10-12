"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72274],{

/***/ 72274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiExpandModule": () => (/* binding */ ExampleTuiExpandModule)
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
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/expand/expand.component.ts
var expand_component = __webpack_require__(88618);
// EXTERNAL MODULE: ./projects/core/components/expand/expand-content.directive.ts
var expand_content_directive = __webpack_require__(84785);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/expand/examples/1/index.ts






function TuiExpandExample1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, "NOBODY expects the Spanish Inquisition!");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiExpandExample1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(page_r2);
  }
}

let TuiExpandExample1 = /*#__PURE__*/(() => {
  class TuiExpandExample1 {
    constructor() {
      this.expanded = false;
      this.subpages = [`page1`, `page2`, `page3`];
    }

    toggle() {
      this.expanded = !this.expanded;
    }

  }

  TuiExpandExample1.ɵfac = function TuiExpandExample1_Factory(t) {
    return new (t || TuiExpandExample1)();
  };

  TuiExpandExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiExpandExample1,
    selectors: [["tui-expand-example-1"]],
    decls: 8,
    vars: 3,
    consts: [["tuiButton", "", "type", "button", 3, "click"], [3, "expanded"], ["tuiExpandContent", ""], [4, "ngFor", "ngForOf"]],
    template: function TuiExpandExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, " Chapman: Mr Wentworth just told me to come in here and say that there was trouble at the mill, that's all - I didn't expect a kind of Spanish Inquisition.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiExpandExample1_Template_button_click_2_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-expand", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiExpandExample1_ng_template_5_Template, 2, 0, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-expand", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiExpandExample1_div_7_Template, 3, 1, "div", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("expanded", ctx.expanded);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("expanded", ctx.expanded);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.subpages);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, expand_component/* TuiExpandComponent */.S, expand_content_directive/* TuiExpandContentDirective */.I, common/* NgForOf */.sg],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiExpandExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/expand/expand.component.ts














function ExampleTuiExpandComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-expand-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiExpandComponent_ng_template_2_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵtext */._uU(2, "Luke's father.");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p", 9);
    fesm2015_core/* ɵɵtext */._uU(4, " Also Tyler Durden doesn't actually exist (hover for mode details) ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "span", 10);
    fesm2015_core/* ɵɵtext */._uU(6, " Fight Club reference (notice how spoiler has ");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
    fesm2015_core/* ɵɵtext */._uU(8, "overflow: visible;");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(9, " when it's open). ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "div");
    fesm2015_core/* ɵɵtext */._uU(11, " A spoiler is an element of a disseminated summary or description of any piece of fiction that reveals any plot elements which threaten to give away important details. Typically, the details of the conclusion of the plot, including the climax and ending, are especially regarded as spoiler material. It can also be used to refer to any piece of information regarding any part of a given media that a potential consumer would not want to know beforehand. Because enjoyment of fiction depends a great deal upon the suspense of revealing plot details through standard narrative progression, the prior revelation of how things will turn out can \"spoil\" the enjoyment that some consumers of the narrative would otherwise have experienced. Spoilers can be found in message boards, articles, reviews, commercials, and movie trailers. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiExpandComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, ExampleTuiExpandComponent_ng_template_2_ng_template_2_div_0_Template, 12, 0, "div", 8);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx_r3.delayed);
  }
}

function ExampleTuiExpandComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 11);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiExpandComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiExpandComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtext */._uU(0, " Darth Vader is (spoilers below): ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-expand", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiExpandComponent_ng_template_2_ng_template_2_Template, 1, 1, "ng-template", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiExpandComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiExpandComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.async = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiExpandComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiExpandComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.onExpandedChange($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("expanded", ctx_r1.expanded)("async", ctx_r1.async);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.async);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.expanded);
  }
}

function ExampleTuiExpandComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiExpandComponent = /*#__PURE__*/(() => {
  class ExampleTuiExpandComponent {
    constructor(changeDetectorRef) {
      this.changeDetectorRef = changeDetectorRef;
      this.exampleModule = __webpack_require__.e(/* import() */ 7916).then(__webpack_require__.t.bind(__webpack_require__, 7916, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 17383).then(__webpack_require__.t.bind(__webpack_require__, 17383, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 73109).then(__webpack_require__.t.bind(__webpack_require__, 73109, 17)),
        HTML: __webpack_require__.e(/* import() */ 37863).then(__webpack_require__.t.bind(__webpack_require__, 37863, 17))
      };
      this.expanded = false;
      this.async = false;
      this.delayed = false;
    }

    onExpandedChange(expanded) {
      this.expanded = expanded;
      this.delayed = this.async && expanded;

      if (!this.async || !this.expanded) {
        return;
      }

      setTimeout(() => {
        const event = new CustomEvent(core.TUI_EXPAND_LOADED, {
          bubbles: true
        });
        this.delayed = false;
        this.changeDetectorRef.detectChanges();

        if (this.expand) {
          this.expand.nativeElement.dispatchEvent(event);
        }
      }, 5000);
    }

  }

  ExampleTuiExpandComponent.ɵfac = function ExampleTuiExpandComponent_Factory(t) {
    return new (t || ExampleTuiExpandComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ChangeDetectorRef */.sBO));
  };

  ExampleTuiExpandComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiExpandComponent,
    selectors: [["example-expand"]],
    viewQuery: function ExampleTuiExpandComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiExpandComponent, 5, fesm2015_core/* ElementRef */.SBq);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.expand = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1141063790359106994$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__1 = goog.getMsg("Component to show expandable content");
        i18n_0 = MSG_EXTERNAL_1141063790359106994$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟ac82728e4afec0d3345ca487d72243aee361eb07␟1141063790359106994:Component to show expandable content`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5927528007404435672$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS___5 = goog.getMsg(" Waits for a custom event {$startTagCode}TUI_EXPAND_LOADED{$closeTagCode} before opening. Content is initialized when opening starts ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_5927528007404435672$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟ab6b5b7101a3e6d2672c3312aa12194d9ed3ace3␟5927528007404435672: Waits for a custom event ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:TUI_EXPAND_LOADED${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: before opening. Content is initialized when opening starts `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3691238303418904912$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS___7 = goog.getMsg(" Open / close state ");
        i18n_6 = MSG_EXTERNAL_3691238303418904912$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟065ca8193f6f4a045c2e7b719242abd42692655c␟3691238303418904912: Open / close state `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5614736545437342912$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiExpandModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_5614736545437342912$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟24d3353564453ade22a0e1aeba60794dae32fb67␟5614736545437342912: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiExpandModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EXPAND_EXPAND_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Expand", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], [1, "b-full-width", 3, "expanded", "async"], ["tuiExpandContent", ""], ["documentationPropertyName", "async", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "expanded", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [4, "ngIf"], [1, "tooltip"], [1, "bubble"], i18n_4, i18n_6, [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiExpandComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiExpandComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiExpandComponent_ng_template_2_Template, 6, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiExpandComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiExpandExample1, expand_component/* TuiExpandComponent */.S, expand_content_directive/* TuiExpandContentDirective */.I, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, common/* NgIf */.O5, code_component/* TuiDocCodeComponent */.c],
    styles: [".tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-10px)}"],
    changeDetection: 0
  });
  return ExampleTuiExpandComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/expand/expand.module.ts









let ExampleTuiExpandModule = /*#__PURE__*/(() => {
  class ExampleTuiExpandModule {}

  ExampleTuiExpandModule.ɵfac = function ExampleTuiExpandModule_Factory(t) {
    return new (t || ExampleTuiExpandModule)();
  };

  ExampleTuiExpandModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiExpandModule
  });
  ExampleTuiExpandModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiExpandModule, core.TuiButtonModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiExpandComponent))]]
  });
  return ExampleTuiExpandModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiExpandModule, {
    declarations: [ExampleTuiExpandComponent, TuiExpandExample1],
    imports: [core.TuiExpandModule, core.TuiButtonModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiExpandComponent]
  });
})();

/***/ })

}]);