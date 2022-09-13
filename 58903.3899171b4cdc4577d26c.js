"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[58903],{

/***/ 58903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IconsModule": () => (/* binding */ IconsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/customization/customization-icons.component.ts



let IconsCustomizationComponent = /*#__PURE__*/(() => {
  class IconsCustomizationComponent {}

  IconsCustomizationComponent.ɵfac = function IconsCustomizationComponent_Factory(t) {
    return new (t || IconsCustomizationComponent)();
  };

  IconsCustomizationComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: IconsCustomizationComponent,
    selectors: [["customization-icons-example"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_SVG_SRC_PROCESSOR,
      useFactory: () => {
        return src => {
          const myCustomPrefix = `icons8::`;
          return src.startsWith(myCustomPrefix) ? `assets/icons8/${src.replace(myCustomPrefix, ``)}.svg` : src;
        };
      }
    }])],
    decls: 10,
    vars: 0,
    consts: [[1, "icons8"], [1, "icons8-label", "icons8-label-violet"], ["src", "icons8::android", 1, "icons8-icon", "icons8-violet"], ["src", "icons8::ios", 1, "icons8-icon", "icons8-violet"], [1, "icons8-label", "icons8-label-blue"], ["src", "icons8::android", 1, "icons8-icon", "icons8-blue"], ["src", "icons8::ios", 1, "icons8-icon", "icons8-blue"]],
    template: function IconsCustomizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "Violet color");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-svg", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p", 4);
        fesm2015_core/* ɵɵtext */._uU(7, "Blue color");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-svg", 5);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-svg", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [svg_component/* TuiSvgComponent */.P],
    styles: [".icons8[_ngcontent-%COMP%]{margin-bottom:1.5rem}.icons8-icon[_ngcontent-%COMP%]{width:4rem;height:4rem}.icons8-label[_ngcontent-%COMP%]{font-weight:bold;display:inline-block;padding:.25rem .625rem;color:#fff;border-radius:.25rem}.icons8-label-violet[_ngcontent-%COMP%]{background:#a340f1}.icons8-label-blue[_ngcontent-%COMP%]{background:#316df6}.icons8-violet[_ngcontent-%COMP%]{color:#a340f1}.icons8-blue[_ngcontent-%COMP%]{color:#316df6}"]
  });
  return IconsCustomizationComponent;
})();
// EXTERNAL MODULE: ./projects/icons/public-api.ts + 2 modules
var icons_public_api = __webpack_require__(67350);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/icons.tokens.ts


const COMMERCE = [`tuiIconElectron`, `tuiIconMaestro`, `tuiIconMastercard`, `tuiIconMir`, `tuiIconVisa`];
const {
  LARGE,
  NORMAL
} = ensureIcons();
const ICONS = {
  'Description and examples': {
    [`Normal interface icons / 16px`]: NORMAL,
    [`Large interface icons / 24px`]: LARGE,
    [`Payment systems`]: COMMERCE
  }
};
const TUI_DEMO_ICONS = new fesm2015_core/* InjectionToken */.OlP(`[TUI_DEMO_ICONS]: Icons`, {
  factory: () => ICONS
});
/**
 * @description:
 * Algorithm: O(n), where `n` - count of icons
 */

function ensureIcons() {
  const large = [];
  const normal = [];
  const commerceSet = new Set(COMMERCE);

  for (const icon in icons_public_api) {
    const shouldSkip = commerceSet.has(icon) || icon === `tuiCoreIcons` || icon === `tuiKitIcons`;

    if (shouldSkip) {
      continue;
    }

    if (icon.includes(`Large`)) {
      large.push(icon);
    } else {
      normal.push(icon);
    }
  }

  return {
    LARGE: large,
    NORMAL: normal
  };
}
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/icons-group/icons-group.directive.ts




class IconsGroupDirective {
  constructor(template) {
    this.template = template;
  }

}

IconsGroupDirective.ɵfac = function IconsGroupDirective_Factory(t) {
  return new (t || IconsGroupDirective)(fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* TemplateRef */.Rgc));
};

IconsGroupDirective.ɵdir = /*@__PURE__*/fesm2015_core/* ɵɵdefineDirective */.lG2({
  type: IconsGroupDirective,
  selectors: [["", "iconGroup", ""]],
  inputs: {
    iconGroup: "iconGroup"
  }
});

(0,tslib_es6/* __decorate */.gn)([(0,cdk.tuiDefaultProp)()], IconsGroupDirective.prototype, "iconGroup", void 0);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./projects/cdk/directives/for-async/for-async.directive.ts
var for_async_directive = __webpack_require__(9358);
// EXTERNAL MODULE: ./projects/kit/components/badge/badge.component.ts
var badge_component = __webpack_require__(4123);
// EXTERNAL MODULE: ./projects/cdk/pipes/keys/keys.pipe.ts
var keys_pipe = __webpack_require__(68165);
// EXTERNAL MODULE: ./projects/cdk/pipes/filter/filter.pipe.ts
var filter_pipe = __webpack_require__(47305);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/icons-group/icons-group.component.ts




















function IconsGroupComponent_ng_container_4_ng_container_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, "Nothing found");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

const _c6 = function (a0, a1, a2) {
  return {
    icon: a0,
    group: a1,
    copyPath: a2
  };
};

function IconsGroupComponent_ng_container_4_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainer */.GkF(0, 11);
  }

  if (rf & 2) {
    const icon_r6 = ctx.$implicit;
    const key_r1 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngTemplateOutlet", (ctx_r5.iconGroup == null ? null : ctx_r5.iconGroup.template) || null)("ngTemplateOutletContext", fesm2015_core/* ɵɵpureFunction3 */.kEZ(2, _c6, icon_r6, key_r1, ctx_r5.copyPath));
  }
}

function IconsGroupComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "h2", 0);
    fesm2015_core/* ɵɵi18n */.SDv(3, 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-badge", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(5, IconsGroupComponent_ng_container_4_ng_container_1_p_5_Template, 2, 0, "p", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(7, IconsGroupComponent_ng_container_4_ng_container_1_ng_container_7_Template, 1, 6, "ng-container", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const filtered_r3 = ctx.ngIf;
    const key_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵi18nExp */.pQV(key_r1);
    fesm2015_core/* ɵɵi18nApply */.QtT(3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("value", filtered_r3.length.toString())("status", filtered_r3.length ? "success" : "error");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !filtered_r3.length);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiForAsyncOf", filtered_r3);
  }
}

function IconsGroupComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, IconsGroupComponent_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 5);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFilter");
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind3 */.Dn7(2, 1, ctx_r0.icons[key_r1], ctx_r0.matcher, ctx_r0.search));
  }
}

class IconsGroupComponent {
  constructor(clipboard, alertService) {
    this.clipboard = clipboard;
    this.alertService = alertService;
    this.icons = {};
    this.matcher = cdk.TUI_DEFAULT_MATCHER;
    this.search = ``;

    this.copyPath = name => {
      this.clipboard.copy(name);
      this.alertService.open(`The name ${name} copied`, {
        status: "success"
        /* Success */

      }).subscribe();
    };
  }

}

IconsGroupComponent.ɵfac = function IconsGroupComponent_Factory(t) {
  return new (t || IconsGroupComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(clipboard/* Clipboard */.TU), fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
};

IconsGroupComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: IconsGroupComponent,
  selectors: [["icons-group"]],
  contentQueries: function IconsGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      fesm2015_core/* ɵɵcontentQuery */.Suo(dirIndex, IconsGroupDirective, 5);
    }

    if (rf & 2) {
      let _t;

      fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.iconGroup = _t.first);
    }
  },
  inputs: {
    icons: "icons"
  },
  decls: 6,
  vars: 5,
  consts: function () {
    let i18n_0;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_1715668600566441269$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_1 = goog.getMsg(" Search by name\n");
      i18n_0 = MSG_EXTERNAL_1715668600566441269$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟fd963df1746a55d8fa0fc7610df4df991f847660␟1715668600566441269: Search by name
`;
    }

    let i18n_2;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_696084215486677597$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_3 = goog.getMsg(" Input icon name to highlight\n");
      i18n_2 = MSG_EXTERNAL_696084215486677597$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`;
    }

    let i18n_4;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_7253553507236379915$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS___5 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      });
      i18n_4 = MSG_EXTERNAL_7253553507236379915$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS___5;
    } else {
      i18n_4 = $localize`:␟98637bc43fcb683b0da90675491131c614734d49␟7253553507236379915: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }

    return [[1, "title"], i18n_0, ["tuiHintContent", "You can copy icon's name with a click", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], i18n_2, [4, "tuiForAsync", "tuiForAsyncOf"], [4, "ngIf"], [1, "header-group"], i18n_4, ["size", "m", 1, "badge", 3, "hoverable", "value", "status"], [1, "icons"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "tuiForAsync", "tuiForAsyncOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]];
  },
  template: function IconsGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2", 0);
      fesm2015_core/* ɵɵi18n */.SDv(1, 1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 2);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function IconsGroupComponent_Template_tui_input_ngModelChange_2_listener($event) {
        return ctx.search = $event;
      });
      fesm2015_core/* ɵɵi18n */.SDv(3, 3);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(4, IconsGroupComponent_ng_container_4_Template, 3, 5, "ng-container", 4);
      fesm2015_core/* ɵɵpipe */.ALo(5, "tuiKeys");
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("ngModel", ctx.search);
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("tuiForAsyncOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 3, ctx.icons));
    }
  },
  directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, hint_options_directive/* TuiHintOptionsDirective */.b, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, for_async_directive/* TuiForAsyncDirective */.X, common/* NgIf */.O5, badge_component/* TuiBadgeComponent */.g, common/* NgTemplateOutlet */.tP],
  pipes: [keys_pipe/* TuiKeysPipe */.R, filter_pipe/* TuiFilterPipe */.S],
  styles: [".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([(0,cdk.tuiDefaultProp)()], IconsGroupComponent.prototype, "icons", void 0);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/icons.component.ts













function IconsComponent_1_ng_template_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function IconsComponent_1_ng_template_0_ng_template_4_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const icon_r5 = restoredCtx.icon;
      const copyPath_r6 = restoredCtx.copyPath;
      return copyPath_r6(icon_r5);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const icon_r5 = ctx.icon;
    fesm2015_core/* ɵɵproperty */.Q6J("icon", icon_r5);
    fesm2015_core/* ɵɵattribute */.uIk("aria-label", icon_r5);
  }
}

function IconsComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 4);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 5);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "icons-group", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(4, IconsComponent_1_ng_template_0_ng_template_4_Template, 1, 2, "ng-template", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const key_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("icons", ctx_r3.icons[key_r2]);
  }
}

function IconsComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, IconsComponent_1_ng_template_0_Template, 5, 1, "ng-template", 3);
  }

  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("pageTab", key_r2);
  }
}

function IconsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(1, "customization-icons-example");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r1.example1);
  }
}

let IconsComponent = /*#__PURE__*/(() => {
  class IconsComponent {
    constructor(icons) {
      this.icons = icons;
      this.keys = Object.keys(this.icons);
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 98667).then(__webpack_require__.t.bind(__webpack_require__, 98667, 17)),
        HTML: __webpack_require__.e(/* import() */ 82580).then(__webpack_require__.t.bind(__webpack_require__, 82580, 17)),
        LESS: __webpack_require__.e(/* import() */ 39993).then(__webpack_require__.t.bind(__webpack_require__, 39993, 17))
      };
    }

  }

  IconsComponent.ɵfac = function IconsComponent_Factory(t) {
    return new (t || IconsComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(TUI_DEMO_ICONS));
  };

  IconsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: IconsComponent,
    selectors: [["icons"]],
    decls: 3,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_990341683702498937$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS_1 = goog.getMsg("Icons");
        i18n_0 = MSG_EXTERNAL_990341683702498937$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1756857398819821600$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS___3 = goog.getMsg(" These icons can be used by name in {$startLink} Svg {$closeLink} component and all Taiga UI component accepting icons as input. ", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_1756857398819821600$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS___3;
      } else {
        i18n_2 = $localize`:␟839dd4cb6fbcbf0e53e486e5aaa3fa92826a5fe6␟1756857398819821600: These icons can be used by name in ${"\uFFFD#2\uFFFD"}:START_LINK: Svg ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4323470180912194028$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS____5 = goog.getMsg("Copy");
        i18n_4 = MSG_EXTERNAL_4323470180912194028$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS____5;
      } else {
        i18n_4 = $localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5793544987096948211$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS__7 = goog.getMsg("Customization");
        i18n_6 = MSG_EXTERNAL_5793544987096948211$$PROJECTS_DEMO_SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`;
      }

      return [["header", i18n_0], [4, "ngFor", "ngForOf"], ["pageTab", "SVG Processing"], [3, "pageTab"], i18n_2, ["tuiLink", "", "routerLink", "/components/svg"], [3, "icons"], ["iconGroup", ""], ["tuiIconButton", "", "type", "button", "size", "m", "title", i18n_4, "appearance", "icon", 1, "icon", 3, "icon", "click"], ["id", "base", "heading", i18n_6, "description", "You can customize the path to your icons and inherit color", 3, "content"]];
    },
    template: function IconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, IconsComponent_1_Template, 1, 1, undefined, 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, IconsComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.keys);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, common/* NgForOf */.sg, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, IconsGroupComponent, IconsGroupDirective, button_component/* TuiButtonComponent */.v, example_component/* TuiDocExampleComponent */.f, IconsCustomizationComponent],
    styles: [".icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}"],
    changeDetection: 0
  });
  return IconsComponent;
})();
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/icons-group/icons-group.module.ts








let IconsGroupModule = /*#__PURE__*/(() => {
  class IconsGroupModule {}

  IconsGroupModule.ɵfac = function IconsGroupModule_Factory(t) {
    return new (t || IconsGroupModule)();
  };

  IconsGroupModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: IconsGroupModule
  });
  IconsGroupModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiInputModule, kit.TuiBadgeModule, cdk.TuiForAsyncModule, cdk.TuiKeysPipeModule, cdk.TuiFilterPipeModule, core.TuiHintModule, core.TuiTextfieldControllerModule]]
  });
  return IconsGroupModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(IconsGroupModule, {
    declarations: [IconsGroupComponent, IconsGroupDirective],
    imports: [fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiInputModule, kit.TuiBadgeModule, cdk.TuiForAsyncModule, cdk.TuiKeysPipeModule, cdk.TuiFilterPipeModule, core.TuiHintModule, core.TuiTextfieldControllerModule],
    exports: [IconsGroupComponent, IconsGroupDirective]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/icons/icons.module.ts









let IconsModule = /*#__PURE__*/(() => {
  class IconsModule {}

  IconsModule.ɵfac = function IconsModule_Factory(t) {
    return new (t || IconsModule)();
  };

  IconsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: IconsModule
  });
  IconsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiLinkModule, core.TuiSvgModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, IconsGroupModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(IconsComponent))]]
  });
  return IconsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(IconsModule, {
    declarations: [IconsComponent, IconsCustomizationComponent],
    imports: [common/* CommonModule */.ez, core.TuiLinkModule, core.TuiSvgModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, IconsGroupModule, router/* RouterModule */.Bz],
    exports: [IconsComponent]
  });
})();

/***/ })

}]);