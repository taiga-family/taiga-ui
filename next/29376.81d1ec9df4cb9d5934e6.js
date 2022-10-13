"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29376],{

/***/ 29376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiButtonModule": () => (/* binding */ ExampleTuiButtonModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/interactive.ts
var interactive = __webpack_require__(57750);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/cdk/directives/focusable/focusable.directive.ts
var focusable_directive = __webpack_require__(48893);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/examples/1/index.ts







function TuiButtonExample1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 12);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true)("avatarUrl", ctx_r1.avatarUrl);
  }
}

const _c0 = function () {
  return ["/tui-dropdown"];
};

let TuiButtonExample1 = /*#__PURE__*/(() => {
  class TuiButtonExample1 {
    constructor() {
      this.avatarUrl = utils/* assets */.L`/images/avatar.jpg`;
    }

    onClick(event) {
      console.info(`click `, this.avatarUrl, event);
    }

  }

  TuiButtonExample1.ɵfac = function TuiButtonExample1_Factory(t) {
    return new (t || TuiButtonExample1)();
  };

  TuiButtonExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiButtonExample1,
    selectors: [["tui-button-example-1"]],
    decls: 30,
    vars: 15,
    consts: [["icon", ""], ["tuiButton", "", "type", "button", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon", "click"], ["tuiButton", "", "type", "button", "iconRight", "tuiIconSearch", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "disabled", "click"], ["tuiButton", "", "type", "button", 3, "showLoader", "click"], ["tuiIconButton", "", "type", "button", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon", "click"], ["tuiIconButton", "", "type", "button", "icon", "tuiIconSearch", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "disabled", "click"], ["tuiIconButton", "", "type", "button", 3, "showLoader", "click"], ["tuiButton", "", "type", "button", "href", "http://google.com", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon"], ["tuiButton", "", 3, "showLoader"], ["tuiIconButton", "", "type", "button", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon", "routerLink"], ["tuiIconButton", "", "type", "button", "icon", "tuiIconSearch", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "disabled", "routerLink", "tuiFocusable"], ["tuiIconButton", "", "type", "button", 3, "showLoader", "routerLink", "tuiFocusable"], ["size", "xs", 3, "rounded", "avatarUrl"]],
    template: function TuiButtonExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiButtonExample1_ng_template_0_Template, 1, 2, "ng-template", null, 0, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "h3");
        fesm2015_core/* ɵɵtext */._uU(3, "button[tuiButton]");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiButtonExample1_Template_button_click_5_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiButtonExample1_Template_button_click_7_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵtext */._uU(8, " Disabled button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiButtonExample1_Template_button_click_9_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵtext */._uU(10, " Loading button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "h3");
        fesm2015_core/* ɵɵtext */._uU(12, "button[tuiIconButton]");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "button", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiButtonExample1_Template_button_click_14_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "button", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiButtonExample1_Template_button_click_15_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "button", 6);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiButtonExample1_Template_button_click_16_listener($event) {
          return ctx.onClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "h3");
        fesm2015_core/* ɵɵtext */._uU(18, "a[tuiButton]");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "a", 7);
        fesm2015_core/* ɵɵtext */._uU(21, " Link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "a", 8);
        fesm2015_core/* ɵɵtext */._uU(23, " Loading button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "h3");
        fesm2015_core/* ɵɵtext */._uU(25, "a[tuiIconButton]");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "p");
        fesm2015_core/* ɵɵelement */._UZ(27, "a", 9);
        fesm2015_core/* ɵɵelement */._UZ(28, "a", 10);
        fesm2015_core/* ɵɵelement */._UZ(29, "a", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("showLoader", true);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("showLoader", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("showLoader", true);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", _r0)("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(14, _c0));
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true)("tuiFocusable", false);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("showLoader", true)("tuiFocusable", false);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, router/* RouterLinkWithHref */.yS, focusable_directive/* TuiFocusableDirective */.t, avatar_component/* TuiAvatarComponent */.J],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiButtonExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/examples/2/index.ts


let TuiButtonExample2 = /*#__PURE__*/(() => {
  class TuiButtonExample2 {}

  TuiButtonExample2.ɵfac = function TuiButtonExample2_Factory(t) {
    return new (t || TuiButtonExample2)();
  };

  TuiButtonExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiButtonExample2,
    selectors: [["tui-button-example-2"]],
    decls: 13,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "appearance", "primary", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "secondary", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "secondary-destructive", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "accent", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "flat", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "outline", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiIconButton", "", "type", "button", "appearance", "icon", "icon", "tuiIconCloseLarge", 1, "tui-space_right-3", "tui-space_bottom-3"]],
    template: function TuiButtonExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " primary\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(3, " secondary\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(5, " secondary-destructive\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(7, " accent\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(9, " flat\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 5);
        fesm2015_core/* ɵɵtext */._uU(11, " outline\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(12, "button", 6);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiButtonExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/examples/3/index.ts






function TuiButtonExample3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵtext */._uU(1, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
    fesm2015_core/* ɵɵtext */._uU(3, "TuiArrowModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " from ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "@taiga-ui/kit");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiButtonExample3 = /*#__PURE__*/(() => {
  class TuiButtonExample3 {
    constructor() {
      this.arrow = kit.TUI_ARROW;
    }

  }

  TuiButtonExample3.ɵfac = function TuiButtonExample3_Factory(t) {
    return new (t || TuiButtonExample3)();
  };

  TuiButtonExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiButtonExample3,
    selectors: [["tui-button-example-3"]],
    decls: 5,
    vars: 2,
    consts: [["tuiDropdownLimitWidth", "fixed", 3, "content"], ["tuiButton", "", "type", "button", 3, "iconRight"], ["dropdown", ""], [1, "content"]],
    template: function TuiButtonExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Where could I find such an arrow...? ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiButtonExample3_ng_template_3_Template, 7, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("iconRight", ctx.arrow);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v],
    styles: [".icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.content[_ngcontent-%COMP%]{padding:.75rem 1.25rem}"],
    changeDetection: 0
  });
  return TuiButtonExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/examples/4/index.ts


let TuiButtonExample4 = /*#__PURE__*/(() => {
  class TuiButtonExample4 {}

  TuiButtonExample4.ɵfac = function TuiButtonExample4_Factory(t) {
    return new (t || TuiButtonExample4)();
  };

  TuiButtonExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiButtonExample4,
    selectors: [["tui-button-example-4"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", "appearance", "custom"]],
    template: function TuiButtonExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " See LESS tab\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    styles: ["[tuiWrapper][data-appearance=custom]{background:#bc71c9;color:#fff}@media (hover: hover){[tuiWrapper][data-appearance=custom]:hover:not(._no-hover),[tuiWrapper][data-appearance=custom][data-state=hover]{background:#a381ff}}[tuiWrapper][data-appearance=custom]:active:not(._no-active),[tuiWrapper][data-appearance=custom][data-state=active],[tuiWrapper][data-appearance=custom][data-state=active]:hover{background:#8f75d1}[tuiWrapper][data-appearance=custom]:disabled:disabled,[tuiWrapper][data-appearance=custom][data-state=disabled][data-state=disabled]{background:#eaecee}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiButtonExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/examples/5/index.ts



let TuiButtonExample5 = /*#__PURE__*/(() => {
  class TuiButtonExample5 {}

  TuiButtonExample5.ɵfac = function TuiButtonExample5_Factory(t) {
    return new (t || TuiButtonExample5)();
  };

  TuiButtonExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiButtonExample5,
    selectors: [["tui-button-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,core.tuiButtonOptionsProvider)({
      shape: `rounded`,
      appearance: "outline"
      /* Outline */
      ,
      size: `m`
    })])],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", ""]],
    template: function TuiButtonExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(1, "Options");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiButtonExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-commerce/components/card/card.component.ts
var card_component = __webpack_require__(32675);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/button.component.ts


























function ExampleTuiButtonComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-button-example-1");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-notification");
    fesm2015_core/* ɵɵi18nStart */.tHW(10, 4);
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-button-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-button-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(21, "tui-button-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(23, "tui-button-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiButtonComponent_ng_template_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "button", 20);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("appearance", ctx_r3.appearance)("disabled", ctx_r3.disabled)("icon", ctx_r3.icon)("shape", ctx_r3.shape)("showLoader", ctx_r3.showLoader)("size", ctx_r3.size)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 21);
    fesm2015_core/* ɵɵtext */._uU(1, " Content ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("appearance", ctx_r5.appearance)("disabled", ctx_r5.disabled)("icon", ctx_r5.icon)("iconRight", ctx_r5.iconRight)("shape", ctx_r5.shape)("showLoader", ctx_r5.showLoader)("size", ctx_r5.size)("pseudoFocus", ctx_r5.pseudoFocused)("pseudoHover", ctx_r5.pseudoHovered)("pseudoActive", ctx_r5.pseudoPressed);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-card", 22);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiButtonComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiButtonComponent_ng_template_2_button_2_Template, 1, 9, "button", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiButtonComponent_ng_template_2_ng_template_3_Template, 2, 10, "ng-template", null, 10, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " tuiButton ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-toggle", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiButtonComponent_ng_template_2_Template_tui_toggle_ngModelChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.iconButton = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " tuiIconButton ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiButtonComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", null, 12, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiButtonComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.appearance = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiButtonComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiButtonComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.icon = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiButtonComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.iconRight = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiButtonComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.shape = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiButtonComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.showLoader = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(17, ExampleTuiButtonComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(18, "inherited-documentation");
  }

  if (rf & 2) {
    const _r4 = fesm2015_core/* ɵɵreference */.MAs(4);

    const _r6 = fesm2015_core/* ɵɵreference */.MAs(9);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.iconButton)("ngIfElse", _r4);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("ngModel", ctx_r1.iconButton);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.appearanceVariants)("documentationPropertyValue", ctx_r1.appearance);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.getContentVariants(_r6))("documentationPropertyValue", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.getContentVariants(_r6))("documentationPropertyValue", ctx_r1.iconRight);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.shapeVariants)("documentationPropertyValue", ctx_r1.shape);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showLoader);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiButtonComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 30);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 31);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 35);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 32);
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

class ExampleTuiButtonComponent extends interactive/* AbstractExampleTuiInteractive */.O {
  constructor() {
    super(...arguments);
    this.example1 = {
      TypeScript: __webpack_require__.e(/* import() */ 22771).then(__webpack_require__.t.bind(__webpack_require__, 22771, 17)),
      HTML: __webpack_require__.e(/* import() */ 91058).then(__webpack_require__.t.bind(__webpack_require__, 91058, 17))
    };
    this.example2 = {
      TypeScript: __webpack_require__.e(/* import() */ 77290).then(__webpack_require__.t.bind(__webpack_require__, 77290, 17)),
      HTML: __webpack_require__.e(/* import() */ 14425).then(__webpack_require__.t.bind(__webpack_require__, 14425, 17))
    };
    this.example3 = {
      TypeScript: __webpack_require__.e(/* import() */ 62996).then(__webpack_require__.t.bind(__webpack_require__, 62996, 17)),
      HTML: __webpack_require__.e(/* import() */ 59106).then(__webpack_require__.t.bind(__webpack_require__, 59106, 17)),
      LESS: __webpack_require__.e(/* import() */ 77551).then(__webpack_require__.t.bind(__webpack_require__, 77551, 17))
    };
    this.example4 = {
      TypeScript: __webpack_require__.e(/* import() */ 2145).then(__webpack_require__.t.bind(__webpack_require__, 2145, 17)),
      HTML: __webpack_require__.e(/* import() */ 77052).then(__webpack_require__.t.bind(__webpack_require__, 77052, 17)),
      LESS: __webpack_require__.e(/* import() */ 96434).then(__webpack_require__.t.bind(__webpack_require__, 96434, 17))
    };
    this.example5 = {
      TypeScript: __webpack_require__.e(/* import() */ 23027).then(__webpack_require__.t.bind(__webpack_require__, 23027, 17)),
      HTML: __webpack_require__.e(/* import() */ 98517).then(__webpack_require__.t.bind(__webpack_require__, 98517, 17))
    };
    this.exampleModule = __webpack_require__.e(/* import() */ 96372).then(__webpack_require__.t.bind(__webpack_require__, 96372, 17));
    this.exampleHtml = __webpack_require__.e(/* import() */ 45116).then(__webpack_require__.t.bind(__webpack_require__, 45116, 17));
    this.exampleOptions = __webpack_require__.e(/* import() */ 73549).then(__webpack_require__.t.bind(__webpack_require__, 52742, 17));
    this.disabled = false;
    this.showLoader = false;
    this.appearanceVariants = [`primary`, `accent`, `secondary`, `secondary-destructive`, `outline`, `mono`, `flat`, `whiteblock`, `whiteblock-active`, `icon`];
    this.appearance = this.appearanceVariants[0];
    this.sizeVariants = [`xs`, `s`, `m`, `l`, `xl`];
    this.size = this.sizeVariants[3];
    this.shapeVariants = [`square`, `rounded`];
    this.shape = null;
    this.icon = ``;
    this.iconRight = ``;
    this.iconButton = false;
  }

  getContentVariants(template) {
    return [``, `tuiIconEyeClosed`, `tuiIconHeartLarge`, template];
  }

}

ExampleTuiButtonComponent.ɵfac = /*@__PURE__*/function () {
  let ɵExampleTuiButtonComponent_BaseFactory;
  return function ExampleTuiButtonComponent_Factory(t) {
    return (ɵExampleTuiButtonComponent_BaseFactory || (ɵExampleTuiButtonComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiButtonComponent)))(t || ExampleTuiButtonComponent);
  };
}();

ExampleTuiButtonComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: ExampleTuiButtonComponent,
  selectors: [["example-tui-button"]],
  features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
    provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
    useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiButtonComponent)
  }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
  decls: 4,
  vars: 0,
  consts: function () {
    let i18n_0;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_7531330618895929781$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}TuiButtonModule{$closeTagCode} is a module with components {$startTagCode}tuiButton{$closeTagCode} , {$startTagCode}tuiIconButton{$closeTagCode} are components to use them with native {$startTagCode}button{$closeTagCode} and {$startTagCode}a{$closeTagCode} elements. ", {
        "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]",
        "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"
      });
      i18n_0 = MSG_EXTERNAL_7531330618895929781$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__1;
    } else {
      i18n_0 = $localize`:␟e6a149d61f900eaf8225bc53f4e5f70a2af483d6␟7531330618895929781:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiButtonModule${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: is a module with components ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:tuiButton${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:tuiIconButton${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: are components to use them with native ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:button${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:a${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: elements. `;
    }

    i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
    let i18n_2;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__3 = goog.getMsg("Usage");
      i18n_2 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__3;
    } else {
      i18n_2 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
    }

    let i18n_4;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_3343159686784376531$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__5 = goog.getMsg(" Link cannot be {$startTagCode}disabled{$closeTagCode} . If you want to make an unactive link, remove {$startTagCode}href{$closeTagCode} attribute or send an empty string into {$startTagCode}routerLink{$closeTagCode} . To prevent keyboard focus when {$startTagCode}routerLink{$closeTagCode} , use {$startTagCode}[tuiFocusable]=\"false\"{$closeTagCode} directive ", {
        "startTagCode": "[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]",
        "closeTagCode": "[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"
      });
      i18n_4 = MSG_EXTERNAL_3343159686784376531$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__5;
    } else {
      i18n_4 = $localize`:␟81bbfd52914c382590b0f0d18c1123591ffb15ef␟3343159686784376531: Link cannot be ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:disabled${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: . If you want to make an unactive link, remove ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:href${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: attribute or send an empty string into ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:routerLink${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: . To prevent keyboard focus when ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:routerLink${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: , use ${"[\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:[tuiFocusable]="false"${"[\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: directive `;
    }

    i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
    let i18n_6;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_1387438809102966566$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__7 = goog.getMsg("Modes");
      i18n_6 = MSG_EXTERNAL_1387438809102966566$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__7;
    } else {
      i18n_6 = $localize`:␟84179be0a765ac2da1a2bcf6b5b476a4e9253aab␟1387438809102966566:Modes`;
    }

    let i18n_8;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_6967331457159620885$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__9 = goog.getMsg("Rotating");
      i18n_8 = MSG_EXTERNAL_6967331457159620885$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__9;
    } else {
      i18n_8 = $localize`:␟5a9a9bb37e323fa72f117be7f850c7f754de37a3␟6967331457159620885:Rotating`;
    }

    let i18n_10;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_5093220205467023095$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__11 = goog.getMsg("Custom theme");
      i18n_10 = MSG_EXTERNAL_5093220205467023095$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__11;
    } else {
      i18n_10 = $localize`:␟c879182022ac787b589d1a85f9616d778e6efc25␟5093220205467023095:Custom theme`;
    }

    let i18n_12;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__13 = goog.getMsg("Options");
      i18n_12 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__13;
    } else {
      i18n_12 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
    }

    let i18n_14;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_8748187544722377841$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___15 = goog.getMsg(" Appearance mode ");
      i18n_14 = MSG_EXTERNAL_8748187544722377841$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___15;
    } else {
      i18n_14 = $localize`:␟026823b82319471807106b10d1921bca4c3cf14c␟8748187544722377841: Appearance mode `;
    }

    let i18n_16;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_101820728901530778$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___17 = goog.getMsg(" disabled state ");
      i18n_16 = MSG_EXTERNAL_101820728901530778$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___17;
    } else {
      i18n_16 = $localize`:␟9a6e6506042b6d5e27477399cbbdd3e41bf7d0d8␟101820728901530778: disabled state `;
    }

    let i18n_18;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_8480623023289998989$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___19 = goog.getMsg(" Left content ");
      i18n_18 = MSG_EXTERNAL_8480623023289998989$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___19;
    } else {
      i18n_18 = $localize`:␟6ff16f7de04cc77f36d08d43c24646fe920d64a2␟8480623023289998989: Left content `;
    }

    let i18n_20;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_4251750074972270406$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___21 = goog.getMsg(" Right content ");
      i18n_20 = MSG_EXTERNAL_4251750074972270406$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___21;
    } else {
      i18n_20 = $localize`:␟0c1241fe77e2124b62d9c45b4cd0446074885eee␟4251750074972270406: Right content `;
    }

    let i18n_22;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_2417708497028424124$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___23 = goog.getMsg(" Button shape ");
      i18n_22 = MSG_EXTERNAL_2417708497028424124$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___23;
    } else {
      i18n_22 = $localize`:␟5922385f779b17480e5350ed5bf386e7c970c0fe␟2417708497028424124: Button shape `;
    }

    let i18n_24;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_5202720144004890121$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___25 = goog.getMsg(" Adds loader inside ");
      i18n_24 = MSG_EXTERNAL_5202720144004890121$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___25;
    } else {
      i18n_24 = $localize`:␟2d1ee6bbe7aa8b363a54c1d7e446b25c0ba4cd5f␟5202720144004890121: Adds loader inside `;
    }

    let i18n_26;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___27 = goog.getMsg(" Size ");
      i18n_26 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___27;
    } else {
      i18n_26 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
    }

    let i18n_28;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_1959104135768771069$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__29 = goog.getMsg(" Import {$startTagCode}TuiButtonModule{$closeTagCode} into a module where you want to use our component ", {
        "startTagCode": "\uFFFD#4\uFFFD",
        "closeTagCode": "\uFFFD/#4\uFFFD"
      });
      i18n_28 = MSG_EXTERNAL_1959104135768771069$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__29;
    } else {
      i18n_28 = $localize`:␟74d107a2fad7e62d9a2f210cc730bbc723bddd92␟1959104135768771069: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiButtonModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
    }

    let i18n_30;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
      i18n_30 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__31;
    } else {
      i18n_30 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
    }

    let i18n_32;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_3079062251630441825$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__33 = goog.getMsg(" Optionally use the {$startTagCode}TUI_BUTTON_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
        "startTagCode": "\uFFFD#13\uFFFD",
        "closeTagCode": "\uFFFD/#13\uFFFD"
      });
      i18n_32 = MSG_EXTERNAL_3079062251630441825$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__33;
    } else {
      i18n_32 = $localize`:␟8e14a9df7d0d2e927138098908fedfa3647e3357␟3079062251630441825: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_BUTTON_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
    }

    return [["header", "Button", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "usage", "heading", i18n_2, 3, "content"], i18n_4, ["id", "appearance", "heading", i18n_6, 3, "content"], ["id", "dropdown", "heading", i18n_8, 3, "content"], ["id", "custom", "heading", i18n_10, 3, "content"], ["id", "options", "heading", i18n_12, 3, "content"], ["tuiIconButton", "", "type", "button", 3, "appearance", "disabled", "icon", "shape", "showLoader", "size", "pseudoFocus", "pseudoHover", "pseudoActive", 4, "ngIf", "ngIfElse"], ["button", ""], [1, "tui-space_horizontal-2", 3, "singleColor", "ngModel", "ngModelChange"], ["template", ""], ["documentationPropertyName", "appearance", "documentationPropertyMode", "input", "documentationPropertyType", "TuiAppearance | string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconRight", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "shape", "documentationPropertyMode", "input", "documentationPropertyType", "'square' | 'rounded' | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showLoader", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeXS | TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiIconButton", "", "type", "button", 3, "appearance", "disabled", "icon", "shape", "showLoader", "size", "pseudoFocus", "pseudoHover", "pseudoActive"], ["tuiButton", "", "type", "button", 1, "tui-space_right-4", 3, "appearance", "disabled", "icon", "iconRight", "shape", "showLoader", "size", "pseudoFocus", "pseudoHover", "pseudoActive"], ["cardNumber", "1234", "paymentSystem", "maestro", "size", "s", 1, "card"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, [1, "b-demo-steps"], i18n_28, ["filename", "myComponent.module.ts", 3, "code"], i18n_30, ["filename", "myComponent.template.html", 3, "code"], i18n_32];
  },
  template: function ExampleTuiButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
      fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiButtonComponent_ng_template_1_Template, 24, 5, "ng-template", 1);
      fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiButtonComponent_ng_template_2_Template, 19, 16, "ng-template", 1);
      fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiButtonComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }
  },
  directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiButtonExample1, notification_component/* TuiNotificationComponent */.L, TuiButtonExample2, TuiButtonExample3, TuiButtonExample4, TuiButtonExample5, demo_component/* TuiDocDemoComponent */.F, common/* NgIf */.O5, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, button_component/* TuiButtonComponent */.v, card_component/* TuiCardComponent */.S, code_component/* TuiDocCodeComponent */.c],
  styles: ["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{background:#87ceeb}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], ExampleTuiButtonComponent.prototype, "getContentVariants", null);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/button/button.module.ts

















let ExampleTuiButtonModule = /*#__PURE__*/(() => {
  class ExampleTuiButtonModule {}

  ExampleTuiButtonModule.ɵfac = function ExampleTuiButtonModule_Factory(t) {
    return new (t || ExampleTuiButtonModule)();
  };

  ExampleTuiButtonModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiButtonModule
  });
  ExampleTuiButtonModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_commerce.TuiCardModule, kit.TuiAvatarModule, core.TuiSvgModule, kit.TuiToggleModule, cdk.TuiFocusableModule, core.TuiButtonModule, core.TuiHostedDropdownModule, core.TuiDropdownModule, kit.TuiArrowModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiButtonComponent)), core.TuiLinkModule]]
  });
  return ExampleTuiButtonModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiButtonModule, {
    declarations: [ExampleTuiButtonComponent, TuiButtonExample1, TuiButtonExample2, TuiButtonExample3, TuiButtonExample4, TuiButtonExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_commerce.TuiCardModule, kit.TuiAvatarModule, core.TuiSvgModule, kit.TuiToggleModule, cdk.TuiFocusableModule, core.TuiButtonModule, core.TuiHostedDropdownModule, core.TuiDropdownModule, kit.TuiArrowModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, core.TuiLinkModule],
    exports: [ExampleTuiButtonComponent]
  });
})();

/***/ })

}]);