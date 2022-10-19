"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[20910],{

/***/ 20910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiAvatarModule": () => (/* binding */ ExampleTuiAvatarModule)
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/examples/1/index.ts


let TuiAvatarExample1 = /*#__PURE__*/(() => {
  class TuiAvatarExample1 {
    constructor() {
      this.avatar = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;
    }

  }

  TuiAvatarExample1.ɵfac = function TuiAvatarExample1_Factory(t) {
    return new (t || TuiAvatarExample1)();
  };

  TuiAvatarExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAvatarExample1,
    selectors: [["tui-avatar-example-1"]],
    decls: 3,
    vars: 2,
    consts: [[1, "tui-space_top-1", 3, "avatarUrl"], ["text", "alex inkin", 1, "tui-space_top-1"], ["text", "dmitry demensky", "size", "l", 1, "tui-space_top-1", 3, "rounded"]],
    template: function TuiAvatarExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 2);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", ctx.avatar);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
      }
    },
    directives: [avatar_component/* TuiAvatarComponent */.J],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAvatarExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/examples/2/index.ts


let TuiAvatarExample2 = /*#__PURE__*/(() => {
  class TuiAvatarExample2 {}

  TuiAvatarExample2.ɵfac = function TuiAvatarExample2_Factory(t) {
    return new (t || TuiAvatarExample2)();
  };

  TuiAvatarExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAvatarExample2,
    selectors: [["tui-avatar-example-2"]],
    decls: 4,
    vars: 3,
    consts: [["text", "yuliya tsareva", 1, "tui-space_top-1", 3, "autoColor"], ["text", "alex inkin", 1, "tui-space_top-1", 3, "autoColor"], ["text", "dmitry demensky", 1, "tui-space_top-1", 3, "autoColor"], ["text", "evgeniy mamaev", 1, "custom", "tui-space_top-1"]],
    template: function TuiAvatarExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-avatar", 3);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("autoColor", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("autoColor", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("autoColor", true);
      }
    },
    directives: [avatar_component/* TuiAvatarComponent */.J],
    styles: [".custom[_ngcontent-%COMP%]{--tui-avatar-color: #fff;--tui-avatar-background: linear-gradient(to bottom right, #cd56c2, #6e48aa)}"],
    changeDetection: 0
  });
  return TuiAvatarExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/examples/3/index.ts



let TuiAvatarExample3 = /*#__PURE__*/(() => {
  class TuiAvatarExample3 {}

  TuiAvatarExample3.ɵfac = function TuiAvatarExample3_Factory(t) {
    return new (t || TuiAvatarExample3)();
  };

  TuiAvatarExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAvatarExample3,
    selectors: [["tui-avatar-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiAvatarOptionsProvider)({
      size: `l`,
      autoColor: true,
      rounded: true
    })])],
    decls: 1,
    vars: 0,
    consts: [["text", "yuliya tsareva", 1, "tui-space_top-1"]],
    template: function TuiAvatarExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 0);
      }
    },
    directives: [avatar_component/* TuiAvatarComponent */.J],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAvatarExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/examples/4/index.ts




function TuiAvatarExample4_tui_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 4);
  }

  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("autoColor", true)("text", user_r2);
  }
}

function TuiAvatarExample4_tui_avatar_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 5);
  }

  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true)("autoColor", true)("text", user_r3);
  }
}

let TuiAvatarExample4 = /*#__PURE__*/(() => {
  class TuiAvatarExample4 {
    constructor() {
      this.users = [`Alex Inkin`, `Vladimir Potekhin`, `Nikita Barsukov`, `Maxim Ivanov`];
    }

  }

  TuiAvatarExample4.ɵfac = function TuiAvatarExample4_Factory(t) {
    return new (t || TuiAvatarExample4)();
  };

  TuiAvatarExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAvatarExample4,
    selectors: [["tui-avatar-example-4"]],
    decls: 4,
    vars: 2,
    consts: [[1, "tui-avatar-stack"], [3, "autoColor", "text", 4, "ngFor", "ngForOf"], [1, "tui-avatar-stack", "reversed"], ["size", "l", 3, "rounded", "autoColor", "text", 4, "ngFor", "ngForOf"], [3, "autoColor", "text"], ["size", "l", 3, "rounded", "autoColor", "text"]],
    template: function TuiAvatarExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiAvatarExample4_tui_avatar_1_Template, 1, 2, "tui-avatar", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiAvatarExample4_tui_avatar_3_Template, 1, 3, "tui-avatar", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.users);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.users);
      }
    },
    directives: [common/* NgForOf */.sg, avatar_component/* TuiAvatarComponent */.J],
    styles: [".reversed[_ngcontent-%COMP%]{flex-direction:row-reverse;margin-top:1rem}"],
    changeDetection: 0
  });
  return TuiAvatarExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/examples/5/index.ts


let TuiAvatarExample5 = /*#__PURE__*/(() => {
  class TuiAvatarExample5 {}

  TuiAvatarExample5.ɵfac = function TuiAvatarExample5_Factory(t) {
    return new (t || TuiAvatarExample5)();
  };

  TuiAvatarExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAvatarExample5,
    selectors: [["tui-avatar-example-5"]],
    decls: 5,
    vars: 0,
    consts: [["text", "alex inkin", "size", "xs", "avatarUrl", "tuiIconUser"], ["text", "alex inkin", "size", "s", "avatarUrl", "tuiIconUser", 1, "tui-space_vertical-1"], ["text", "alex inkin", "size", "m", "avatarUrl", "tuiIconUser"], ["text", "alex inkin", "size", "l", "avatarUrl", "tuiIconUser", 1, "tui-space_vertical-1"], ["text", "alex inkin", "size", "xl", "avatarUrl", "tuiIconUser"]],
    template: function TuiAvatarExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-avatar", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-avatar", 4);
      }
    },
    directives: [avatar_component/* TuiAvatarComponent */.J],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAvatarExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/avatar.component.ts
















function ExampleTuiAvatarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-avatar-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-avatar-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-avatar-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-notification", 7);
    fesm2015_core/* ɵɵtext */._uU(10, " Use special ");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "code");
    fesm2015_core/* ɵɵtext */._uU(12, "tui-avatar-stack");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(13, " class to enable stacking ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-avatar-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-avatar-example-5");
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
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Color of the border for stacking avatars ");
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Color of the text ");
  }
}

function ExampleTuiAvatarComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Background ");
  }
}

function ExampleTuiAvatarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAvatarComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.autoColor = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiAvatarComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.avatarUrl = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiAvatarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.rounded = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiAvatarComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiAvatarComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.text = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-documentation", 15);
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiAvatarComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.border = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiAvatarComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.color = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiAvatarComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAvatarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.background = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("--tui-avatar-color", ctx_r1.color)("--tui-avatar-background", ctx_r1.background);
    fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", ctx_r1.avatarUrl)("text", ctx_r1.text)("rounded", ctx_r1.rounded)("size", ctx_r1.size)("autoColor", ctx_r1.autoColor);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.autoColor);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.avatarUrlVariants)("documentationPropertyValue", ctx_r1.avatarUrl);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.rounded);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.text);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.border);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.color);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.background);
  }
}

function ExampleTuiAvatarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 25);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 29);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 26);
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

let ExampleTuiAvatarComponent = /*#__PURE__*/(() => {
  class ExampleTuiAvatarComponent {
    constructor() {
      this.exampleOptions = __webpack_require__.e(/* import() */ 71297).then(__webpack_require__.t.bind(__webpack_require__, 71297, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 52352).then(__webpack_require__.t.bind(__webpack_require__, 52352, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 95593).then(__webpack_require__.t.bind(__webpack_require__, 95593, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 89885).then(__webpack_require__.t.bind(__webpack_require__, 89885, 17)),
        HTML: __webpack_require__.e(/* import() */ 31119).then(__webpack_require__.t.bind(__webpack_require__, 31119, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 72557).then(__webpack_require__.t.bind(__webpack_require__, 72557, 17)),
        HTML: __webpack_require__.e(/* import() */ 74879).then(__webpack_require__.t.bind(__webpack_require__, 74879, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 70634).then(__webpack_require__.t.bind(__webpack_require__, 70634, 17)),
        HTML: __webpack_require__.e(/* import() */ 17696).then(__webpack_require__.t.bind(__webpack_require__, 17696, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 75247).then(__webpack_require__.t.bind(__webpack_require__, 75247, 17)),
        HTML: __webpack_require__.e(/* import() */ 79489).then(__webpack_require__.t.bind(__webpack_require__, 79489, 17)),
        LESS: __webpack_require__.e(/* import() */ 79489).then(__webpack_require__.t.bind(__webpack_require__, 79489, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 13744).then(__webpack_require__.t.bind(__webpack_require__, 13744, 17)),
        HTML: __webpack_require__.e(/* import() */ 71370).then(__webpack_require__.t.bind(__webpack_require__, 71370, 17))
      };
      this.avatarUrlVariants = [`https://ng-web-apis.github.io/dist/assets/images/web-api.svg`];
      this.avatarUrl = null;
      this.text = `daenerys targaryen`;
      this.rounded = false;
      this.autoColor = false;
      this.sizeVariants = [`xs`, `s`, `m`, `l`, `xl`, `xxl`];
      this.size = this.sizeVariants[2];
      this.border = `var(--tui-base-01)`;
      this.color = `var(--tui-text-01)`;
      this.background = `var(--tui-secondary-active)`;
    }

  }

  ExampleTuiAvatarComponent.ɵfac = function ExampleTuiAvatarComponent_Factory(t) {
    return new (t || ExampleTuiAvatarComponent)();
  };

  ExampleTuiAvatarComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiAvatarComponent,
    selectors: [["example-avatar"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_354985861363080987$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__1 = goog.getMsg("Use Avatar to view person or company. It can be photo, icon or first letters of name.");
        i18n_0 = MSG_EXTERNAL_354985861363080987$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟0812e0922281753776de81e397100e03cb85e62c␟354985861363080987:Use Avatar to view person or company. It can be photo, icon or first letters of name.`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__5 = goog.getMsg("Colors");
        i18n_4 = MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__7 = goog.getMsg("Options");
        i18n_6 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8663494711819579907$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__9 = goog.getMsg("Stacking avatars");
        i18n_8 = MSG_EXTERNAL_8663494711819579907$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟86b5b884f5298aae05954850b424dbb4a20d50b2␟8663494711819579907:Stacking avatars`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_990341683702498937$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__11 = goog.getMsg("Icons");
        i18n_10 = MSG_EXTERNAL_990341683702498937$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_630069659234858085$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___13 = goog.getMsg(" Autocolor if there is no image ");
        i18n_12 = MSG_EXTERNAL_630069659234858085$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟eafc1f8053cdb087893cc48f55a6cc52a818863e␟630069659234858085: Autocolor if there is no image `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5132594975156085206$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___15 = goog.getMsg(" Avatar URL or Taiga UI icon name ");
        i18n_14 = MSG_EXTERNAL_5132594975156085206$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟d22bc313d8514369abb7d2d0cdaa710ecd4a1606␟5132594975156085206: Avatar URL or Taiga UI icon name `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8720720071780904257$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___17 = goog.getMsg(" Rounded mode ");
        i18n_16 = MSG_EXTERNAL_8720720071780904257$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟6f3bd0a381b0f06876aa2784116206982c42c257␟8720720071780904257: Rounded mode `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___19 = goog.getMsg(" Size ");
        i18n_18 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3319915161488619622$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___21 = goog.getMsg(" Name (Avatar shows first letters of name if there is no image) ");
        i18n_20 = MSG_EXTERNAL_3319915161488619622$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟32fcdad138fd1b5d1840a1723406b851f8db90b1␟3319915161488619622: Name (Avatar shows first letters of name if there is no image) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_302743281526660294$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiAvatarModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_302743281526660294$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟c586e5429efff808d191d3bce9465d7555d9c17d␟302743281526660294: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAvatarModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
        i18n_24 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6990820332502485209$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__27 = goog.getMsg(" Optionally use the {$startTagCode}TUI_AVATAR_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_6990820332502485209$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_AVATAR_AVATAR_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟32a70286ff0a610834fb31ecc76ac76efc7baa1d␟6990820332502485209: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_AVATAR_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "Avatar", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "autocolor", "heading", i18n_4, 3, "content"], ["id", "options", "heading", i18n_6, 3, "content"], ["id", "stacking", "heading", i18n_8, 3, "content"], [1, "tui-space_bottom-4"], ["id", "icons", "heading", i18n_10, 3, "content"], [3, "avatarUrl", "text", "rounded", "size", "autoColor"], ["documentationPropertyName", "autoColor", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "avatarUrl", "documentationPropertyType", "string | null", "documentationPropertyMode", "input", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rounded", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyType", "TuiSizeXS | TuiSizeXXL", "documentationPropertyMode", "input", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "text", "documentationPropertyType", "string", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["heading", "CSS variables"], ["documentationPropertyName", "--tui-avatar-border", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "--tui-avatar-color", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "--tui-avatar-background", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_22, ["filename", "myComponent.module.ts", 3, "code"], i18n_24, ["filename", "myComponent.template.html", 3, "code"], i18n_26];
    },
    template: function ExampleTuiAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAvatarComponent_ng_template_1_Template, 17, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAvatarComponent_ng_template_2_Template, 12, 19, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAvatarComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiAvatarExample1, TuiAvatarExample2, TuiAvatarExample3, notification_component/* TuiNotificationComponent */.L, TuiAvatarExample4, TuiAvatarExample5, demo_component/* TuiDocDemoComponent */.F, avatar_component/* TuiAvatarComponent */.J, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiAvatarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/avatar/avatar.module.ts













let ExampleTuiAvatarModule = /*#__PURE__*/(() => {
  class ExampleTuiAvatarModule {}

  ExampleTuiAvatarModule.ɵfac = function ExampleTuiAvatarModule_Factory(t) {
    return new (t || ExampleTuiAvatarModule)();
  };

  ExampleTuiAvatarModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiAvatarModule
  });
  ExampleTuiAvatarModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiAvatarModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiAvatarComponent))]]
  });
  return ExampleTuiAvatarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiAvatarModule, {
    declarations: [ExampleTuiAvatarComponent, TuiAvatarExample1, TuiAvatarExample2, TuiAvatarExample3, TuiAvatarExample4, TuiAvatarExample5],
    imports: [common/* CommonModule */.ez, kit.TuiAvatarModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiAvatarComponent]
  });
})();

/***/ })

}]);