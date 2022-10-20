"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[19922],{

/***/ 19922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLinkModule": () => (/* binding */ ExampleTuiLinkModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/link/examples/1/index.ts



let TuiLinkExample1 = /*#__PURE__*/(() => {
  class TuiLinkExample1 {}

  TuiLinkExample1.ɵfac = function TuiLinkExample1_Factory(t) {
    return new (t || TuiLinkExample1)();
  };

  TuiLinkExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLinkExample1,
    selectors: [["tui-link-example-1"]],
    decls: 2,
    vars: 0,
    consts: [["tuiLink", "", "routerLink", "/components/link"]],
    template: function TuiLinkExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Link\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLinkExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/link/examples/2/index.ts


let TuiLinkExample2 = /*#__PURE__*/(() => {
  class TuiLinkExample2 {}

  TuiLinkExample2.ɵfac = function TuiLinkExample2_Factory(t) {
    return new (t || TuiLinkExample2)();
  };

  TuiLinkExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLinkExample2,
    selectors: [["tui-link-example-2"]],
    decls: 5,
    vars: 0,
    consts: [["tuiLink", "", "icon", "tuiIconSettings"], [1, "tui-space_bottom-1"], ["tuiLink", "", "icon", "tuiIconSettings", "iconAlign", "left"]],
    template: function TuiLinkExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Link with icon right\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "a", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Link with icon left ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLinkExample2;
})();
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/link/examples/3/index.ts




let TuiLinkExample3 = /*#__PURE__*/(() => {
  class TuiLinkExample3 {
    onClick(event) {
      console.info(`click`, event);
    }

  }

  TuiLinkExample3.ɵfac = function TuiLinkExample3_Factory(t) {
    return new (t || TuiLinkExample3)();
  };

  TuiLinkExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLinkExample3,
    selectors: [["tui-link-example-3"]],
    decls: 29,
    vars: 3,
    consts: [["href", "#", "tuiLink", ""], ["tuiMode", "onLight", 1, "plate", "plate_light"], ["tuiLink", "", "routerLink", "/directives/mode"], ["tuiLink", "", 3, "pseudo", "click"], ["tuiMode", "onDark", 1, "plate", "plate_dark"], ["href", "#", "tuiLink", "", "mode", "positive"], ["href", "#", "tuiLink", "", "mode", "negative"]],
    template: function TuiLinkExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " normal\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "span", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " See ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " tuiMode ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(7, " directive ");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiLinkExample3_Template_button_click_8_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵtext */._uU(9, " Pseudo-link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "span", 4);
        fesm2015_core/* ɵɵtext */._uU(11, " See ");
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "a", 2);
        fesm2015_core/* ɵɵtext */._uU(13, " tuiMode ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(14, " directive ");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiLinkExample3_Template_button_click_15_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵtext */._uU(16, " Pseudo-link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "a", 5);
        fesm2015_core/* ɵɵtext */._uU(19, " Positive link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "a", 6);
        fesm2015_core/* ɵɵtext */._uU(22, " Negative link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiLinkExample3_Template_button_click_23_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵtext */._uU(24, " Pseudo-link\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(25, "\n(If you need a pseudo-link, use\n");
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "code");
        fesm2015_core/* ɵɵtext */._uU(27, "button");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(28, "\nelement for correct work with focus)\n");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("pseudo", true);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("pseudo", true);
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("pseudo", true);
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, mode_directive/* TuiModeDirective */.w, router/* RouterLinkWithHref */.yS],
    styles: [".plate[_ngcontent-%COMP%]{display:inline-block;margin:0 -.75rem;padding:.75rem;border-radius:var(--tui-radius-m);background-color:#3e4757}.plate_light[_ngcontent-%COMP%]{background-color:#e5e7ea}.plate_dark[_ngcontent-%COMP%]{color:var(--tui-base-01)}"],
    changeDetection: 0
  });
  return TuiLinkExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/link/examples/4/index.ts


let TuiLinkExample4 = /*#__PURE__*/(() => {
  class TuiLinkExample4 {}

  TuiLinkExample4.ɵfac = function TuiLinkExample4_Factory(t) {
    return new (t || TuiLinkExample4)();
  };

  TuiLinkExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLinkExample4,
    selectors: [["tui-link-example-4"]],
    decls: 7,
    vars: 0,
    consts: [[1, "container"], ["href", "https://www.lipsum.com/"], ["tuiLink", ""]],
    template: function TuiLinkExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " It is a long established fact that a reader ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 1);
        fesm2015_core/* ɵɵtext */._uU(3, "will be distracted by the readable");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(4, " content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer to ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [link_component/* TuiLinkComponent */.V],
    styles: [".container[_ngcontent-%COMP%]{max-width:30rem}"],
    changeDetection: 0
  });
  return TuiLinkExample4;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/link/link.component.ts
















function ExampleTuiLinkComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-link-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-link-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-link-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-link-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 14);
    fesm2015_core/* ɵɵtext */._uU(2, " Link example ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("mode", ctx_r3.mode)("icon", ctx_r3.icon)("iconAlign", ctx_r3.iconAlign)("iconRotated", ctx_r3.iconRotated);
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 15);
    fesm2015_core/* ɵɵtext */._uU(1, " It is a pseudo-link because it is actually a button ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("mode", ctx_r5.mode)("icon", ctx_r5.icon)("iconAlign", ctx_r5.iconAlign)("pseudo", true)("iconRotated", ctx_r5.iconRotated);
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 18);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 19);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiLinkComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiLinkComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLinkComponent_ng_template_2_ng_container_1_Template, 3, 4, "ng-container", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLinkComponent_ng_template_2_ng_template_2_Template, 2, 5, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiLinkComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLinkComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.mode = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiLinkComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLinkComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.icon = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiLinkComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLinkComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.iconAlign = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiLinkComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLinkComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.iconRotated = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiLinkComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLinkComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.pseudo = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r4 = fesm2015_core/* ɵɵreference */.MAs(3);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx_r1.pseudo)("ngIfElse", _r4);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.modeValues)("documentationPropertyValue", ctx_r1.mode);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconAlignValues)("documentationPropertyValue", ctx_r1.iconAlign);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.iconRotated);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.pseudo);
  }
}

function ExampleTuiLinkComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 26);
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

let ExampleTuiLinkComponent = /*#__PURE__*/(() => {
  class ExampleTuiLinkComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 69278).then(__webpack_require__.t.bind(__webpack_require__, 69278, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 60491).then(__webpack_require__.t.bind(__webpack_require__, 60491, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 30463).then(__webpack_require__.t.bind(__webpack_require__, 30463, 17)),
        HTML: __webpack_require__.e(/* import() */ 11711).then(__webpack_require__.t.bind(__webpack_require__, 11711, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 59135).then(__webpack_require__.t.bind(__webpack_require__, 59135, 17)),
        HTML: __webpack_require__.e(/* import() */ 71970).then(__webpack_require__.t.bind(__webpack_require__, 71970, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 18677).then(__webpack_require__.t.bind(__webpack_require__, 18677, 17)),
        HTML: __webpack_require__.e(/* import() */ 13540).then(__webpack_require__.t.bind(__webpack_require__, 13540, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 72571).then(__webpack_require__.t.bind(__webpack_require__, 72571, 17)),
        HTML: __webpack_require__.e(/* import() */ 92768).then(__webpack_require__.t.bind(__webpack_require__, 92768, 17)),
        LESS: __webpack_require__.e(/* import() */ 81321).then(__webpack_require__.t.bind(__webpack_require__, 81321, 17))
      };
      this.pseudo = false;
      this.iconRotated = false;
      this.modeValues = [`positive`, `negative`];
      this.mode = null;
      this.iconAlignValues = [`right`, `left`];
      this.icon = ``;
      this.iconVariants = [`tuiIconStarLarge`, `tuiIconGeoLarge`];
      this.iconAlign = this.iconAlignValues[0];
    }

  }

  ExampleTuiLinkComponent.ɵfac = function ExampleTuiLinkComponent_Factory(t) {
    return new (t || ExampleTuiLinkComponent)();
  };

  ExampleTuiLinkComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLinkComponent,
    selectors: [["example-tui-link"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3883229897487287456$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__1 = goog.getMsg("Link component. It has focus highlight and can be customized with an icon");
        i18n_0 = MSG_EXTERNAL_3883229897487287456$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟13f9459caac7267ab2bd0fd6bdbda1e455cbd602␟3883229897487287456:Link component. It has focus highlight and can be customized with an icon`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7005100758555430198$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__5 = goog.getMsg("With icon");
        i18n_4 = MSG_EXTERNAL_7005100758555430198$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟27ce7fa0c6db3c8f4d7045c3661f318da6ee9a9b␟7005100758555430198:With icon`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1387438809102966566$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__7 = goog.getMsg("Modes");
        i18n_6 = MSG_EXTERNAL_1387438809102966566$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟84179be0a765ac2da1a2bcf6b5b476a4e9253aab␟1387438809102966566:Modes`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9078091099259464784$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__9 = goog.getMsg("With long text");
        i18n_8 = MSG_EXTERNAL_9078091099259464784$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟9ad0b8f17cc2ac177d1ca34d7f6b92635b7a73d1␟9078091099259464784:With long text`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7692372826979939400$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___11 = goog.getMsg(" Link mode ");
        i18n_10 = MSG_EXTERNAL_7692372826979939400$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟359c52cc610ab74a35e6a35eb7daae1e83c676d8␟7692372826979939400: Link mode `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4275468601899207994$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___13 = goog.getMsg(" An icon. It can be stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_4275468601899207994$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟acedafda2219bad0373461a93b48a42684d1c408␟4275468601899207994: An icon. It can be stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7794138143221582799$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___15 = goog.getMsg(" Icon align to text, {$startTagCode}right{$closeTagCode} by default ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_7794138143221582799$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟4f3b462bff6679570be2e78d798f1ac7538dfd85␟7794138143221582799: Icon align to text, ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:right${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6173660799512285856$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___17 = goog.getMsg(" Rotate icon 180 deg (for dropdowns) ");
        i18n_16 = MSG_EXTERNAL_6173660799512285856$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟2cc758678b529522e03c10fb51854ec3f91d1221␟6173660799512285856: Rotate icon 180 deg (for dropdowns) `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2798898592568079458$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___19 = goog.getMsg(" Pseudo-link ");
        i18n_18 = MSG_EXTERNAL_2798898592568079458$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟738cf572e05c2db2015af902afc94fa5893d12e0␟2798898592568079458: Pseudo-link `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5747552098609425760$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiLinkModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_5747552098609425760$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟4d090082c379e23350e9be3956250a3b1ab694be␟5747552098609425760: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLinkModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LINK_LINK_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Link", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "with-icon", "heading", i18n_4, 3, "content"], ["id", "modes", "heading", i18n_6, 3, "content"], ["id", "long-text", "heading", i18n_8, 3, "content"], [4, "ngIf", "ngIfElse"], ["pseudoLink", ""], ["documentationPropertyName", "mode", "documentationPropertyMode", "input", "documentationPropertyType", "'positive' | 'negative' | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "string | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconAlign", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconRotated", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudo", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiLink", "", 3, "mode", "icon", "iconAlign", "iconRotated"], ["tuiLink", "", 3, "mode", "icon", "iconAlign", "pseudo", "iconRotated"], i18n_10, i18n_12, ["tuiLink", "", "routerLink", "/services/svg-service"], i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLinkComponent_ng_template_1_Template, 10, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLinkComponent_ng_template_2_Template, 10, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLinkComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLinkExample1, TuiLinkExample2, TuiLinkExample3, TuiLinkExample4, demo_component/* TuiDocDemoComponent */.F, common/* NgIf */.O5, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiLinkComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/link/link.module.ts












let ExampleTuiLinkModule = /*#__PURE__*/(() => {
  class ExampleTuiLinkModule {}

  ExampleTuiLinkModule.ɵfac = function ExampleTuiLinkModule_Factory(t) {
    return new (t || ExampleTuiLinkModule)();
  };

  ExampleTuiLinkModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLinkModule
  });
  ExampleTuiLinkModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLinkComponent))]]
  });
  return ExampleTuiLinkModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLinkModule, {
    declarations: [ExampleTuiLinkComponent, TuiLinkExample1, TuiLinkExample2, TuiLinkExample3, TuiLinkExample4],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLinkComponent]
  });
})();

/***/ })

}]);