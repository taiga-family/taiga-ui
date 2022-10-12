"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[50272],{

/***/ 50272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPrimitiveTextfieldModule": () => (/* binding */ ExampleTuiPrimitiveTextfieldModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2015/platform-browser.js
var platform_browser = __webpack_require__(91211);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js
var ng_web_apis_common = __webpack_require__(62579);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tokens/css-vars.ts

const CSS_VARS = new fesm2015_core/* InjectionToken */.OlP(`[CSS_VARS]: CSS vars list for customization`, {
  factory: () => []
});
;// CONCATENATED MODULE: ./projects/demo/src/modules/app/customization/customization.providers.ts






const TUI_DOC_CUSTOMIZATION_VARS = new fesm2015_core/* InjectionToken */.OlP(`[TUI_DOC_CUSTOMIZATION_VARS]: CSS variables map`);
const TUI_DOC_CUSTOMIZATION_PROVIDERS = [cdk.TuiDestroyService, {
  provide: core.TuiModeDirective,
  useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => TuiCustomizationComponent)
}, {
  provide: TUI_DOC_CUSTOMIZATION_VARS,
  deps: [ng_web_apis_common/* WINDOW */.m9, CSS_VARS],
  useFactory: (windowRef, variables) => {
    const styles = windowRef.getComputedStyle(windowRef.document.documentElement);
    return variables.reduce((dictionary, variable) => Object.assign(Object.assign({}, dictionary), {
      [variable]: styles.getPropertyValue(variable).trim()
    }), {});
  }
}];
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion.component.ts
var accordion_component = __webpack_require__(36710);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item.component.ts
var accordion_item_component = __webpack_require__(23178);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item-content.directive.ts
var accordion_item_content_directive = __webpack_require__(7406);
;// CONCATENATED MODULE: ./projects/demo/src/modules/app/customization/customization.component.ts

















const _c0 = ["demo"];

function TuiCustomizationComponent_tui_doc_documentation_3_1_ng_template_0_Template(rf, ctx) {}

function TuiCustomizationComponent_tui_doc_documentation_3_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiCustomizationComponent_tui_doc_documentation_3_1_ng_template_0_Template, 0, 0, "ng-template", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function TuiCustomizationComponent_tui_doc_documentation_3_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const variable_r5 = restoredCtx.$implicit;
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r7.onModelChange(variable_r5, $event);
    });
  }

  if (rf & 2) {
    const variable_r5 = ctx.$implicit;
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyName", variable_r5)("documentationPropertyType", ctx_r4.getType(variable_r5))("documentationPropertyValue", ctx_r4.getVariable(variable_r5));
  }
}

function TuiCustomizationComponent_tui_doc_documentation_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_tui_doc_documentation_3_1_Template, 1, 3, undefined, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiMode", null);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.keys);
  }
}

function TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_1_ng_template_0_Template(rf, ctx) {}

function TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const variable_r13 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r16.onModelChange(variable_r13, $event);
    });
  }

  if (rf & 2) {
    const variable_r13 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyName", variable_r13)("documentationPropertyType", ctx_r14.getType(variable_r13))("documentationPropertyValue", ctx_r14.getVariable(variable_r13));
  }
}

function TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_1_Template, 1, 3, undefined, 7);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const variable_r13 = ctx.$implicit;
    const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx_r12.isDark(variable_r13) && !ctx_r12.isLight(variable_r13));
  }
}

function TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_ng_container_1_Template, 2, 1, "ng-container", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r9.keys);
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template(rf, ctx) {}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r27);
      const variable_r22 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw(4);
      return ctx_r25.onModelChange(variable_r22, $event);
    });
  }

  if (rf & 2) {
    const variable_r22 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyName", variable_r22)("documentationPropertyType", ctx_r23.getType(variable_r22))("documentationPropertyValue", ctx_r23.getVariable(variable_r22));
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_1_Template, 1, 3, undefined, 7);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const variable_r22 = ctx.$implicit;
    const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw(4);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r21.isLight(variable_r22));
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r20.keys);
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion-item");
    fesm2015_core/* ɵɵtext */._uU(1, " Light ");
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_tui_doc_documentation_2_Template, 2, 1, "tui-doc-documentation", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template(rf, ctx) {}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_Template_ng_template_documentationPropertyValueChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r36);
      const variable_r31 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r34 = fesm2015_core/* ɵɵnextContext */.oxw(4);
      return ctx_r34.onModelChange(variable_r31, $event);
    });
  }

  if (rf & 2) {
    const variable_r31 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r32 = fesm2015_core/* ɵɵnextContext */.oxw(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyName", variable_r31)("documentationPropertyType", ctx_r32.getType(variable_r31))("documentationPropertyValue", ctx_r32.getVariable(variable_r31));
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_1_Template, 1, 3, undefined, 7);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const variable_r31 = ctx.$implicit;
    const ctx_r30 = fesm2015_core/* ɵɵnextContext */.oxw(4);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r30.isDark(variable_r31));
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r29.keys);
  }
}

function TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion-item");
    fesm2015_core/* ɵɵtext */._uU(1, " Dark ");
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_tui_doc_documentation_2_Template, 2, 1, "tui-doc-documentation", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiCustomizationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-accordion-item");
    fesm2015_core/* ɵɵtext */._uU(2, " Default ");
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiCustomizationComponent_ng_template_4_tui_doc_documentation_3_Template, 2, 1, "tui-doc-documentation", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCustomizationComponent_ng_template_4_tui_accordion_item_4_Template, 3, 0, "tui-accordion-item", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiCustomizationComponent_ng_template_4_tui_accordion_item_5_Template, 3, 0, "tui-accordion-item", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiMode", null);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r3.hasLight);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r3.hasLight);
  }
}

const _c1 = ["*"];
class TuiCustomizationComponent {
  constructor(destroy$, sanitizer, variables) {
    this.destroy$ = destroy$;
    this.sanitizer = sanitizer;
    this.variables = variables;
    this.change$ = new Subject/* Subject */.xQ();
  }

  get style() {
    return this.getStyle(this.sanitizer, this.stringify(this.variables));
  }

  get keys() {
    return this.getKeys(this.variables);
  }

  get basic() {
    return !this.hasDark && !this.hasLight;
  }

  get hasLight() {
    return this.keys.some(this.isLight);
  }

  get hasDark() {
    return this.keys.some(this.isDark);
  }

  get mode() {
    var _a;

    return ((_a = this.demo) === null || _a === void 0 ? void 0 : _a.mode) || null;
  }

  ngAfterViewInit() {
    if (!this.demo) {
      return;
    }

    this.demo.change$.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(() => {
      this.change$.next();
    });
  }

  isLight(key) {
    return key.includes(`onDark`);
  }

  isDark(key) {
    return key.includes(`onLight`);
  }

  onModelChange(variable, value) {
    this.variables = Object.assign(Object.assign({}, this.variables), {
      [variable]: (0,cdk.tuiIsString)(value) ? value : (0,cdk.tuiPx)(value)
    });
  }

  getType(key) {
    const variable = this.variables[key];

    if (key.includes(`boxshadow`)) {
      return `string`;
    }

    return variable.startsWith(`#`) || variable.startsWith(`rgb`) ? `color` : `number`;
  }

  getVariable(key) {
    const variable = this.variables[key];
    return variable.includes(`px`) ? Number.parseInt(variable, 10) : variable;
  }

  getKeys(variables) {
    return Object.keys(variables);
  }

  getStyle(sanitizer, variables) {
    return sanitizer.bypassSecurityTrustStyle(variables);
  }

  stringify(variables) {
    return Object.keys(variables).reduce((result, key) => `${key}: ${variables[key]}; ${result}`, ``);
  }

}

TuiCustomizationComponent.ɵfac = function TuiCustomizationComponent_Factory(t) {
  return new (t || TuiCustomizationComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDestroyService), fesm2015_core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7), fesm2015_core/* ɵɵdirectiveInject */.Y36(TUI_DOC_CUSTOMIZATION_VARS));
};

TuiCustomizationComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiCustomizationComponent,
  selectors: [["tui-customization"]],
  viewQuery: function TuiCustomizationComponent_Query(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
    }

    if (rf & 2) {
      let _t;

      fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.demo = _t.first);
    }
  },
  features: [fesm2015_core/* ɵɵProvidersFeature */._Bn(TUI_DOC_CUSTOMIZATION_PROVIDERS)],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 3,
  consts: [["demo", ""], ["class", "tui-space_top-6", 3, "tuiMode", 4, "ngIf", "ngIfElse"], ["withMode", ""], [1, "tui-space_top-6", 3, "tuiMode"], [4, "ngFor", "ngForOf"], [3, "documentationPropertyName", "documentationPropertyType", "documentationPropertyValue", "documentationPropertyValueChange"], [4, "tuiAccordionItemContent"], [4, "ngIf"]],
  template: function TuiCustomizationComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵprojectionDef */.F$t();
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", null, 0);
      fesm2015_core/* ɵɵprojection */.Hsn(2);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(3, TuiCustomizationComponent_tui_doc_documentation_3_Template, 2, 2, "tui-doc-documentation", 1);
      fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCustomizationComponent_ng_template_4_Template, 6, 3, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    }

    if (rf & 2) {
      const _r2 = fesm2015_core/* ɵɵreference */.MAs(5);

      fesm2015_core/* ɵɵattribute */.uIk("style", ctx.style, fesm2015_core/* ɵɵsanitizeStyle */.Ckj);
      fesm2015_core/* ɵɵadvance */.xp6(3);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.basic)("ngIfElse", _r2);
    }
  },
  directives: [demo_component/* TuiDocDemoComponent */.F, common/* NgIf */.O5, documentation_component/* TuiDocDocumentationComponent */.z, mode_directive/* TuiModeDirective */.w, common/* NgForOf */.sg, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d],
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiCustomizationComponent.prototype, "getKeys", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiCustomizationComponent.prototype, "getStyle", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiCustomizationComponent.prototype, "stringify", null);
;// CONCATENATED MODULE: ./projects/demo/src/modules/app/customization/customization.module.ts







let TuiCustomizationModule = /*#__PURE__*/(() => {
  class TuiCustomizationModule {}

  TuiCustomizationModule.ɵfac = function TuiCustomizationModule_Factory(t) {
    return new (t || TuiCustomizationModule)();
  };

  TuiCustomizationModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiCustomizationModule
  });
  TuiCustomizationModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, public_api/* TuiDocDocumentationModule */.Lx, public_api/* TuiDocDemoModule */.mG, core.TuiModeModule, kit.TuiAccordionModule]]
  });
  return TuiCustomizationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiCustomizationModule, {
    declarations: [TuiCustomizationComponent],
    imports: [fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, public_api/* TuiDocDocumentationModule */.Lx, public_api/* TuiDocDemoModule */.mG, core.TuiModeModule, kit.TuiAccordionModule],
    exports: [TuiCustomizationComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/themes/bootstrap/bootstrap.component.ts


let BootstrapComponent = /*#__PURE__*/(() => {
  class BootstrapComponent extends cdk.AbstractTuiThemeSwitcher {}

  BootstrapComponent.ɵfac = /*@__PURE__*/function () {
    let ɵBootstrapComponent_BaseFactory;
    return function BootstrapComponent_Factory(t) {
      return (ɵBootstrapComponent_BaseFactory || (ɵBootstrapComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(BootstrapComponent)))(t || BootstrapComponent);
    };
  }();

  BootstrapComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: BootstrapComponent,
    selectors: [["bootstrap"]],
    features: [fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 0,
    vars: 0,
    template: function BootstrapComponent_Template(rf, ctx) {},
    styles: [".theme-wrapper{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;--tui-primary-text: #fff;--tui-primary: #007bff;--tui-primary-hover: #0069d9;--tui-primary-active: #0062cc;--tui-radius-m: .25rem;--tui-text-03: #6c757d;--tui-text-02: #6c757d}.theme-wrapper .demo-placeholder{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.theme-wrapper [tui-wrapper][data-appearance=textfield]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;background:transparent;box-shadow:none}.theme-wrapper [tui-wrapper][data-appearance=textfield]:after{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:#ced4da}.theme-wrapper [tui-wrapper][data-appearance=textfield]:focus-visible:focus-visible:after{color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.theme-wrapper [tui-wrapper][data-appearance=textfield]._focused._focused:after{color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onDark]:after{color:#959aa0}@media (hover: hover){.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onDark]:hover:not(._no-hover),.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onDark][data-state=hover]{background:transparent}}.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onDark]:focus-visible:focus-visible:after{color:#db6574;box-shadow:none}.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onDark]._focused._focused:after{color:#db6574;box-shadow:none}.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onLight]:after{color:#959aa0}@media (hover: hover){.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onLight]:hover:not(._no-hover),.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onLight][data-state=hover]{background:transparent}}.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onLight]:focus-visible:focus-visible:after{color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.theme-wrapper [tui-wrapper][data-appearance=textfield][data-mode=onLight]._focused._focused:after{color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.theme-wrapper tui-button{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;font-size:1rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.theme-wrapper tui-button._focused{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.theme-wrapper tui-tabs{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;box-shadow:none;color:#007bff}.theme-wrapper tui-tabs [tuiTab]{margin:0;padding:0 .75rem;height:2.5rem;border-bottom:1px solid #dee2e6}.theme-wrapper tui-tabs [tuiTab]:hover{color:#0069d9}.theme-wrapper tui-tabs [tuiTab]._active{border:1px solid #dee2e6;border-bottom:0;border-radius:.25rem .25rem 0 0;color:#495057}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return BootstrapComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/themes/material/material.component.ts


let MaterialComponent = /*#__PURE__*/(() => {
  class MaterialComponent extends cdk.AbstractTuiThemeSwitcher {}

  MaterialComponent.ɵfac = /*@__PURE__*/function () {
    let ɵMaterialComponent_BaseFactory;
    return function MaterialComponent_Factory(t) {
      return (ɵMaterialComponent_BaseFactory || (ɵMaterialComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(MaterialComponent)))(t || MaterialComponent);
    };
  }();

  MaterialComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: MaterialComponent,
    selectors: [["material"]],
    features: [fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 0,
    vars: 0,
    template: function MaterialComponent_Template(rf, ctx) {},
    styles: [".theme-wrapper{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;--tui-primary-text: #fff;--tui-primary: #6200ee;--tui-primary-hover: var(--tui-primary);--tui-primary-active: #a56bf5;--tui-radius-m: .25rem;--tui-text-03: #6c757d;--tui-text-02: rgba(0, 0, 0, .6)}.theme-wrapper .demo-placeholder{font-family:\"RobotoRegular\",Helvetica,Arial,sans-serif}.theme-wrapper [tui-wrapper][data-appearance=textfield]{font-family:\"RobotoRegular\",Helvetica,Arial,sans-serif;background:#f5f5f5;border-width:0;color:rgba(0,0,0,.87);border-radius:.25rem .25rem 0 0;box-shadow:inset 0 -1px rgba(0,0,0,.42)}.theme-wrapper [tui-wrapper][data-appearance=textfield]:after{transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out;top:100%;height:.125rem;margin-top:-.125rem;border-radius:0;border-width:0;background-color:var(--tui-primary);transform-origin:bottom;transform:scale(0)}@media (hover: hover){.theme-wrapper [tui-wrapper][data-appearance=textfield]:hover:not(._no-hover),.theme-wrapper [tui-wrapper][data-appearance=textfield][data-state=hover]{background:#ececec;box-shadow:inset 0 -1px rgba(0,0,0,.87)}}.theme-wrapper [tui-wrapper][data-appearance=textfield]:focus-visible:focus-visible{background:#dcdcdc}.theme-wrapper [tui-wrapper][data-appearance=textfield]:focus-visible:focus-visible:after{transform:none;color:var(--tui-primary)}.theme-wrapper [tui-wrapper][data-appearance=textfield]:focus-visible:focus-visible label{color:var(--tui-primary)!important}.theme-wrapper [tui-wrapper][data-appearance=textfield]._focused._focused{background:#dcdcdc}.theme-wrapper [tui-wrapper][data-appearance=textfield]._focused._focused:after{transform:none;color:var(--tui-primary)}.theme-wrapper [tui-wrapper][data-appearance=textfield]._focused._focused label{color:var(--tui-primary)!important}.theme-wrapper tui-button{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;text-transform:uppercase;font-weight:bold;box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem rgba(0,0,0,.14),0 .0625rem .3125rem rgba(0,0,0,.12)}.theme-wrapper tui-button._pressed{box-shadow:0 .3125rem .3125rem -.1875rem rgba(0,0,0,.2),0 .5rem .625rem .0625rem rgba(0,0,0,.14),0 .1875rem .875rem .125rem rgba(0,0,0,.12)}.theme-wrapper tui-tabs{color:rgba(0,0,0,.6);box-shadow:none}.theme-wrapper [tuiTab]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:500!important;text-transform:uppercase;padding-left:1.25rem;padding-right:1.25rem;margin-right:0}.theme-wrapper [tuiTab]:hover{background:rgba(98,0,238,.04);color:rgba(0,0,0,.6);box-shadow:none}.theme-wrapper [tuiTab]:active{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:rgba(98,0,238,.12);color:rgba(0,0,0,.6)}.theme-wrapper [tuiTab]._active{color:var(--tui-primary)}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return MaterialComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/themes/themes.module.ts



let ThemesModule = /*#__PURE__*/(() => {
  class ThemesModule {}

  ThemesModule.ɵfac = function ThemesModule_Factory(t) {
    return new (t || ThemesModule)();
  };

  ThemesModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ThemesModule
  });
  ThemesModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({});
  return ThemesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ThemesModule, {
    declarations: [MaterialComponent, BootstrapComponent],
    exports: [MaterialComponent, BootstrapComponent]
  });
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.module.ts
var hint_controller_documentation_module = __webpack_require__(77788);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts
var textfield_controller_documentation_module = __webpack_require__(82387);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.component.ts
var primitive_textfield_component = __webpack_require__(63060);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.directive.ts
var primitive_textfield_directive = __webpack_require__(62733);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon.directive.ts
var textfield_icon_directive = __webpack_require__(88494);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/primitive-textfield/examples/1/index.ts
















function TuiPrimitiveTextfieldExample1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-svg", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPrimitiveTextfieldExample1_ng_template_3_Template_tui_svg_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.togglePasswordVisibility();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r2 = fesm2015_core/* ɵɵreference */.MAs(6);

    fesm2015_core/* ɵɵproperty */.Q6J("tuiHint", _r2)("src", ctx_r1.icon);
  }
}

function TuiPrimitiveTextfieldExample1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r3.hint);
  }
}

const _1_c0 = ["*"];
let TuiPrimitiveTextfieldExample1 = /*#__PURE__*/(() => {
  class TuiPrimitiveTextfieldExample1 extends cdk.AbstractTuiControl {
    constructor(control, changeDetectorRef) {
      super(control, changeDetectorRef);
      this.isPasswordHidden = true;
    }

    get nativeFocusableElement() {
      return this.computedDisabled || !this.textfield ? null : this.textfield.nativeFocusableElement;
    }

    get focused() {
      return !!this.textfield && this.textfield.focused;
    }

    get icon() {
      return this.isPasswordHidden ? `tuiIconHideLarge` : `tuiIconShowLarge`;
    }

    get hint() {
      return this.isPasswordHidden ? `Show password` : `Hide password`;
    }

    get inputType() {
      return this.isPasswordHidden ? `password` : `text`;
    }

    onValueChange(textValue) {
      this.updateValue(textValue);
    }

    onFocused(focused) {
      this.updateFocused(focused);
    }

    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden;
    }

    getFallbackValue() {
      return ``;
    }

  }

  TuiPrimitiveTextfieldExample1.ɵfac = function TuiPrimitiveTextfieldExample1_Factory(t) {
    return new (t || TuiPrimitiveTextfieldExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_forms/* NgControl */.a5, 10), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ChangeDetectorRef */.sBO));
  };

  TuiPrimitiveTextfieldExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPrimitiveTextfieldExample1,
    selectors: [["tui-primitive-textfield-example-1"]],
    viewQuery: function TuiPrimitiveTextfieldExample1_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiPrimitiveTextfieldComponent, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.textfield = _t.first);
      }
    },
    features: [fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    ngContentSelectors: _1_c0,
    decls: 7,
    vars: 7,
    consts: [[3, "tuiTextfieldIcon", "invalid", "focusable", "disabled", "readOnly", "value", "valueChange", "focusedChange"], ["tuiTextfield", "", 3, "type"], ["iconContent", ""], ["hintContent", ""], [1, "icon", 3, "tuiHint", "src", "click"]],
    template: function TuiPrimitiveTextfieldExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵprojectionDef */.F$t();
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-primitive-textfield", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("valueChange", function TuiPrimitiveTextfieldExample1_Template_tui_primitive_textfield_valueChange_0_listener($event) {
          return ctx.onValueChange($event);
        })("focusedChange", function TuiPrimitiveTextfieldExample1_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
          return ctx.onFocused($event);
        });
        fesm2015_core/* ɵɵprojection */.Hsn(1);
        fesm2015_core/* ɵɵelement */._UZ(2, "input", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiPrimitiveTextfieldExample1_ng_template_3_Template, 1, 2, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiPrimitiveTextfieldExample1_ng_template_5_Template, 1, 1, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldIcon", _r0)("invalid", ctx.computedInvalid)("focusable", ctx.focusable)("disabled", ctx.disabled)("readOnly", ctx.readOnly)("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("type", ctx.inputType);
      }
    },
    directives: [primitive_textfield_component/* TuiPrimitiveTextfieldComponent */.y, primitive_textfield_directive/* TuiPrimitiveTextfieldDirective */.B, textfield_icon_directive/* TuiTextfieldIconDirective */.AW, textfield_component/* TuiTextfieldComponent */.M, svg_component/* TuiSvgComponent */.P, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D],
    styles: ["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],
    changeDetection: 0
  });
  return TuiPrimitiveTextfieldExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/primitive-textfield/examples/2/index.ts















function TuiPrimitiveTextfieldExample2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 7);
  }
}

let TuiPrimitiveTextfieldExample2 = /*#__PURE__*/(() => {
  class TuiPrimitiveTextfieldExample2 extends cdk.AbstractTuiControl {
    constructor(control, changeDetectorRef) {
      super(control, changeDetectorRef);
    }

    get nativeFocusableElement() {
      return this.computedDisabled || !this.textfield ? null : this.textfield.nativeFocusableElement;
    }

    get focused() {
      return !!this.textfield && this.textfield.focused;
    }

    onValueChange(textValue) {
      this.updateValue(textValue);
    }

    onFocused(focused) {
      this.updateFocused(focused);
    }

    getFallbackValue() {
      return ``;
    }

  }

  TuiPrimitiveTextfieldExample2.ɵfac = function TuiPrimitiveTextfieldExample2_Factory(t) {
    return new (t || TuiPrimitiveTextfieldExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_forms/* NgControl */.a5, 10), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ChangeDetectorRef */.sBO));
  };

  TuiPrimitiveTextfieldExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPrimitiveTextfieldExample2,
    selectors: [["tui-primitive-textfield-example-2"]],
    viewQuery: function TuiPrimitiveTextfieldExample2_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiPrimitiveTextfieldComponent, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.textfield = _t.first);
      }
    },
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,core.tuiPrimitiveTextfieldOptionsProvider)({
      iconCleaner: `tuiIconChevronUp`
    })]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 11,
    vars: 5,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_270336154752876683$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("Modified cleaner icon");
        i18n_0 = MSG_EXTERNAL_270336154752876683$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟f37c19d3d4ffc35f74d9ae6f62d686cb69b3890c␟270336154752876683:Modified cleaner icon`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7576419264776917124$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_3 = goog.getMsg("Override modified cleaner icon");
        i18n_2 = MSG_EXTERNAL_7576419264776917124$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟cf50d9a6ca344e37ff60255e1c9bd1332e292b01␟7576419264776917124:Override modified cleaner icon`;
      }

      return [["tuiTextfieldSize", "m", 1, "b-form", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["tuiLabel", i18n_0], [3, "value", "valueChange", "focusedChange"], ["tuiTextfield", "", "type", "email"], ["tuiLabel", i18n_2, 1, "tui-space_top-4"], [3, "value", "iconCleaner", "valueChange", "focusedChange"], ["iconCleaner", ""], ["src", "tuiIconDraft"]];
    },
    template: function TuiPrimitiveTextfieldExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-primitive-textfield", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("valueChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_valueChange_2_listener($event) {
          return ctx.onValueChange($event);
        })("focusedChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_focusedChange_2_listener($event) {
          return ctx.onFocused($event);
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(4, "input", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "label", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-primitive-textfield", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("valueChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_valueChange_6_listener($event) {
          return ctx.onValueChange($event);
        })("focusedChange", function TuiPrimitiveTextfieldExample2_Template_tui_primitive_textfield_focusedChange_6_listener($event) {
          return ctx.onFocused($event);
        });
        fesm2015_core/* ɵɵtext */._uU(7, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(8, "input", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiPrimitiveTextfieldExample2_ng_template_9_Template, 1, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(10);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("iconCleaner", _r0);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* NgForm */.F, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, label_component/* TuiLabelComponent */.A, primitive_textfield_component/* TuiPrimitiveTextfieldComponent */.y, primitive_textfield_directive/* TuiPrimitiveTextfieldDirective */.B, textfield_component/* TuiTextfieldComponent */.M, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPrimitiveTextfieldExample2;
})();
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
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/hint-controller-documentation/hint-controller-documentation.component.ts
var hint_controller_documentation_component = __webpack_require__(16406);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.component.ts
var textfield_controller_documentation_component = __webpack_require__(15800);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/primitive-textfield/primitive-textfield.component.ts
































const primitive_textfield_component_c0 = ["interactiveContent"];

function ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(5, " Simplified version of ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "a", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
    fesm2015_core/* ɵɵtext */._uU(8, "InputPassword");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-primitive-textfield-example-1", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template_tui_primitive_textfield_example_1_ngModelChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.password = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(10, " Type a password ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(13, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "code");
    fesm2015_core/* ɵɵtext */._uU(15, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(16, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "code");
    fesm2015_core/* ɵɵtext */._uU(18, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(19, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-primitive-textfield-example-2", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template_tui_primitive_textfield_example_2_ngModelChange_20_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.example2Value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.password);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.example2Value);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 21);
    fesm2015_core/* ɵɵtext */._uU(1);
  }

  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("text", item_r19);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r19, " ");
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-svg", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_5_Template_tui_svg_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r21);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r20.onClick();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 26);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 27);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 28);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 29);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 30);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 29);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 33);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-primitive-textfield", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("valueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_tui_primitive_textfield_valueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.value = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Component label ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_3_Template, 2, 2, "ng-template", null, 10, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", null, 11, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.editable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.filler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_11_Template, 5, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.selectedIcon = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_12_Template, 3, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.prefix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_13_Template, 3, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.postfix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r30 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r30.readOnly = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r31 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r31.invalid = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r32 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r32.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(17, "hint-controller-documentation");
    fesm2015_core/* ɵɵelement */._UZ(18, "textfield-controller-documentation");
    fesm2015_core/* ɵɵelement */._UZ(19, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("focusable", ctx_r1.focusable)("tuiTextfieldCleaner", ctx_r1.cleaner)("tuiTextfieldCustomContent", ctx_r1.customContent)("tuiTextfieldLabelOutside", ctx_r1.labelOutside)("tuiTextfieldSize", ctx_r1.size)("pseudoActive", ctx_r1.pseudoPressed)("pseudoFocus", ctx_r1.pseudoFocused)("pseudoHover", ctx_r1.pseudoHovered)("disabled", ctx_r1.disabled)("editable", ctx_r1.editable)("filler", ctx_r1.filler)("tuiTextfieldIcon", ctx_r1.iconContent)("tuiTextfieldIconLeft", ctx_r1.iconLeft)("readOnly", ctx_r1.readOnly)("prefix", ctx_r1.prefix)("postfix", ctx_r1.postfix)("invalid", ctx_r1.invalid)("tuiHintContent", ctx_r1.hintContent)("tuiHintDirection", ctx_r1.hintDirection)("tuiHintAppearance", ctx_r1.hintAppearance)("value", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.editable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.filler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.selectedIcon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.prefix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.postfix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.invalid);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiPrimitiveTextfieldComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 34);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 35);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 37);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 38);
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

const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
let ExampleTuiPrimitiveTextfieldComponent = /*#__PURE__*/(() => {
  class ExampleTuiPrimitiveTextfieldComponent extends interactive/* AbstractExampleTuiInteractive */.O {
    constructor() {
      super(...arguments);
      this.interactiveIcon = ``;
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 75945).then(__webpack_require__.t.bind(__webpack_require__, 75945, 17)),
        HTML: __webpack_require__.e(/* import() */ 34943).then(__webpack_require__.t.bind(__webpack_require__, 34943, 17)),
        LESS: __webpack_require__.e(/* import() */ 35047).then(__webpack_require__.t.bind(__webpack_require__, 35047, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 74039).then(__webpack_require__.t.bind(__webpack_require__, 74039, 17)),
        HTML: __webpack_require__.e(/* import() */ 80036).then(__webpack_require__.t.bind(__webpack_require__, 80036, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 67875).then(__webpack_require__.t.bind(__webpack_require__, 67875, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 83057).then(__webpack_require__.t.bind(__webpack_require__, 83057, 17));
      this.themes = [`Taiga UI`, `Bootstrap`, `Material`];
      this.theme = this.themes[0];
      this.iconVariants = [``, `tuiIconSearchLarge`, `Interactive content`];
      this.selectedIcon = this.iconVariants[0];
      this.iconLeftVariants = [``, `tuiIconPiechartLarge`, `tuiIconCardsLarge`];
      this.iconLeft = ``;
      this.iconAlignVariants = [`left`, `right`];
      this.iconAlign = this.iconAlignVariants[1];
      this.typeVariants = [`text`, `email`, `password`, `tel`, `url`];
      this.cleaner = false;
      this.editable = true;
      this.filler = ``;
      this.prefix = ``;
      this.postfix = ``;
      this.maxLengthVariants = [10];
      this.maxLength = null;
      this.inputModeVariants = [`text`, `numeric`];
      this.inputMode = this.inputModeVariants[0];
      this.customContentVariants = [CUSTOM_SVG_NAME, `<span>LongTextContent</span>`];
      this.customContentSelected = null;
      this.password = ``;
      this.example2Value = `mail@example.com`;
      this.value = ``;
      this.exampleText = ``;
      this.disabled = false;
      this.readOnly = false;
      this.labelOutside = false;
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[2];
      this.hintContentVariants = [``, `Ivan Ivanov`];
      this.hintDirectionVariants = core.TUI_HINT_DIRECTIONS;
      this.hintAppearanceVariants = [``, `error`, `onDark`];
      this.invalid = false;
      this.hintContent = this.hintContentVariants[0];
      this.hintDirection = this.hintDirectionVariants[0];
      this.hintAppearance = this.hintAppearanceVariants[0];
    }

    get customContent() {
      return this.customContentSelected === CUSTOM_SVG_NAME ? CUSTOM_SVG : this.customContentSelected;
    }

    get iconContent() {
      if (this.selectedIcon === ``) {
        return ``;
      }

      return this.interactiveIcon && this.selectedIcon !== `tuiIconSearchLarge` ? this.interactiveIcon : `tuiIconSearchLarge`;
    }

    get isBootstrap() {
      return this.theme === this.themes[1];
    }

    get isMaterial() {
      return this.theme === this.themes[2];
    }

    get placeholder() {
      return this.isBootstrap ? `Type a value` : `Theming sample`;
    }

    get customizationSize() {
      return this.isBootstrap ? `s` : `l`;
    }

    onClick() {
      console.info(`Interactive icon clicked`);
    }

  }

  ExampleTuiPrimitiveTextfieldComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiPrimitiveTextfieldComponent_BaseFactory;
    return function ExampleTuiPrimitiveTextfieldComponent_Factory(t) {
      return (ɵExampleTuiPrimitiveTextfieldComponent_BaseFactory || (ɵExampleTuiPrimitiveTextfieldComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiPrimitiveTextfieldComponent)))(t || ExampleTuiPrimitiveTextfieldComponent);
    };
  }();

  ExampleTuiPrimitiveTextfieldComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPrimitiveTextfieldComponent,
    selectors: [["example-tui-primitive-textfield"]],
    viewQuery: function ExampleTuiPrimitiveTextfieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(primitive_textfield_component_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.interactiveIcon = _t.first);
      }
    },
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiPrimitiveTextfieldComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5194718672583852151$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__2 = goog.getMsg(" PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. {$startTagStrong}Does not work with Angular forms{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_1 = MSG_EXTERNAL_5194718672583852151$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟0a19998f90076b7d85207fea44209d8d3b9fcb5d␟5194718672583852151: PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Does not work with Angular forms${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__4 = goog.getMsg("sizes");
        i18n_3 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__6 = goog.getMsg("Options");
        i18n_5 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4703780784365037889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___8 = goog.getMsg(" Disabled state ");
        i18n_7 = MSG_EXTERNAL_4703780784365037889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___8;
      } else {
        i18n_7 = $localize`:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8717823635323002701$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___10 = goog.getMsg(" Native input allows inputting ");
        i18n_9 = MSG_EXTERNAL_8717823635323002701$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___10;
      } else {
        i18n_9 = $localize`:␟77c762ac18c6306d12dce74874a5fd96978eee9c␟8717823635323002701: Native input allows inputting `;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4151292360106248726$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___12 = goog.getMsg(" Gray background text as a hint (e.g. HH:MM:SS for time) ");
        i18n_11 = MSG_EXTERNAL_4151292360106248726$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___12;
      } else {
        i18n_11 = $localize`:␟f29074f0478b44322b1dc718b7bb03de7fe2b4d8␟4151292360106248726: Gray background text as a hint (e.g. HH:MM:SS for time) `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4610700863550936654$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___14 = goog.getMsg(" Icon content. If content is a string, it is used as stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}{$startParagraph} Requires you to import {$startTagCode}TuiTextfieldControllerModule{$closeTagCode}{$closeParagraph}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startParagraph": "\uFFFD#3\uFFFD",
          "closeParagraph": "\uFFFD/#3\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_4610700863550936654$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___14;
      } else {
        i18n_13 = $localize`:␟50404f2c99866f73bc25b4a3c5c51e10841a340b␟4610700863550936654: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:SvgService${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:${"\uFFFD#3\uFFFD"}:START_PARAGRAPH: Requires you to import ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiTextfieldControllerModule${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      i18n_13 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_13);
      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4259878861045276785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___16 = goog.getMsg(" Uneditable text before value. For example, currency symbol in {$startLink}{$startTagCode}InputNumber{$closeTagCode}{$closeLink} . ", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_15 = MSG_EXTERNAL_4259878861045276785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟33c14f705b72544c3881517af4881b87d397d8f6␟4259878861045276785: Uneditable text before value. For example, currency symbol in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputNumber${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: . `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1195719053204982784$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___18 = goog.getMsg(" Uneditable text after value. For example, currency symbol in {$startLink}{$startTagCode}InputNumber{$closeTagCode}{$closeLink} . ", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_17 = MSG_EXTERNAL_1195719053204982784$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___18;
      } else {
        i18n_17 = $localize`:␟d24fc719133afa770a5d50c273a967e6b447bda8␟1195719053204982784: Uneditable text after value. For example, currency symbol in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputNumber${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: . `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2592823355336045770$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___20 = goog.getMsg(" Component is read only ");
        i18n_19 = MSG_EXTERNAL_2592823355336045770$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___20;
      } else {
        i18n_19 = $localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6963908824346094281$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___22 = goog.getMsg(" Invalid state ");
        i18n_21 = MSG_EXTERNAL_6963908824346094281$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___22;
      } else {
        i18n_21 = $localize`:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___24 = goog.getMsg(" Value ");
        i18n_23 = MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS___24;
      } else {
        i18n_23 = $localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `;
      }

      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6346211509068135211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__26 = goog.getMsg(" Import {$startTagCode}TuiPrimitiveTextfieldModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_25 = MSG_EXTERNAL_6346211509068135211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__26;
      } else {
        i18n_25 = $localize`:␟d9976023c60bcfadd11e6b545cc66aeee8d631af␟6346211509068135211: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfieldModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_27;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__28 = goog.getMsg("Add to the template:");
        i18n_27 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_TEXTFIELD_PRIMITIVE_TEXTFIELD_COMPONENT_TS__28;
      } else {
        i18n_27 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "PrimitiveTextfield", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_1, ["id", "example-size", "heading", i18n_3, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["tuiLink", "", "routerLink", "/components/input-password"], [1, "b-form", 3, "ngModel", "ngModelChange"], ["id", "options", "heading", i18n_5, 3, "content"], [3, "ngModel", "ngModelChange"], [3, "focusable", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "pseudoActive", "pseudoFocus", "pseudoHover", "disabled", "editable", "filler", "tuiTextfieldIcon", "tuiTextfieldIconLeft", "readOnly", "prefix", "postfix", "invalid", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "value", "valueChange"], ["template", ""], ["interactiveContent", ""], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "filler", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldIcon", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "readOnly", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "invalid", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input-output", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["size", "xs", 1, "avatar", 3, "text"], ["src", "tuiIconCalendarLarge", 1, "icon-button", 3, "click"], i18n_7, i18n_9, i18n_11, i18n_13, ["tuiLink", "", "routerLink", "/services/svg-service"], i18n_15, ["tuiLink", "", "routerLink", "/components/input-number"], i18n_17, i18n_19, i18n_21, i18n_23, [1, "b-demo-steps"], i18n_25, ["filename", "myComponent.module.ts", 3, "code"], i18n_27, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPrimitiveTextfieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPrimitiveTextfieldComponent_ng_template_1_Template, 21, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPrimitiveTextfieldComponent_ng_template_2_Template, 20, 31, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPrimitiveTextfieldComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, TuiPrimitiveTextfieldExample1, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, TuiPrimitiveTextfieldExample2, demo_component/* TuiDocDemoComponent */.F, primitive_textfield_component/* TuiPrimitiveTextfieldComponent */.y, primitive_textfield_directive/* TuiPrimitiveTextfieldDirective */.B, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_icon_directive/* TuiTextfieldIconDirective */.AW, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, hint_options_directive/* TuiHintOptionsDirective */.bZ, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, hint_controller_documentation_component/* HintControllerDocumentationComponent */.F, textfield_controller_documentation_component/* TextfieldControllerDocumentationComponent */.O, inherited_documentation_component/* InheritedDocumentationComponent */.w, avatar_component/* TuiAvatarComponent */.J, svg_component/* TuiSvgComponent */.P, code_component/* TuiDocCodeComponent */.c],
    styles: ["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiPrimitiveTextfieldComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/primitive-textfield/primitive-textfield.module.ts

















let ExampleTuiPrimitiveTextfieldModule = /*#__PURE__*/(() => {
  class ExampleTuiPrimitiveTextfieldModule {}

  ExampleTuiPrimitiveTextfieldModule.ɵfac = function ExampleTuiPrimitiveTextfieldModule_Factory(t) {
    return new (t || ExampleTuiPrimitiveTextfieldModule)();
  };

  ExampleTuiPrimitiveTextfieldModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPrimitiveTextfieldModule
  });
  ExampleTuiPrimitiveTextfieldModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, inherited_documentation_module/* InheritedDocumentationModule */.f, hint_controller_documentation_module/* HintControllerDocumentationModule */.I, textfield_controller_documentation_module/* TextfieldControllerDocumentationModule */.J, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule, kit.TuiAvatarModule, core.TuiLinkModule, core.TuiSvgModule, core.TuiButtonModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiHintModule, kit.TuiRadioListModule, TuiCustomizationModule, core.TuiLabelModule, ThemesModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPrimitiveTextfieldComponent))]]
  });
  return ExampleTuiPrimitiveTextfieldModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPrimitiveTextfieldModule, {
    declarations: [ExampleTuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldExample1, TuiPrimitiveTextfieldExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, inherited_documentation_module/* InheritedDocumentationModule */.f, hint_controller_documentation_module/* HintControllerDocumentationModule */.I, textfield_controller_documentation_module/* TextfieldControllerDocumentationModule */.J, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule, kit.TuiAvatarModule, core.TuiLinkModule, core.TuiSvgModule, core.TuiButtonModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiHintModule, kit.TuiRadioListModule, TuiCustomizationModule, core.TuiLabelModule, ThemesModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPrimitiveTextfieldComponent]
  });
})();

/***/ })

}]);