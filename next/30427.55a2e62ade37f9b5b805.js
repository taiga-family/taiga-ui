"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[30427],{

/***/ 30427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTagModule": () => (/* binding */ ExampleTuiTagModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/tag/tag.component.ts
var tag_component = __webpack_require__(49195);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/examples/1/index.ts


let TuiTagExample1 = /*#__PURE__*/(() => {
  class TuiTagExample1 {
    constructor() {
      this.tag = `Hello`;
    }

  }

  TuiTagExample1.ɵfac = function TuiTagExample1_Factory(t) {
    return new (t || TuiTagExample1)();
  };

  TuiTagExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTagExample1,
    selectors: [["tui-tag-example-1"]],
    decls: 3,
    vars: 3,
    consts: [["size", "s", 3, "value"], ["size", "m", 1, "tui-space_left-1", 3, "value"], ["size", "l", 1, "tui-space_left-1", 3, "value"]],
    template: function TuiTagExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-tag", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-tag", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-tag", 2);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.tag);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.tag);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.tag);
      }
    },
    directives: [tag_component/* TuiTagComponent */.G],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTagExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/cdk/directives/repeat-times/repeat-times.directive.ts
var repeat_times_directive = __webpack_require__(36097);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/examples/2/index.ts





function TuiTagExample2_tui_tag_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-tag", 6);
  }

  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵclassMapInterpolate1 */.Gre("tag support-", index_r1 + 1, "");
    fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", ctx_r0.tag);
  }
}

let TuiTagExample2 = /*#__PURE__*/(() => {
  class TuiTagExample2 {
    constructor() {
      this.tag = `Hello!`;
    }

  }

  TuiTagExample2.ɵfac = function TuiTagExample2_Factory(t) {
    return new (t || TuiTagExample2)();
  };

  TuiTagExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTagExample2,
    selectors: [["tui-tag-example-2"]],
    decls: 13,
    vars: 9,
    consts: [[1, "tag", 3, "hoverable", "value"], ["status", "primary", 1, "tag", 3, "hoverable", "value"], ["tuiMode", "onDark", 1, "light-mode"], ["tuiMode", "onLight", 1, "dark-mode"], [1, "tui-space_top-3"], ["status", "custom", 3, "class", "hoverable", "value", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["status", "custom", 3, "hoverable", "value"]],
    template: function TuiTagExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
        fesm2015_core/* ɵɵtext */._uU(1, " Base colors ");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-tag", 0);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-tag", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 2);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-tag", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 3);
        fesm2015_core/* ɵɵelement */._UZ(7, "tui-tag", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "div", 4);
        fesm2015_core/* ɵɵtext */._uU(9, " Support color with CSS and ");
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "code");
        fesm2015_core/* ɵɵtext */._uU(11, "status=\"custom\"");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiTagExample2_tui_tag_12_Template, 1, 5, "tui-tag", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", ctx.tag);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", ctx.tag);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", ctx.tag);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", ctx.tag);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRepeatTimesOf", 20);
      }
    },
    directives: [tag_component/* TuiTagComponent */.G, mode_directive/* TuiModeDirective */.w, repeat_times_directive/* TuiRepeatTimesDirective */.X],
    styles: [".tag[_ngcontent-%COMP%]{margin:.25rem}.light-mode[_ngcontent-%COMP%]{display:inline-block;background-color:#454e58}.dark-mode[_ngcontent-%COMP%]{display:inline-block;margin-left:.25rem;background-color:#e5e7ea}.support-20[_ngcontent-%COMP%]{background-color:var(--tui-support-020);background-color:var(--tui-support-20, var(--tui-support-020))}.support-19[_ngcontent-%COMP%]{background-color:var(--tui-support-019);background-color:var(--tui-support-19, var(--tui-support-019))}.support-18[_ngcontent-%COMP%]{background-color:var(--tui-support-018);background-color:var(--tui-support-18, var(--tui-support-018))}.support-17[_ngcontent-%COMP%]{background-color:var(--tui-support-017);background-color:var(--tui-support-17, var(--tui-support-017))}.support-16[_ngcontent-%COMP%]{background-color:var(--tui-support-016);background-color:var(--tui-support-16, var(--tui-support-016))}.support-15[_ngcontent-%COMP%]{background-color:var(--tui-support-015);background-color:var(--tui-support-15, var(--tui-support-015))}.support-14[_ngcontent-%COMP%]{background-color:var(--tui-support-014);background-color:var(--tui-support-14, var(--tui-support-014))}.support-13[_ngcontent-%COMP%]{background-color:var(--tui-support-013);background-color:var(--tui-support-13, var(--tui-support-013))}.support-12[_ngcontent-%COMP%]{background-color:var(--tui-support-012);background-color:var(--tui-support-12, var(--tui-support-012))}.support-11[_ngcontent-%COMP%]{background-color:var(--tui-support-011);background-color:var(--tui-support-11, var(--tui-support-011))}.support-10[_ngcontent-%COMP%]{background-color:var(--tui-support-010);background-color:var(--tui-support-10, var(--tui-support-010))}.support-9[_ngcontent-%COMP%]{background-color:var(--tui-support-09);background-color:var(--tui-support-9, var(--tui-support-09))}.support-8[_ngcontent-%COMP%]{background-color:var(--tui-support-08);background-color:var(--tui-support-8, var(--tui-support-08))}.support-7[_ngcontent-%COMP%]{background-color:var(--tui-support-07);background-color:var(--tui-support-7, var(--tui-support-07))}.support-6[_ngcontent-%COMP%]{background-color:var(--tui-support-06);background-color:var(--tui-support-6, var(--tui-support-06))}.support-5[_ngcontent-%COMP%]{background-color:var(--tui-support-05);background-color:var(--tui-support-5, var(--tui-support-05))}.support-4[_ngcontent-%COMP%]{background-color:var(--tui-support-04);background-color:var(--tui-support-4, var(--tui-support-04))}.support-3[_ngcontent-%COMP%]{background-color:var(--tui-support-03);background-color:var(--tui-support-3, var(--tui-support-03))}.support-2[_ngcontent-%COMP%]{background-color:var(--tui-support-02);background-color:var(--tui-support-2, var(--tui-support-02))}.support-1[_ngcontent-%COMP%]{background-color:var(--tui-support-01);background-color:var(--tui-support-1, var(--tui-support-01))}"],
    changeDetection: 0
  });
  return TuiTagExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/examples/3/index.ts


let TuiTagExample3 = /*#__PURE__*/(() => {
  class TuiTagExample3 {
    constructor() {
      this.tag = `Hey there`;
    }

  }

  TuiTagExample3.ɵfac = function TuiTagExample3_Factory(t) {
    return new (t || TuiTagExample3)();
  };

  TuiTagExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTagExample3,
    selectors: [["tui-tag-example-3"]],
    decls: 1,
    vars: 2,
    consts: [["size", "l", "status", "custom", 1, "tag", 3, "hoverable", "value"]],
    template: function TuiTagExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-tag", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", ctx.tag);
      }
    },
    directives: [tag_component/* TuiTagComponent */.G],
    styles: [".tag[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#c86dd7 0%,#3023ae 100%);color:var(--tui-text-01-night)}"],
    changeDetection: 0
  });
  return TuiTagExample3;
})();
// EXTERNAL MODULE: ./projects/cdk/directives/for/for.directive.ts
var for_directive = __webpack_require__(85739);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/examples/4/index.ts






function TuiTagExample4_tui_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tag", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("edited", function TuiTagExample4_tui_tag_1_Template_tui_tag_edited_0_listener($event) {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const index_r4 = restoredCtx.index;
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.handleTagEdited($event, index_r4);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", tag_r3)("hoverable", true)("editable", true)("removable", true);
  }
}

function TuiTagExample4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "All tags were removed. But Taiga UI is still an awesome UI-kit library ;)");
  }
}

let TuiTagExample4 = /*#__PURE__*/(() => {
  class TuiTagExample4 {
    constructor() {
      this.tags = [`Taiga UI`, `is an open-source library`, `for awesome people`];
    }

    handleTagEdited(newCaption, currentIndex) {
      this.tags = this.tags.map((caption, index) => index === currentIndex ? newCaption : caption).filter(Boolean);
    }

  }

  TuiTagExample4.ɵfac = function TuiTagExample4_Factory(t) {
    return new (t || TuiTagExample4)();
  };

  TuiTagExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTagExample4,
    selectors: [["tui-tag-example-4"]],
    decls: 11,
    vars: 2,
    consts: [[1, "tags"], ["size", "l", "status", "custom", "class", "tag", 3, "value", "hoverable", "editable", "removable", "edited", 4, "ngFor", "ngForOf", "ngForEmpty"], ["emptyTags", ""], ["status", "info", 1, "tui-space_top-2"], ["size", "l", "status", "custom", 1, "tag", 3, "value", "hoverable", "editable", "removable", "edited"]],
    template: function TuiTagExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTagExample4_tui_tag_1_Template, 1, 4, "tui-tag", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTagExample4_ng_template_2_Template, 1, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Import ");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
        fesm2015_core/* ɵɵtext */._uU(7, "TuiForModule");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(8, " if you want to be able to pass empty list template to ");
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
        fesm2015_core/* ɵɵtext */._uU(10, "ngFor");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.tags)("ngForEmpty", _r1);
      }
    },
    directives: [common/* NgForOf */.sg, for_directive/* TuiForDirective */.i, notification_component/* TuiNotificationComponent */.L, tag_component/* TuiTagComponent */.G],
    styles: [".tags[_ngcontent-%COMP%]{display:flex;align-items:center}.tag[_ngcontent-%COMP%]{background-image:linear-gradient(60deg,#2d96ff 0%,#ff5011 100%);color:var(--tui-text-01-night);margin:.25rem}"],
    changeDetection: 0
  });
  return TuiTagExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/examples/5/index.ts



let TuiTagExample5 = /*#__PURE__*/(() => {
  class TuiTagExample5 {
    constructor() {
      this.tag = `Hello`;
    }

  }

  TuiTagExample5.ɵfac = function TuiTagExample5_Factory(t) {
    return new (t || TuiTagExample5)();
  };

  TuiTagExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTagExample5,
    selectors: [["tui-tag-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiTagOptionsProvider)({
      size: `l`,
      status: `success`
    })])],
    decls: 1,
    vars: 1,
    consts: [[3, "value"]],
    template: function TuiTagExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-tag", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.tag);
      }
    },
    directives: [tag_component/* TuiTagComponent */.G],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTagExample5;
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
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/tag.component.ts















const _c0 = ["errorIcon"];

function ExampleTuiTagComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-tag-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-tag-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-tag-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-tag-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-tag-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
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

function ExampleTuiTagComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 24);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 33);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 34);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 35);
  }
}

function ExampleTuiTagComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 36);
  }
}

function ExampleTuiTagComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-tag", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("edited", function ExampleTuiTagComponent_ng_template_2_Template_tui_tag_edited_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.editTag($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTagComponent_ng_template_2_ng_template_2_Template, 1, 0, "ng-template", null, 11, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTagComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.autoColor = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTagComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiTagComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.editable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiTagComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.hoverable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiTagComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.leftContentSelected = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiTagComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.maxLength = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiTagComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.removable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiTagComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.showLoader = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiTagComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiTagComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.status = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiTagComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTagComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiTagComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("autoColor", ctx_r1.autoColor)("disabled", ctx_r1.disabled)("editable", ctx_r1.editable)("hoverable", ctx_r1.hoverable)("removable", ctx_r1.removable)("leftContent", ctx_r1.leftContent)("maxLength", ctx_r1.maxLength)("size", ctx_r1.size)("showLoader", ctx_r1.showLoader)("status", ctx_r1.status);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.autoColor);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.editable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hoverable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.leftContentVariants)("documentationPropertyValue", ctx_r1.leftContentSelected);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.removable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showLoader);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiTagComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 37);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 38);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 39);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 40);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 41);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 42);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 39);
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

let ExampleTuiTagComponent = /*#__PURE__*/(() => {
  class ExampleTuiTagComponent {
    constructor() {
      this.exampleOptions = __webpack_require__.e(/* import() */ 51470).then(__webpack_require__.t.bind(__webpack_require__, 51470, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 56488).then(__webpack_require__.t.bind(__webpack_require__, 56488, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 87290).then(__webpack_require__.t.bind(__webpack_require__, 87290, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 64004).then(__webpack_require__.t.bind(__webpack_require__, 64004, 17)),
        HTML: __webpack_require__.e(/* import() */ 48182).then(__webpack_require__.t.bind(__webpack_require__, 48182, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 1964).then(__webpack_require__.t.bind(__webpack_require__, 1964, 17)),
        HTML: __webpack_require__.e(/* import() */ 20672).then(__webpack_require__.t.bind(__webpack_require__, 20672, 17)),
        LESS: __webpack_require__.e(/* import() */ 14193).then(__webpack_require__.t.bind(__webpack_require__, 14193, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 79622).then(__webpack_require__.t.bind(__webpack_require__, 79622, 17)),
        HTML: __webpack_require__.e(/* import() */ 18918).then(__webpack_require__.t.bind(__webpack_require__, 18918, 17)),
        LESS: __webpack_require__.e(/* import() */ 67287).then(__webpack_require__.t.bind(__webpack_require__, 67287, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 67298).then(__webpack_require__.t.bind(__webpack_require__, 67298, 17)),
        HTML: __webpack_require__.e(/* import() */ 15979).then(__webpack_require__.t.bind(__webpack_require__, 15979, 17)),
        LESS: __webpack_require__.e(/* import() */ 1849).then(__webpack_require__.t.bind(__webpack_require__, 1849, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 65035).then(__webpack_require__.t.bind(__webpack_require__, 65035, 17)),
        HTML: __webpack_require__.e(/* import() */ 88267).then(__webpack_require__.t.bind(__webpack_require__, 88267, 17))
      };
      this.removable = false;
      this.disabled = false;
      this.editable = false;
      this.autoColor = false;
      this.hoverable = false;
      this.showLoader = false;
      this.value = `John Cleese`;
      this.maxLengthVariants = [10, 20];
      this.maxLength = null;
      this.statusVariants = [`default`, `primary`, `custom`, `success`, `error`, `warning`];
      this.status = this.statusVariants[0];
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[1];
      this.leftContentVariants = [``, `Error icon`];
      this.leftContentSelected = ``;
    }

    get leftContent() {
      return this.errorTemplate && this.leftContentSelected !== null ? this.errorTemplate : ``;
    }

    editTag(value) {
      this.value = value;
    }

  }

  ExampleTuiTagComponent.ɵfac = function ExampleTuiTagComponent_Factory(t) {
    return new (t || ExampleTuiTagComponent)();
  };

  ExampleTuiTagComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTagComponent,
    selectors: [["example-tag"]],
    viewQuery: function ExampleTuiTagComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.errorTemplate = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_295203182456039842$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__2 = goog.getMsg(" Tags show information and they can be edited, deleted or clicked. ");
        i18n_1 = MSG_EXTERNAL_295203182456039842$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟95afdef92ca6e417108fb4e9bad4ceaf0514ac85␟295203182456039842: Tags show information and they can be edited, deleted or clicked. `;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8206584416798270856$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__4 = goog.getMsg(" They work with both {$startTagCode}tui-tag{$closeTagCode} and {$startTagCode}a[tuiTag]{$closeTagCode} selectors ", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_3 = MSG_EXTERNAL_8206584416798270856$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟5b08ad414c0a58fe7b0a8263c4e9c1999c43a1dd␟8206584416798270856: They work with both ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:tui-tag${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:a[tuiTag]${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: selectors `;
      }

      i18n_3 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_3);
      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__6 = goog.getMsg("sizes");
        i18n_5 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5168008278809915722$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__8 = goog.getMsg("Statuses");
        i18n_7 = MSG_EXTERNAL_5168008278809915722$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟8a35b7aecbc09fd6b111ade416a7ed11371d95bd␟5168008278809915722:Statuses`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__10 = goog.getMsg("Custom");
        i18n_9 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3517265394332969172$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__12 = goog.getMsg("Removing and editing");
        i18n_11 = MSG_EXTERNAL_3517265394332969172$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__12;
      } else {
        i18n_11 = $localize`:␟41865fbc6b6179fbea9f00f5fe560296379dbbae␟3517265394332969172:Removing and editing`;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__14 = goog.getMsg("Options");
        i18n_13 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__14;
      } else {
        i18n_13 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8149263575141944006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___16 = goog.getMsg(" Autocolor for tag ");
        i18n_15 = MSG_EXTERNAL_8149263575141944006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟5dc8dede05cd96176a148ac9ef6903e2e69c7c01␟8149263575141944006: Autocolor for tag `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4703780784365037889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___18 = goog.getMsg(" Disabled state ");
        i18n_17 = MSG_EXTERNAL_4703780784365037889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___18;
      } else {
        i18n_17 = $localize`:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9017081683650079535$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___20 = goog.getMsg(" Tag can be edited ");
        i18n_19 = MSG_EXTERNAL_9017081683650079535$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___20;
      } else {
        i18n_19 = $localize`:␟a0d09fc6cdb9dc805a1f9e3edf35a1d48a6ee611␟9017081683650079535: Tag can be edited `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5631539240413317224$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___22 = goog.getMsg(" Enable hovered state ");
        i18n_21 = MSG_EXTERNAL_5631539240413317224$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___22;
      } else {
        i18n_21 = $localize`:␟835de877756233ad75dbf3f8b110329410fc6301␟5631539240413317224: Enable hovered state `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3722490975342576231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___24 = goog.getMsg(" Content left to text ");
        i18n_23 = MSG_EXTERNAL_3722490975342576231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___24;
      } else {
        i18n_23 = $localize`:␟5ab0f60094e7f95cd638b7fbb4a0212154ca72ef␟3722490975342576231: Content left to text `;
      }

      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2232609659014816311$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___26 = goog.getMsg(" Max length of tag (when editing) ");
        i18n_25 = MSG_EXTERNAL_2232609659014816311$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___26;
      } else {
        i18n_25 = $localize`:␟a6c5bcaafa25d6b6ed5fa384ce15bca35b7fea0c␟2232609659014816311: Max length of tag (when editing) `;
      }

      let i18n_27;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3648526541094460583$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___28 = goog.getMsg(" Tag can be removed ");
        i18n_27 = MSG_EXTERNAL_3648526541094460583$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___28;
      } else {
        i18n_27 = $localize`:␟27c0a2e50d00641d72e96a64d7f98e3dd94b51be␟3648526541094460583: Tag can be removed `;
      }

      let i18n_29;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9144462955561175316$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___30 = goog.getMsg(" Show loader ");
        i18n_29 = MSG_EXTERNAL_9144462955561175316$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___30;
      } else {
        i18n_29 = $localize`:␟fd6a3d0fbd7b60fe58776d947d37575928932f78␟9144462955561175316: Show loader `;
      }

      let i18n_31;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___32 = goog.getMsg(" Size ");
        i18n_31 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___32;
      } else {
        i18n_31 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_33;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2582737706860576258$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___34 = goog.getMsg(" Changes color ");
        i18n_33 = MSG_EXTERNAL_2582737706860576258$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___34;
      } else {
        i18n_33 = $localize`:␟c5c6e2a34f208558f7223439cbd18026d71e5b66␟2582737706860576258: Changes color `;
      }

      let i18n_35;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_580179718383755103$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___36 = goog.getMsg(" String value of tag ");
        i18n_35 = MSG_EXTERNAL_580179718383755103$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___36;
      } else {
        i18n_35 = $localize`:␟7920a4b3acedba1a6e2994a0ed0597881a0e4904␟580179718383755103: String value of tag `;
      }

      let i18n_37;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6732262185323970980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___38 = goog.getMsg(" Emits tag change (if it was edited to space or empty string, it emits delete) ");
        i18n_37 = MSG_EXTERNAL_6732262185323970980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS___38;
      } else {
        i18n_37 = $localize`:␟1cb3184a4cf142c1c098282d864fe595194533c8␟6732262185323970980: Emits tag change (if it was edited to space or empty string, it emits delete) `;
      }

      let i18n_39;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_532909106182212111$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__40 = goog.getMsg(" Import {$startTagCode}TuiTagModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_39 = MSG_EXTERNAL_532909106182212111$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__40;
      } else {
        i18n_39 = $localize`:␟7d1662d80315eb2755d56ddc7b352c1c8fdfb6d0␟532909106182212111: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTagModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_41;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__42 = goog.getMsg("Add to the template:");
        i18n_41 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__42;
      } else {
        i18n_41 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_43;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6117404636101957311$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__44 = goog.getMsg(" Optionally use the {$startTagCode}TUI_TAG_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_43 = MSG_EXTERNAL_6117404636101957311$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TAG_TAG_COMPONENT_TS__44;
      } else {
        i18n_43 = $localize`:␟ff3fab96342bd4ac8291b166ac1b17f9572cbd99␟6117404636101957311: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_TAG_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "Tag", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_1, i18n_3, ["id", "sizes", "heading", i18n_5, 3, "content"], ["id", "statuses", "heading", i18n_7, 3, "content"], ["id", "custom", "heading", i18n_9, 3, "content"], ["id", "custom", "heading", i18n_11, 3, "content"], ["id", "options", "heading", i18n_13, 3, "content"], [3, "value", "autoColor", "disabled", "editable", "hoverable", "removable", "leftContent", "maxLength", "size", "showLoader", "status", "edited"], ["errorIcon", ""], ["documentationPropertyName", "autoColor", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hoverable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "leftContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "removable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showLoader", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "status", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStatus", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "edited", "documentationPropertyMode", "output", "documentationPropertyType", "string"], ["src", "tuiIconAttention", 1, "error-icon"], i18n_15, i18n_17, i18n_19, i18n_21, i18n_23, i18n_25, i18n_27, i18n_29, i18n_31, i18n_33, i18n_35, i18n_37, [1, "b-demo-steps"], i18n_39, ["filename", "myComponent.module.ts", 3, "code"], i18n_41, ["filename", "myComponent.template.html", 3, "code"], i18n_43];
    },
    template: function ExampleTuiTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTagComponent_ng_template_1_Template, 16, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTagComponent_ng_template_2_Template, 17, 26, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTagComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTagExample1, TuiTagExample2, TuiTagExample3, TuiTagExample4, TuiTagExample5, demo_component/* TuiDocDemoComponent */.F, tag_component/* TuiTagComponent */.G, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, svg_component/* TuiSvgComponent */.P, code_component/* TuiDocCodeComponent */.c],
    styles: [".error-icon[_ngcontent-%COMP%]{display:block;color:var(--tui-negative);width:1rem;height:1rem}"],
    changeDetection: 0
  });
  return ExampleTuiTagComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tag/tag.module.ts















let ExampleTuiTagModule = /*#__PURE__*/(() => {
  class ExampleTuiTagModule {}

  ExampleTuiTagModule.ɵfac = function ExampleTuiTagModule_Factory(t) {
    return new (t || ExampleTuiTagModule)();
  };

  ExampleTuiTagModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTagModule
  });
  ExampleTuiTagModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiRadioListModule, kit.TuiTagModule, core.TuiModeModule, core.TuiSvgModule, cdk.TuiRepeatTimesModule, public_api/* TuiAddonDocModule */.fV, cdk.TuiForModule, core.TuiNotificationModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTagComponent))]]
  });
  return ExampleTuiTagModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTagModule, {
    declarations: [ExampleTuiTagComponent, TuiTagExample1, TuiTagExample2, TuiTagExample3, TuiTagExample4, TuiTagExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiRadioListModule, kit.TuiTagModule, core.TuiModeModule, core.TuiSvgModule, cdk.TuiRepeatTimesModule, public_api/* TuiAddonDocModule */.fV, cdk.TuiForModule, core.TuiNotificationModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiTagComponent]
  });
})();

/***/ })

}]);