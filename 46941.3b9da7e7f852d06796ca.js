"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46941],{

/***/ 89104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ DropdownDocumentationComponent)
/* harmony export */ });
/* harmony import */ var _inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66263);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17023);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155);








function DropdownDocumentationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

function DropdownDocumentationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 9);
  }
}

function DropdownDocumentationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 10);
  }
}

function DropdownDocumentationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

function DropdownDocumentationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 12);
  }
}

let DropdownDocumentationComponent = /*#__PURE__*/(() => {
  class DropdownDocumentationComponent {
    constructor(documentedComponent) {
      this.documentedComponent = documentedComponent;
    }

  }

  DropdownDocumentationComponent.ɵfac = function DropdownDocumentationComponent_Factory(t) {
    return new (t || DropdownDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__/* .ABSTRACT_PROPS_ACCESSOR */ .x));
  };

  DropdownDocumentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: DropdownDocumentationComponent,
    selectors: [["dropdown-documentation"]],
    decls: 13,
    vars: 8,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8735754952214867633$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiDropdown {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8735754952214867633$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟a0eee56984adde56072e2112676be6bf21dfb29a␟8735754952214867633: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiDropdown ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6653398799439643090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg(" Align of dropdown (does not work together with {$startTagCode}limitWidth === 'fixed'{$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6653398799439643090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟29ee50e0356e64d0ffccdddf141779d9cd095b01␟6653398799439643090: Align of dropdown (does not work together with ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:limitWidth === 'fixed'${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8159982415408745443$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Set a vertical direction of dropdown ");
        i18n_4 = MSG_EXTERNAL_8159982415408745443$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟e22e15f84dea771ad0d475438facbb62916362a6␟8159982415408745443: Set a vertical direction of dropdown `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6158927642754956379$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Limit width of dropdown ");
        i18n_6 = MSG_EXTERNAL_6158927642754956379$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟6318612e87a79a0fddc36fb9036f4c24ab5b898e␟6158927642754956379: Limit width of dropdown `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4679692758727259251$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__9 = goog.getMsg(" Minimum height to calculate that dropdown fits to setted {$startTagCode}tuiDropdownDirection{$closeTagCode}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_4679692758727259251$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟4055bf3cc12efa85e894fbf1941120ec2cde619c␟4679692758727259251: Minimum height to calculate that dropdown fits to setted ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:tuiDropdownDirection${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5657510849972139844$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__11 = goog.getMsg(" Maximum height of dropdown ");
        i18n_10 = MSG_EXTERNAL_5657510849972139844$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟48d54f1b6fe93aa4dd68b859fd2eeb1c169f8cea␟5657510849972139844: Maximum height of dropdown `;
      }

      return [[1, "tui-text_h6"], i18n_0, ["tuiLink", "", "target", "_blank", "routerLink", "/directives/dropdown"], ["documentationPropertyName", "tuiDropdownAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiVerticalDirection | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownLimitWidth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDropdownWidthT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMinHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMaxHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10];
    },
    template: function DropdownDocumentationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6, "TuiDropdownModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(8, DropdownDocumentationComponent_ng_template_8_Template, 2, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
          return ctx.documentedComponent.dropdownAlign = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(9, DropdownDocumentationComponent_ng_template_9_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
          return ctx.documentedComponent.dropdownDirection = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(10, DropdownDocumentationComponent_ng_template_10_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
          return ctx.documentedComponent.dropdownLimitWidth = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, DropdownDocumentationComponent_ng_template_11_Template, 2, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
          return ctx.documentedComponent.dropdownMinHeight = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, DropdownDocumentationComponent_ng_template_12_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
          return ctx.documentedComponent.dropdownMaxHeight = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.dropdownAlignVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownAlign);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownLimitWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx.documentedComponent.dropdownMinHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx.documentedComponent.dropdownMaxHeight);
      }
    },
    directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiLinkComponent */ .V, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterLinkWithHref */ .yS, _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiDocDocumentationComponent */ .z, _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiDocDocumentationPropertyConnectorDirective */ .B],
    encapsulation: 2,
    changeDetection: 0
  });
  return DropdownDocumentationComponent;
})();

/***/ }),

/***/ 19180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ DropdownDocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29851);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72002);
/* harmony import */ var _dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74788);






let DropdownDocumentationModule = /*#__PURE__*/(() => {
  class DropdownDocumentationModule {}

  DropdownDocumentationModule.ɵfac = function DropdownDocumentationModule_Factory(t) {
    return new (t || DropdownDocumentationModule)();
  };

  DropdownDocumentationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: DropdownDocumentationModule
  });
  DropdownDocumentationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule]]
  });
  return DropdownDocumentationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsetNgModuleScope"] */ .kYT(DropdownDocumentationModule, {
    declarations: [_dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .DropdownDocumentationComponent */ .X],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule],
    exports: [_dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .DropdownDocumentationComponent */ .X]
  });
})();

/***/ }),

/***/ 155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AbstractExampleTuiDropdown)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72002);

class AbstractExampleTuiDropdown {
  constructor() {
    this.dropdownAlignVariants = [`left`, `right`];
    this.dropdownLimitWidthVariants = [`fixed`, `min`, `auto`];
    this.dropdownDirectionVariants = [`bottom`, `top`];
    this.dropdownAlign = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    this.dropdownDirection = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    this.dropdownLimitWidth = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth;
    this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
  }

}

/***/ }),

/***/ 98204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ABSTRACT_PROPS_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);

const ABSTRACT_PROPS_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class`);

/***/ }),

/***/ 46941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDropdownContextModule": () => (/* binding */ ExampleTuiDropdownContextModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.module.ts
var dropdown_documentation_module = __webpack_require__(19180);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown.ts
var dropdown = __webpack_require__(155);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown.directive.ts
var dropdown_directive = __webpack_require__(26072);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-driver.directive.ts
var dropdown_driver_directive = __webpack_require__(9829);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-position.directive.ts
var dropdown_position_directive = __webpack_require__(82886);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-context.directive.ts
var dropdown_context_directive = __webpack_require__(45452);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-context/examples/1/index.ts








function TuiDropdownContextExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 3);
    fesm2015_core/* ɵɵtext */._uU(1, "Nothing special");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDropdownContextExample1_ng_template_4_Template_button_click_2_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      fesm2015_core/* ɵɵnextContext */.oxw();

      const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

      return _r0.toggle(false);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiDropdownContextExample1 = /*#__PURE__*/(() => {
  class TuiDropdownContextExample1 {}

  TuiDropdownContextExample1.ɵfac = function TuiDropdownContextExample1_Factory(t) {
    return new (t || TuiDropdownContextExample1)();
  };

  TuiDropdownContextExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownContextExample1,
    selectors: [["tui-dropdown-context-example-1"]],
    decls: 6,
    vars: 1,
    consts: [["src", "tuiIconSettingsLarge", "tuiDropdownContext", "", 1, "icon", 3, "tuiDropdown"], ["dropdown", "tuiDropdown"], ["content", ""], [1, "text"], ["tuiIconButton", "", "size", "s", "appearance", "icon", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"]],
    template: function TuiDropdownContextExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, " Make right click on this icon -> ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-svg", 0, 1);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDropdownContextExample1_ng_template_4_Template, 3, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r1);
      }
    },
    directives: [svg_component/* TuiSvgComponent */.P, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_context_directive/* TuiDropdownContextDirective */.J, button_component/* TuiButtonComponent */.v],
    styles: [".text[_ngcontent-%COMP%]{display:inline-block;margin:.4rem 1rem}.icon[_ngcontent-%COMP%]{cursor:context-menu}"],
    changeDetection: 0
  });
  return TuiDropdownContextExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/kit/directives/data-list-dropdown-manager/data-list-dropdown-manager.directive.ts
var data_list_dropdown_manager_directive = __webpack_require__(94370);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-position-sided.directive.ts
var dropdown_position_sided_directive = __webpack_require__(37606);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-context/examples/2/index.ts















function TuiDropdownContextExample2_th_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 4);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", column_r2, " ");
  }
}

function TuiDropdownContextExample2_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 9);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", value_r8, " ");
  }
}

function TuiDropdownContextExample2_tr_6_ng_template_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDropdownContextExample2_tr_6_ng_template_3_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const item_r12 = restoredCtx.$implicit;
      const rowInfo_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;

      const _r4 = fesm2015_core/* ɵɵreference */.MAs(1);

      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      ctx_r13.printToConsole(item_r12.title, rowInfo_r3);
      return _r4.toggle(false);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r12.title, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("src", item_r12.iconName);
  }
}

function TuiDropdownContextExample2_tr_6_ng_template_3_ng_template_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 17);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", option_r17, " ");
  }
}

function TuiDropdownContextExample2_tr_6_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDropdownContextExample2_tr_6_ng_template_3_ng_template_4_button_1_Template, 2, 1, "button", 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r11.moreOptions);
  }
}

function TuiDropdownContextExample2_tr_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDropdownContextExample2_tr_6_ng_template_3_button_1_Template, 3, 2, "button", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 12);
    fesm2015_core/* ɵɵtext */._uU(3, " More ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDropdownContextExample2_tr_6_ng_template_3_ng_template_4_Template, 2, 1, "ng-template", null, 13, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
  }

  if (rf & 2) {
    const _r10 = fesm2015_core/* ɵɵreference */.MAs(5);

    const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r7.menuItems);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r10);
  }
}

function TuiDropdownContextExample2_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 5, 6);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiDropdownContextExample2_tr_6_td_2_Template, 2, 1, "td", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDropdownContextExample2_tr_6_ng_template_3_Template, 6, 2, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const rowInfo_r3 = ctx.$implicit;

    const _r6 = fesm2015_core/* ɵɵreference */.MAs(4);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.getObjectValues(rowInfo_r3));
  }
}

let TuiDropdownContextExample2 = /*#__PURE__*/(() => {
  class TuiDropdownContextExample2 {
    constructor(dialogService) {
      this.dialogService = dialogService;
      this.menuItems = [{
        title: `View`,
        iconName: `tuiIconEyeOpen`
      }, {
        title: `Copy`,
        iconName: `tuiIconCopy`
      }, {
        title: `Delete`,
        iconName: `tuiIconTrash`
      }, {
        title: `Move`,
        iconName: `tuiIconFolder`
      }];
      this.tableData = [{
        character: `Ross Geller`,
        actor: `David Schwimmer`
      }, {
        character: `Chandler Bing`,
        actor: `Matthew Perry`
      }, {
        character: `Joey Tribbiani`,
        actor: `Matt LeBlanc`
      }, {
        character: `Phoebe Buffay`,
        actor: `Lisa Kudrow`
      }, {
        character: `Monica Geller`,
        actor: `Courteney Cox`
      }, {
        character: `Rachel Green`,
        actor: `Jennifer Aniston`
      }];
      this.tableColumns = Object.keys(this.tableData[0]);
      this.moreOptions = [`Option 1`, `Option 2`, `Option 3`];

      this.getObjectValues = obj => Object.values(obj);
    }

    printToConsole(action, contextInfo) {
      this.dialogService.open(`[${action}]: ${JSON.stringify(contextInfo)}`).subscribe();
    }

  }

  TuiDropdownContextExample2.ɵfac = function TuiDropdownContextExample2_Factory(t) {
    return new (t || TuiDropdownContextExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService));
  };

  TuiDropdownContextExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownContextExample2,
    selectors: [["tui-dropdown-context-example-2"]],
    decls: 7,
    vars: 2,
    consts: [[1, "tui-table"], [1, "tui-table__tr", "tui-table__tr_hover_disabled"], ["class", "tui-table__th", 4, "ngFor", "ngForOf"], ["tuiDropdownContext", "", "class", "tui-table__tr", 3, "tuiDropdown", 4, "ngFor", "ngForOf"], [1, "tui-table__th"], ["tuiDropdownContext", "", 1, "tui-table__tr", 3, "tuiDropdown"], ["dropdown", "tuiDropdown"], ["class", "tui-table__td", 4, "ngFor", "ngForOf"], ["contextMenu", ""], [1, "tui-table__td"], ["role", "menu", "tuiDataListDropdownManager", "", 1, "context-menu"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", "tuiDropdownSided", "", "tuiDropdownAlign", "right", 3, "tuiDropdown"], ["nestedMenu", ""], ["tuiOption", "", 3, "click"], [1, "icon", 3, "src"], ["tuiOption", "", 4, "ngFor", "ngForOf"], ["tuiOption", ""]],
    template: function TuiDropdownContextExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, "Make right click on any table's row.");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "table", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tbody");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tr", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiDropdownContextExample2_th_5_Template, 2, 1, "th", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiDropdownContextExample2_tr_6_Template, 5, 2, "tr", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.tableColumns);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.tableData);
      }
    },
    directives: [common/* NgForOf */.sg, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_context_directive/* TuiDropdownContextDirective */.J, data_list_component/* TuiDataListComponent */.q, data_list_dropdown_manager_directive/* TuiDataListDropdownManagerDirective */.p, option_component/* TuiOptionComponent */.v, dropdown_position_sided_directive/* TuiDropdownPositionSidedDirective */.C, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, svg_component/* TuiSvgComponent */.P],
    styles: [".context-menu[_ngcontent-%COMP%]{width:8rem}"],
    changeDetection: 0
  });
  return TuiDropdownContextExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.component.ts
var text_area_component = __webpack_require__(40329);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.directive.ts
var text_area_directive = __webpack_require__(78665);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-context/examples/3/index.ts











function TuiDropdownContextExample3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-text-area", 3);
    fesm2015_core/* ɵɵtext */._uU(2, "Have you found a mistake ? Write about it!");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDropdownContextExample3_ng_template_4_Template_button_click_3_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const close_r2 = restoredCtx.close;
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      ctx_r3.report();
      return close_r2();
    });
    fesm2015_core/* ɵɵtext */._uU(4, " SEND IT ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r1.testForm);
  }
}

let TuiDropdownContextExample3 = /*#__PURE__*/(() => {
  class TuiDropdownContextExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        reportText: new fesm2015_forms/* FormControl */.NI(`Misspell HERE!`)
      });
    }

    report() {
      console.info(this.testForm.value);
    }

  }

  TuiDropdownContextExample3.ɵfac = function TuiDropdownContextExample3_Factory(t) {
    return new (t || TuiDropdownContextExample3)();
  };

  TuiDropdownContextExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownContextExample3,
    selectors: [["tui-dropdown-context-example-3"]],
    decls: 6,
    vars: 2,
    consts: [["tuiDropdownContext", "", 3, "tuiDropdown"], ["reportForm", ""], [1, "container", 3, "formGroup"], ["formControlName", "reportText"], ["type", "button", "tuiButton", "", 1, "button", 3, "click"]],
    template: function TuiDropdownContextExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Some text with mistake. Make right click on it.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p", 0);
        fesm2015_core/* ɵɵtext */._uU(3, " Another text\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDropdownContextExample3_ng_template_4_Template, 5, 1, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r0);
      }
    },
    directives: [dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_context_directive/* TuiDropdownContextDirective */.J, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, button_component/* TuiButtonComponent */.v],
    styles: [".container[_ngcontent-%COMP%]{min-width:20rem;margin:1rem;display:flex;flex-direction:column}.button[_ngcontent-%COMP%]{margin:1rem auto 0}"],
    changeDetection: 0
  });
  return TuiDropdownContextExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.component.ts
var dropdown_documentation_component = __webpack_require__(89104);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-context/dropdown-context.component.ts



















function ExampleTuiDropdownContextComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "h3");
    fesm2015_core/* ɵɵtext */._uU(4, "To close dropdown:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "ul", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li", 4);
    fesm2015_core/* ɵɵtext */._uU(7, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "strong");
    fesm2015_core/* ɵɵtext */._uU(9, "Esc");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li", 4);
    fesm2015_core/* ɵɵtext */._uU(11, " Make ");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "strong");
    fesm2015_core/* ɵɵtext */._uU(13, "mouse left/right click");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(14, " outside of dropdown content ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "li", 4);
    fesm2015_core/* ɵɵtext */._uU(16, " Manually toggle ");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "code");
    fesm2015_core/* ɵɵtext */._uU(18, "tuiDropdown");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(19, " to ");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "code");
    fesm2015_core/* ɵɵtext */._uU(21, "false");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(22, " using template reference variable (see first example) ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-dropdown-context-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(26, "tui-dropdown-context-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(28, "tui-dropdown-context-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(23);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.exampleBasic);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.exampleContextMenu);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.exampleReportMistakeForm);
  }
}

function ExampleTuiDropdownContextComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 9, 1);
  }
}

function ExampleTuiDropdownContextComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p", 8);
    fesm2015_core/* ɵɵi18nStart */.tHW(2, 9);
    fesm2015_core/* ɵɵelement */._UZ(3, "strong");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiDropdownContextComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", null, 10, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "dropdown-documentation");
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(5);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r3)("tuiDropdownMinHeight", ctx_r1.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.dropdownMaxHeight)("tuiDropdownAlign", ctx_r1.dropdownAlign)("tuiDropdownDirection", ctx_r1.dropdownDirection)("tuiDropdownLimitWidth", ctx_r1.dropdownLimitWidth);
  }
}

function ExampleTuiDropdownContextComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 12);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 15);
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

let ExampleTuiDropdownContextComponent = /*#__PURE__*/(() => {
  class ExampleTuiDropdownContextComponent extends dropdown/* AbstractExampleTuiDropdown */.X {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 99858).then(__webpack_require__.t.bind(__webpack_require__, 99858, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 27092).then(__webpack_require__.t.bind(__webpack_require__, 27092, 17));
      this.exampleBasic = {
        TypeScript: __webpack_require__.e(/* import() */ 94159).then(__webpack_require__.t.bind(__webpack_require__, 94159, 17)),
        HTML: __webpack_require__.e(/* import() */ 47302).then(__webpack_require__.t.bind(__webpack_require__, 47302, 17)),
        LESS: __webpack_require__.e(/* import() */ 89602).then(__webpack_require__.t.bind(__webpack_require__, 89602, 17))
      };
      this.exampleContextMenu = {
        TypeScript: __webpack_require__.e(/* import() */ 83690).then(__webpack_require__.t.bind(__webpack_require__, 83690, 17)),
        HTML: __webpack_require__.e(/* import() */ 64697).then(__webpack_require__.t.bind(__webpack_require__, 64697, 17)),
        LESS: __webpack_require__.e(/* import() */ 91371).then(__webpack_require__.t.bind(__webpack_require__, 91371, 17))
      };
      this.exampleReportMistakeForm = {
        TypeScript: __webpack_require__.e(/* import() */ 86159).then(__webpack_require__.t.bind(__webpack_require__, 86159, 17)),
        HTML: __webpack_require__.e(/* import() */ 20477).then(__webpack_require__.t.bind(__webpack_require__, 20477, 17)),
        LESS: __webpack_require__.e(/* import() */ 84711).then(__webpack_require__.t.bind(__webpack_require__, 84711, 17))
      };
    }

  }

  ExampleTuiDropdownContextComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiDropdownContextComponent_BaseFactory;
    return function ExampleTuiDropdownContextComponent_Factory(t) {
      return (ɵExampleTuiDropdownContextComponent_BaseFactory || (ɵExampleTuiDropdownContextComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiDropdownContextComponent)))(t || ExampleTuiDropdownContextComponent);
    };
  }();

  ExampleTuiDropdownContextComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDropdownContextComponent,
    selectors: [["example-dropdown-context"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiDropdownContextComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7603078759587781889$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS_1 = goog.getMsg("DropdownContext");
        i18n_0 = MSG_EXTERNAL_7603078759587781889$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟70be90489923017d382219191e356dcde0fdf3c4␟7603078759587781889:DropdownContext`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9191144177401253312$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}DropdownContext{$closeTagCode} allows to show custom right click context dropdown. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_9191144177401253312$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟dd56eddadb13fe774c5ac6d5a85ef1479223a77e␟9191144177401253312:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:DropdownContext${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to show custom right click context dropdown. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_884799098279829624$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__7 = goog.getMsg("Context menu");
        i18n_6 = MSG_EXTERNAL_884799098279829624$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a171e48d14fd02dbd2608b1647d7e8f4b5b71269␟884799098279829624:Context menu`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7772034102662804846$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__9 = goog.getMsg("Report mistake form");
        i18n_8 = MSG_EXTERNAL_7772034102662804846$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟5ed826cd094d1079177f845d8fcdfae6e7bbae54␟7772034102662804846:Report mistake form`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_147465224445345383$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS___11 = goog.getMsg(" Right click on me to {$startTagStrong}see a dropdown{$closeTagStrong}{$startTagNgTemplate}Hello there!{$closeTagNgTemplate}", {
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD",
          "startTagNgTemplate": "\uFFFD*4:1\uFFFD",
          "closeTagNgTemplate": "\uFFFD/*4:1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_147465224445345383$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟aff5265d30c616396ec658076775b84bfbc4fa89␟147465224445345383: Right click on me to ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:see a dropdown${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD*4:1\uFFFD"}:START_TAG_NG_TEMPLATE:Hello there!${"\uFFFD/*4:1\uFFFD"}:CLOSE_TAG_NG_TEMPLATE:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8112125145065093282$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiDropdownModule{$closeTagCode} into a module where you want to use our directive ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_8112125145065093282$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟fa4f9d91f7e3fd5ab5a1cb6a23649ea391fc30e6␟8112125145065093282: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_CONTEXT_DROPDOWN_CONTEXT_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_2, [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["id", "basic", "heading", i18n_4, 3, "content"], ["id", "contextMenu", "heading", i18n_6, 3, "content"], ["id", "reportMistakeForm", "heading", i18n_8, 3, "content"], ["tuiDropdownContext", "", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth"], i18n_10, ["dropdownContent", ""], [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiDropdownContextComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDropdownContextComponent_ng_template_1_Template, 29, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDropdownContextComponent_ng_template_2_Template, 7, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDropdownContextComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiDropdownContextExample1, TuiDropdownContextExample2, TuiDropdownContextExample3, demo_component/* TuiDocDemoComponent */.F, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_context_directive/* TuiDropdownContextDirective */.J, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, dropdown_documentation_component/* DropdownDocumentationComponent */.X, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiDropdownContextComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-context/dropdown-context.module.ts















let ExampleTuiDropdownContextModule = /*#__PURE__*/(() => {
  class ExampleTuiDropdownContextModule {}

  ExampleTuiDropdownContextModule.ɵfac = function ExampleTuiDropdownContextModule_Factory(t) {
    return new (t || ExampleTuiDropdownContextModule)();
  };

  ExampleTuiDropdownContextModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDropdownContextModule
  });
  ExampleTuiDropdownContextModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiDataListModule, core.TuiSvgModule, addon_table.TuiTableModule, kit.TuiDataListDropdownManagerModule, kit.TuiTextAreaModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiDropdownModule, cdk.TuiActiveZoneModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDropdownContextComponent)), fesm2015_forms/* ReactiveFormsModule */.UX, dropdown_documentation_module/* DropdownDocumentationModule */.F]]
  });
  return ExampleTuiDropdownContextModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDropdownContextModule, {
    declarations: [ExampleTuiDropdownContextComponent, TuiDropdownContextExample1, TuiDropdownContextExample2, TuiDropdownContextExample3],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiDataListModule, core.TuiSvgModule, addon_table.TuiTableModule, kit.TuiDataListDropdownManagerModule, kit.TuiTextAreaModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiDropdownModule, cdk.TuiActiveZoneModule, router/* RouterModule */.Bz, fesm2015_forms/* ReactiveFormsModule */.UX, dropdown_documentation_module/* DropdownDocumentationModule */.F]
  });
})();

/***/ })

}]);