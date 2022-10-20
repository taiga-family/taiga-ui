"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[9272],{

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPushModule": () => (/* binding */ ExampleTuiPushModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/push/push.component.ts
var push_component = __webpack_require__(491);
// EXTERNAL MODULE: ./projects/kit/components/push/push.directive.ts
var push_directive = __webpack_require__(81538);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/push/examples/1/index.ts








let TuiPushExample1 = /*#__PURE__*/(() => {
  class TuiPushExample1 {
    constructor(alert) {
      this.alert = alert;
    }

    onClose() {
      this.alert.open(`Close button is visible when you subscribe to (close) output`).subscribe();
    }

  }

  TuiPushExample1.ɵfac = function TuiPushExample1_Factory(t) {
    return new (t || TuiPushExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiPushExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPushExample1,
    selectors: [["tui-push-example-1"]],
    decls: 17,
    vars: 2,
    consts: [[1, "wrapper"], ["heading", "Rachael", "type", "Replicant", 1, "push", 3, "timestamp", "close"], ["src", "tuiIconSettingsLarge"], ["tuiButton", ""], ["tuiLink", ""], ["heading", "Deckard", "type", "Human?", 1, "push", 3, "timestamp"], ["src", "tuiIconShowLarge", 1, "human"], ["heading", "Roy", "type", "Replicant", 3, "close"], ["src", "assets/images/roy.jpg", "alt", ""]],
    template: function TuiPushExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-push", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("close", function TuiPushExample1_Template_tui_push_close_1_listener() {
          return ctx.onClose();
        });
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Do you like our owl? ");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(5, "It's artificial?");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(7, "Nice hooters!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-push", 5);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-svg", 6);
        fesm2015_core/* ɵɵtext */._uU(10, " I've had people walk out on me before, but not when I was being so charming. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-push", 7);
        fesm2015_core/* ɵɵlistener */.NdJ("close", function TuiPushExample1_Template_tui_push_close_11_listener() {
          return ctx.onClose();
        });
        fesm2015_core/* ɵɵelement */._UZ(12, "img", 8);
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-svg", 2);
        fesm2015_core/* ɵɵtext */._uU(14, " I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. ");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(16, "Time to die");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("timestamp", 1661358075379);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("timestamp", 1661357000000);
      }
    },
    directives: [push_component/* TuiPushComponent */.H, push_directive/* TuiPushDirective */.G, svg_component/* TuiSvgComponent */.P, button_component/* TuiButtonComponent */.v, link_component/* TuiLinkComponent */.V],
    styles: ["[_nghost-%COMP%]{display:block}.wrapper[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);width:22.5rem;max-width:100%;border-radius:var(--tui-radius-l);margin-bottom:1rem}.push[_ngcontent-%COMP%]{box-shadow:none}.human[_ngcontent-%COMP%]{color:var(--tui-positive)}"],
    changeDetection: 0
  });
  return TuiPushExample1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/take.js
var take = __webpack_require__(15257);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/push/examples/2/index.ts







let TuiPushExample2 = /*#__PURE__*/(() => {
  class TuiPushExample2 {
    constructor(push, alert) {
      this.push = push;
      this.alert = alert;
    }

    onClick() {
      this.push.open(`This is heavy!`, {
        heading: `Great Scott!`,
        type: `Quote`,
        icon: `tuiIconVideoLarge`,
        buttons: [`Roads?`, `1.21 Gigawatts!?!`]
      }).pipe((0,take/* take */.q)(1), (0,switchMap/* switchMap */.w)(button => this.alert.open(button))).subscribe();
    }

  }

  TuiPushExample2.ɵfac = function TuiPushExample2_Factory(t) {
    return new (t || TuiPushExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(kit.TuiPushService), fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiPushExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPushExample2,
    selectors: [["tui-push-example-2"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", 3, "click"]],
    template: function TuiPushExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPushExample2_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show push\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPushExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/push/push-alert.directive.ts
var push_alert_directive = __webpack_require__(97075);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/push/examples/3/index.ts








function TuiPushExample3_tui_push_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-push", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("close", function TuiPushExample3_tui_push_2_Template_tui_push_close_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r1.toggle(false);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 3);
    fesm2015_core/* ɵɵtext */._uU(2, " I have a bad feeling about this... ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 0);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPushExample3_tui_push_2_Template_button_click_3_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.toggle(false);
    });
    fesm2015_core/* ɵɵtext */._uU(4, " Fortune ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPushExample3_tui_push_2_Template_button_click_5_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.toggle(false);
    });
    fesm2015_core/* ɵɵtext */._uU(6, " Glory ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiPushExample3 = /*#__PURE__*/(() => {
  class TuiPushExample3 {
    constructor() {
      this.open = false;
    }

    toggle(open) {
      this.open = open;
    }

  }

  TuiPushExample3.ɵfac = function TuiPushExample3_Factory(t) {
    return new (t || TuiPushExample3)();
  };

  TuiPushExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPushExample3,
    selectors: [["tui-push-example-3"]],
    decls: 3,
    vars: 1,
    consts: [["tuiButton", "", 3, "click"], ["heading", "Indiana Jones", "type", "Dr. Henry Walton Jones, Jr.", 3, "close", 4, "tuiPush"], ["heading", "Indiana Jones", "type", "Dr. Henry Walton Jones, Jr.", 3, "close"], ["src", "tuiIconCommentLarge"], ["tuiLink", "", 3, "click"]],
    template: function TuiPushExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPushExample3_Template_button_click_0_listener() {
          return ctx.toggle(true);
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show push\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiPushExample3_tui_push_2_Template, 7, 0, "tui-push", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiPush", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, push_alert_directive/* TuiPushAlertDirective */.K, push_component/* TuiPushComponent */.H, push_directive/* TuiPushDirective */.G, svg_component/* TuiSvgComponent */.P, link_component/* TuiLinkComponent */.V],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPushExample3;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/push/push.component.ts




















function ExampleTuiPushComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, "Notifications in style of native browser push");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-push-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-push-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-push-example-3");
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
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 24);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Output for close button clicks. If you do not listen to this output, close button is hidden. ");
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiPushComponent_ng_template_2_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiPushComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-push", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("close", function ExampleTuiPushComponent_ng_template_2_Template_tui_push_close_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.onClose();
    });
    fesm2015_core/* ɵɵelement */._UZ(2, "img", 6);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 7);
    fesm2015_core/* ɵɵtext */._uU(4, " I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(6, "I want more life");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 9);
    fesm2015_core/* ɵɵtext */._uU(8, "Time to die");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-documentation", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiPushComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPushComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.heading = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiPushComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPushComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.type = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiPushComponent_ng_template_2_ng_template_12_Template, 3, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPushComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.timestamp = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiPushComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-documentation", 15);
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiPushComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiPushComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵtemplate */.YNc(17, ExampleTuiPushComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(18, ExampleTuiPushComponent_ng_template_2_ng_template_18_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵtemplate */.YNc(19, ExampleTuiPushComponent_ng_template_2_ng_template_19_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("heading", ctx_r1.heading)("type", ctx_r1.type)("timestamp", ctx_r1.timestamp);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.heading);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.type);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.timestamp);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
  }
}

function ExampleTuiPushComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 30);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵtext */._uU(2, " To use inline import ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TuiPushModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " in the same module where you want to use our component: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 31);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18n */.SDv(9, 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li");
    fesm2015_core/* ɵɵtext */._uU(12, " Make sure to include ");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "code");
    fesm2015_core/* ɵɵtext */._uU(14, "TuiPushModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(15, " in your main module to be able to show push like alerts. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li");
    fesm2015_core/* ɵɵtext */._uU(17, "See examples to explore display options.");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleImportModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleInsertTemplate);
  }
}

let ExampleTuiPushComponent = /*#__PURE__*/(() => {
  class ExampleTuiPushComponent {
    constructor(alert) {
      this.alert = alert;
      this.exampleImportModule = __webpack_require__.e(/* import() */ 52301).then(__webpack_require__.t.bind(__webpack_require__, 52301, 17));
      this.exampleInsertTemplate = __webpack_require__.e(/* import() */ 3350).then(__webpack_require__.t.bind(__webpack_require__, 3350, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 65745).then(__webpack_require__.t.bind(__webpack_require__, 65745, 17)),
        HTML: __webpack_require__.e(/* import() */ 72181).then(__webpack_require__.t.bind(__webpack_require__, 72181, 17)),
        LESS: __webpack_require__.e(/* import() */ 19073).then(__webpack_require__.t.bind(__webpack_require__, 19073, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 99247).then(__webpack_require__.t.bind(__webpack_require__, 99247, 17)),
        HTML: __webpack_require__.e(/* import() */ 2828).then(__webpack_require__.t.bind(__webpack_require__, 2828, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 92062).then(__webpack_require__.t.bind(__webpack_require__, 92062, 17)),
        HTML: __webpack_require__.e(/* import() */ 59455).then(__webpack_require__.t.bind(__webpack_require__, 59455, 17))
      };
      this.heading = ``;
      this.type = ``;
      this.timestamp = 0;
    }

    onClose() {
      this.alert.open(`Close button is visible when you subscribe to (close) output`).subscribe();
    }

  }

  ExampleTuiPushComponent.ɵfac = function ExampleTuiPushComponent_Factory(t) {
    return new (t || ExampleTuiPushComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  ExampleTuiPushComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPushComponent,
    selectors: [["example-tui-push"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6507514034076114436$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___1 = goog.getMsg(" Heading of the push ");
        i18n_0 = MSG_EXTERNAL_6507514034076114436$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___1;
      } else {
        i18n_0 = $localize`:␟f04ef2f784f7b0f9a785d84409e5ae5a3ed4077b␟6507514034076114436: Heading of the push `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1786648927050352279$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___3 = goog.getMsg(" Small text near icon, typically, category of the message ");
        i18n_2 = MSG_EXTERNAL_1786648927050352279$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___3;
      } else {
        i18n_2 = $localize`:␟c470e39b0d890e73fa1f9c7b80f9e91cea9474aa␟1786648927050352279: Small text near icon, typically, category of the message `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3296248737295462635$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___5 = goog.getMsg(" Timestamp of the arrival. Formatted with {$startLink}{$startTagCode}FormatDate{$closeTagCode}{$closeLink} pipe. ", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_3296248737295462635$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟96756ac0151ec3a529cd67c03f37d181db63c0cf␟3296248737295462635: Timestamp of the arrival. Formatted with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:FormatDate${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: pipe. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6134744519870615123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___7 = goog.getMsg(" Icon in the corner ");
        i18n_6 = MSG_EXTERNAL_6134744519870615123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟56f8fa90fc856575489369784576e429cbe79e36␟6134744519870615123: Icon in the corner `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7974060266116202576$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___9 = goog.getMsg(" Image at the top (360\u00D7170px) ");
        i18n_8 = MSG_EXTERNAL_7974060266116202576$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟344db88313b9a93b6f986a500d6dda333d931eea␟7974060266116202576: Image at the top (360×170px) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7140001989225322475$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___11 = goog.getMsg(" Single button ");
        i18n_10 = MSG_EXTERNAL_7140001989225322475$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟a31f473f47dca4ed5bbfc994b270cccb3e029319␟7140001989225322475: Single button `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_766890365907528803$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___13 = goog.getMsg(" Additional button when it requires two ");
        i18n_12 = MSG_EXTERNAL_766890365907528803$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟b77d10fe844ef9dbecb348e3590c6c4d2524b140␟766890365907528803: Additional button when it requires two `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7958693876154250869$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___15 = goog.getMsg(" The rest of the content is that push body. ");
        i18n_14 = MSG_EXTERNAL_7958693876154250869$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟332af8b301d8903af7063cb873c209e06bcbf684␟7958693876154250869: The rest of the content is that push body. `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS__17 = goog.getMsg("Add to the template:");
        i18n_16 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PUSH_PUSH_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Push", "package", "KIT"], ["pageTab", ""], ["id", "base", "heading", "basic", 3, "content"], ["id", "service", "heading", "with service", 3, "content"], ["id", "directive", "heading", "with directive", 3, "content"], [3, "heading", "type", "timestamp", "close"], ["src", "assets/images/roy.jpg", "alt", ""], ["src", "tuiIconSettingsLarge"], ["tuiButton", ""], ["tuiLink", ""], ["heading", "Inputs/Outputs"], ["documentationPropertyName", "heading", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "type", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "timestamp", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "close", "documentationPropertyMode", "output", "documentationPropertyType", "void"], ["heading", "Content slots", 3, "showValues"], ["documentationPropertyName", "tui-svg", "documentationPropertyType", "Icon"], ["documentationPropertyName", "img", "documentationPropertyType", "Image"], ["documentationPropertyName", "tuiLink", "documentationPropertyType", "Link/Button"], ["documentationPropertyName", "tuiButton", "documentationPropertyType", "Link/Button"], ["documentationPropertyName", "ng-content", "documentationPropertyType", "Arbitrary"], i18n_0, i18n_2, i18n_4, ["tuiLink", "", "routerLink", "/pipes/format-date"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], i18n_16, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPushComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPushComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPushComponent_ng_template_2_Template, 20, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPushComponent_ng_template_3_Template, 18, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPushExample1, TuiPushExample2, TuiPushExample3, demo_component/* TuiDocDemoComponent */.F, push_component/* TuiPushComponent */.H, push_directive/* TuiPushDirective */.G, svg_component/* TuiSvgComponent */.P, button_component/* TuiButtonComponent */.v, link_component/* TuiLinkComponent */.V, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPushComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/push/push.module.ts











let ExampleTuiPushModule = /*#__PURE__*/(() => {
  class ExampleTuiPushModule {}

  ExampleTuiPushModule.ɵfac = function ExampleTuiPushModule_Factory(t) {
    return new (t || ExampleTuiPushModule)();
  };

  ExampleTuiPushModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPushModule
  });
  ExampleTuiPushModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiPushModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiSvgModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPushComponent))]]
  });
  return ExampleTuiPushModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPushModule, {
    declarations: [ExampleTuiPushComponent, TuiPushExample1, TuiPushExample2, TuiPushExample3],
    imports: [common/* CommonModule */.ez, kit.TuiPushModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiSvgModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPushComponent]
  });
})();

/***/ })

}]);