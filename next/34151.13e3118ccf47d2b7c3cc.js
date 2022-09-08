"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[34151],{

/***/ 34151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiActionModule": () => (/* binding */ ExampleTuiActionModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/action/action.component.ts
var action_component = __webpack_require__(15351);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/examples/1/index.ts




let TuiActionExample1 = /*#__PURE__*/(() => {
  class TuiActionExample1 {
    constructor(alertService) {
      this.alertService = alertService;
    }

    onClick(result) {
      this.alertService.open(result).subscribe();
    }

  }

  TuiActionExample1.ɵfac = function TuiActionExample1_Factory(t) {
    return new (t || TuiActionExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core/* TuiAlertService */.J9F));
  };

  TuiActionExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiActionExample1,
    selectors: [["tui-action-example-1"]],
    decls: 6,
    vars: 0,
    consts: [["tuiAction", "", "icon", "tuiIconStarLarge", 1, "action", 3, "click"], ["tuiAction", "", "icon", "tuiIconBellLarge", 1, "action", 3, "click"], ["tuiAction", "", "icon", "tuiIconFlagLarge", 1, "action", 3, "click"]],
    template: function TuiActionExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiActionExample1_Template_button_click_0_listener() {
          return ctx.onClick("Different");
        });
        fesm2015_core/* ɵɵtext */._uU(1, " And now for something completely different\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiActionExample1_Template_button_click_2_listener() {
          return ctx.onClick("Inquisition");
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Nobody expects the Spanish Inquisition!\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiActionExample1_Template_button_click_4_listener() {
          return ctx.onClick("Lumberjack");
        });
        fesm2015_core/* ɵɵtext */._uU(5, " I'm a lumberjack and I'm OK\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [action_component/* TuiActionComponent */.Z],
    styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;grid-column-gap:3rem;column-gap:3rem;grid-row-gap:1.5rem;row-gap:1.5rem}.action[_ngcontent-%COMP%]{flex:1;align-items:center}.action[_ngcontent-%COMP%]:first-child{--tui-action-color: var(--tui-positive);--tui-action-background: var(--tui-success-bg)}.action[_ngcontent-%COMP%]:last-child{--tui-action-color: var(--tui-negative);--tui-action-background: var(--tui-error-bg)}"],
    changeDetection: 0
  });
  return TuiActionExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/examples/2/index.ts


let TuiActionExample2 = /*#__PURE__*/(() => {
  class TuiActionExample2 {}

  TuiActionExample2.ɵfac = function TuiActionExample2_Factory(t) {
    return new (t || TuiActionExample2)();
  };

  TuiActionExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiActionExample2,
    selectors: [["tui-action-example-2"]],
    decls: 2,
    vars: 0,
    consts: [["tuiAction", "", "icon", "tuiIconImgLarge", "target", "_blank", "href", "http://www.montypython.com/"]],
    template: function TuiActionExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " It's\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [action_component/* TuiActionComponent */.Z],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiActionExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/marker-icon/marker-icon.component.ts
var marker_icon_component = __webpack_require__(86187);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/examples/3/index.ts



let TuiActionExample3 = /*#__PURE__*/(() => {
  class TuiActionExample3 {}

  TuiActionExample3.ɵfac = function TuiActionExample3_Factory(t) {
    return new (t || TuiActionExample3)();
  };

  TuiActionExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiActionExample3,
    selectors: [["tui-action-example-3"]],
    decls: 21,
    vars: 0,
    consts: [["tuiAction", ""], [1, "header", "tui-text_body-s"], [1, "description", "tui-text_body-xs"], ["size", "xs", "src", "tuiIconStarLarge", 1, "tui-island__marker", "icon"], [1, "header", "tui-text_body-m"], [1, "description", "tui-text_body-s"], ["size", "s", "src", "tuiIconBellLarge", 1, "tui-island__marker", "icon"], [1, "header", "tui-text_h6"], [1, "description", "tui-text_body-m"], ["size", "m", "src", "tuiIconFlagLarge", 1, "tui-island__marker", "icon"]],
    template: function TuiActionExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "section");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "h3", 1);
        fesm2015_core/* ɵɵtext */._uU(3, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p", 2);
        fesm2015_core/* ɵɵtext */._uU(5, "Description");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-marker-icon", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "section");
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "h3", 4);
        fesm2015_core/* ɵɵtext */._uU(10, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p", 5);
        fesm2015_core/* ɵɵtext */._uU(12, "Description");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-marker-icon", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "button", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "section");
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "h3", 7);
        fesm2015_core/* ɵɵtext */._uU(17, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "p", 8);
        fesm2015_core/* ɵɵtext */._uU(19, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(20, "tui-marker-icon", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [action_component/* TuiActionComponent */.Z, marker_icon_component/* TuiMarkerIconComponent */.B],
    styles: ["[tuiAction][_ngcontent-%COMP%]{max-width:26rem;align-items:center}[tuiAction][_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5rem}.icon[_ngcontent-%COMP%]{color:var(--tui-support-10)}.header[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{font-weight:bold}.description[_ngcontent-%COMP%]{color:var(--tui-text-02)}"],
    changeDetection: 0
  });
  return TuiActionExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/examples/4/index.ts



let TuiActionExample4 = /*#__PURE__*/(() => {
  class TuiActionExample4 {}

  TuiActionExample4.ɵfac = function TuiActionExample4_Factory(t) {
    return new (t || TuiActionExample4)();
  };

  TuiActionExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiActionExample4,
    selectors: [["tui-action-example-4"]],
    decls: 14,
    vars: 0,
    consts: [["tuiAction", ""], ["size", "s", "src", "tuiIconLikeLarge", 1, "tui-island__marker", "positive"], [1, "header", "tui-text_body-s"], [1, "description", "tui-text_body-xs"], ["tuiAction", "", 1, "no-shadow"], ["size", "s", "src", "tuiIconDislikeLarge", 1, "tui-island__marker", "negative"]],
    template: function TuiActionExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-marker-icon", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "section");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "h3", 2);
        fesm2015_core/* ɵɵtext */._uU(4, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(6, "Description");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 4);
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-marker-icon", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "section");
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "h3", 2);
        fesm2015_core/* ɵɵtext */._uU(11, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(13, "Use \"box-shadow: none\"");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [action_component/* TuiActionComponent */.Z, marker_icon_component/* TuiMarkerIconComponent */.B],
    styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;grid-column-gap:3rem;column-gap:3rem;grid-row-gap:1.5rem;row-gap:1.5rem}[tuiAction][_ngcontent-%COMP%]{flex:1;justify-content:start;align-items:center}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.no-shadow[_ngcontent-%COMP%]:hover{box-shadow:none}.header[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{font-weight:bold}.description[_ngcontent-%COMP%]{color:var(--tui-text-02)}.positive[_ngcontent-%COMP%]{color:var(--tui-positive);background:var(--tui-success-bg)}.negative[_ngcontent-%COMP%]{color:var(--tui-negative);background:var(--tui-error-bg)}"],
    changeDetection: 0
  });
  return TuiActionExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/examples/5/index.ts



let TuiActionExample5 = /*#__PURE__*/(() => {
  class TuiActionExample5 {}

  TuiActionExample5.ɵfac = function TuiActionExample5_Factory(t) {
    return new (t || TuiActionExample5)();
  };

  TuiActionExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiActionExample5,
    selectors: [["tui-action-example-5"]],
    decls: 7,
    vars: 0,
    consts: [["tuiAction", "", "target", "_blank", "href", "http://www.montypython.com"], ["size", "s", "src", "tuiIconAlignJustifyLarge", 1, "tui-island__marker"], [1, "header", "tui-text_body-m"], [1, "description", "tui-text_body-s"]],
    template: function TuiActionExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "section");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-marker-icon", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "h3", 2);
        fesm2015_core/* ɵɵtext */._uU(4, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [action_component/* TuiActionComponent */.Z, marker_icon_component/* TuiMarkerIconComponent */.B],
    styles: ["[tuiAction][_ngcontent-%COMP%]{max-width:20rem;align-items:center}.header[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{margin-top:.5rem;font-weight:bold}.description[_ngcontent-%COMP%]{color:var(--tui-text-02)}"],
    changeDetection: 0
  });
  return TuiActionExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/action.component.ts


















function ExampleTuiActionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification", 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "a", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-action-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-action-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-action-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-action-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-action-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
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

function ExampleTuiActionComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Icon ");
  }
}

function ExampleTuiActionComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Color of the icon ");
  }
}

function ExampleTuiActionComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Background of the icon ");
  }
}

function ExampleTuiActionComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 10);
    fesm2015_core/* ɵɵtext */._uU(2, " It's not pining, it's passed on! This parrot is no more! It has ceased to be! It's expired and gone to meet its maker! This is a late parrot! It's a stiff! Bereft of life, it rests in peace! If you hadn't nailed it to the perch, it would be pushing up the daisies! It's rung down the curtain and joined the choir invisible. This is an ex-parrot! ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiActionComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiActionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.icon = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-documentation", 12);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiActionComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiActionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.color = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiActionComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiActionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.background = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("--tui-action-color", ctx_r1.color)("--tui-action-background", ctx_r1.background);
    fesm2015_core/* ɵɵproperty */.Q6J("icon", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.color);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.background);
  }
}

function ExampleTuiActionComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiActionComponent = /*#__PURE__*/(() => {
  class ExampleTuiActionComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 25046).then(__webpack_require__.t.bind(__webpack_require__, 25046, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 98087).then(__webpack_require__.t.bind(__webpack_require__, 98087, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 38994).then(__webpack_require__.t.bind(__webpack_require__, 38994, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 39396).then(__webpack_require__.t.bind(__webpack_require__, 39396, 17)),
        LESS: __webpack_require__.e(/* import() */ 89329).then(__webpack_require__.t.bind(__webpack_require__, 89329, 17))
      };
      this.example2 = {
        HTML: __webpack_require__.e(/* import() */ 41713).then(__webpack_require__.t.bind(__webpack_require__, 41713, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 1605).then(__webpack_require__.t.bind(__webpack_require__, 1605, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 25450).then(__webpack_require__.t.bind(__webpack_require__, 25450, 17)),
        LESS: __webpack_require__.e(/* import() */ 56544).then(__webpack_require__.t.bind(__webpack_require__, 56544, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 92922).then(__webpack_require__.t.bind(__webpack_require__, 92922, 17))
      };
      this.example4 = {
        HTML: __webpack_require__.e(/* import() */ 675).then(__webpack_require__.t.bind(__webpack_require__, 675, 17)),
        LESS: __webpack_require__.e(/* import() */ 51652).then(__webpack_require__.t.bind(__webpack_require__, 51652, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 6594).then(__webpack_require__.t.bind(__webpack_require__, 6594, 17))
      };
      this.example5 = {
        HTML: __webpack_require__.e(/* import() */ 26255).then(__webpack_require__.t.bind(__webpack_require__, 26255, 17)),
        LESS: __webpack_require__.e(/* import() */ 8441).then(__webpack_require__.t.bind(__webpack_require__, 8441, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 19888).then(__webpack_require__.t.bind(__webpack_require__, 19888, 17))
      };
      this.iconVariants = [`tuiIconPrintLarge`, `tuiIconLoginLarge`, `tuiIconCalendarLarge`];
      this.icon = this.iconVariants[0];
      this.color = `var(--tui-link)`;
      this.background = `var(--tui-base-02)`;
    }

  }

  ExampleTuiActionComponent.ɵfac = function ExampleTuiActionComponent_Factory(t) {
    return new (t || ExampleTuiActionComponent)();
  };

  ExampleTuiActionComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiActionComponent,
    selectors: [["example-action"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7565716024468232322$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__4 = goog.getMsg("Links");
        i18n_3 = MSG_EXTERNAL_7565716024468232322$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__6 = goog.getMsg("Sizes");
        i18n_5 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5311013183343080671$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__8 = goog.getMsg("Reversed & No Shadow");
        i18n_7 = MSG_EXTERNAL_5311013183343080671$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟781b8ed56dbb3620e36ac93c24686f92ee64acb2␟5311013183343080671:Reversed & No Shadow`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_160958144287367985$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__10 = goog.getMsg("Vertical");
        i18n_9 = MSG_EXTERNAL_160958144287367985$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟62f2b30f59be1acb4a4271973c847e2949e1e7fe␟160958144287367985:Vertical`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9009199478152330998$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__11 = goog.getMsg(" Component that shows some action. Better to use it in a group. {$startTagTuiNotification} This component requires {$startTagCode}@taiga-ui/styles{$closeTagCode} optional package with {$startTagCode}@taiga-ui/styles/taiga-ui-global{$closeTagCode}{$startLink} added to your global styles {$closeLink} . {$closeTagTuiNotification}{$startTagTuiDocExample}{$startTagTuiActionExample_1}{$closeTagTuiActionExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiActionExample_2}{$closeTagTuiActionExample_2}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiActionExample_3}{$closeTagTuiActionExample_3}{$closeTagTuiDocExample}{$startTagTuiDocExample_3}{$startTagTuiActionExample_4}{$closeTagTuiActionExample_4}{$closeTagTuiDocExample}{$startTagTuiDocExample_4}{$startTagTuiActionExample_5}{$closeTagTuiActionExample_5}{$closeTagTuiDocExample}", {
          "startTagTuiNotification": "\uFFFD#1\uFFFD",
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD",
          "closeTagTuiNotification": "\uFFFD/#1\uFFFD",
          "startTagTuiDocExample": "\uFFFD#5\uFFFD",
          "startTagTuiActionExample_1": "\uFFFD#6\uFFFD",
          "closeTagTuiActionExample_1": "\uFFFD/#6\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#7\uFFFD",
          "startTagTuiActionExample_2": "\uFFFD#8\uFFFD",
          "closeTagTuiActionExample_2": "\uFFFD/#8\uFFFD",
          "startTagTuiDocExample_2": "\uFFFD#9\uFFFD",
          "startTagTuiActionExample_3": "\uFFFD#10\uFFFD",
          "closeTagTuiActionExample_3": "\uFFFD/#10\uFFFD",
          "startTagTuiDocExample_3": "\uFFFD#11\uFFFD",
          "startTagTuiActionExample_4": "\uFFFD#12\uFFFD",
          "closeTagTuiActionExample_4": "\uFFFD/#12\uFFFD",
          "startTagTuiDocExample_4": "\uFFFD#13\uFFFD",
          "startTagTuiActionExample_5": "\uFFFD#14\uFFFD",
          "closeTagTuiActionExample_5": "\uFFFD/#14\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_9009199478152330998$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__11;
      } else {
        i18n_0 = $localize`:␟9f928f8b575dc39856099d7ed495d20a4d6427a5␟9009199478152330998: Component that shows some action. Better to use it in a group. ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_NOTIFICATION: This component requires ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:@taiga-ui/styles${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: optional package with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:@taiga-ui/styles/taiga-ui-global${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD#4\uFFFD"}:START_LINK: added to your global styles ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: . ${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_TUI_NOTIFICATION:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_1:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_1:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#7\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_2:${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_2:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#9\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_3:${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_3:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#11\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\uFFFD#12\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_4:${"\uFFFD/#12\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_4:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#13\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\uFFFD#14\uFFFD"}:START_TAG_TUI_ACTION_EXAMPLE_5:${"\uFFFD/#14\uFFFD"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_5:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4753441770732122760$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiActionModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_4753441770732122760$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟800f354acb66a0b893f6e4fefe8e0c3b5e0c0654␟4753441770732122760: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiActionModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACTION_ACTION_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Action", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, [1, "tui-space_vertical-4"], ["tuiLink", "", "routerLink", "/getting-started", "fragment", "styles"], ["id", "basic", "heading", i18n_1, 3, "content"], ["id", "links", "heading", i18n_3, 3, "content"], ["id", "sizes", "heading", i18n_5, 3, "content"], ["id", "reversed-no-shadow", "heading", i18n_7, 3, "content"], ["id", "vertical", "heading", i18n_9, 3, "content"], ["tuiAction", "", 3, "icon"], ["documentationPropertyName", "icon", "documentationPropertyType", "string", "documentationPropertyMode", "input", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["heading", "CSS variables"], ["documentationPropertyName", "--tui-action-color", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "--tui-action-background", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiActionComponent_ng_template_1_Template, 15, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiActionComponent_ng_template_2_Template, 8, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiActionComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiActionExample1, TuiActionExample2, TuiActionExample3, TuiActionExample4, TuiActionExample5, demo_component/* TuiDocDemoComponent */.F, action_component/* TuiActionComponent */.Z, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiActionComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/action/action.module.ts













let ExampleTuiActionModule = /*#__PURE__*/(() => {
  class ExampleTuiActionModule {}

  ExampleTuiActionModule.ɵfac = function ExampleTuiActionModule_Factory(t) {
    return new (t || ExampleTuiActionModule)();
  };

  ExampleTuiActionModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiActionModule
  });
  ExampleTuiActionModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit/* TuiActionModule */.d7m, public_api/* TuiAddonDocModule */.fV, core/* TuiLinkModule */.jzK, kit/* TuiMarkerIconModule */.zk$, core/* TuiNotificationModule */.HiG, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiActionComponent))]]
  });
  return ExampleTuiActionModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiActionModule, {
    declarations: [ExampleTuiActionComponent, TuiActionExample1, TuiActionExample2, TuiActionExample3, TuiActionExample4, TuiActionExample5],
    imports: [common/* CommonModule */.ez, kit/* TuiActionModule */.d7m, public_api/* TuiAddonDocModule */.fV, core/* TuiLinkModule */.jzK, kit/* TuiMarkerIconModule */.zk$, core/* TuiNotificationModule */.HiG, router/* RouterModule */.Bz],
    exports: [ExampleTuiActionComponent]
  });
})();

/***/ })

}]);