"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[13012],{

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

/***/ 13012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDropdownModule": () => (/* binding */ ExampleTuiDropdownModule)
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
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
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
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown.directive.ts
var dropdown_directive = __webpack_require__(26072);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-driver.directive.ts
var dropdown_driver_directive = __webpack_require__(9829);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-position.directive.ts
var dropdown_position_directive = __webpack_require__(82886);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-manual.directive.ts
var dropdown_manual_directive = __webpack_require__(7860);
// EXTERNAL MODULE: ./projects/cdk/directives/obscured/obscured.directive.ts
var obscured_directive = __webpack_require__(53279);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown/examples/1/index.ts









function TuiDropdownExample1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵtext */._uU(1, "But there is nothing to choose...");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiDropdownExample1 = /*#__PURE__*/(() => {
  class TuiDropdownExample1 {
    constructor() {
      this.open = false;
    }

    onClick() {
      this.open = !this.open;
    }

    onObscured(obscured) {
      if (obscured) {
        this.open = false;
      }
    }

    onActiveZone(active) {
      this.open = active && this.open;
    }

  }

  TuiDropdownExample1.ɵfac = function TuiDropdownExample1_Factory(t) {
    return new (t || TuiDropdownExample1)();
  };

  TuiDropdownExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownExample1,
    selectors: [["tui-dropdown-example-1"]],
    decls: 5,
    vars: 2,
    consts: [[3, "tuiActiveZoneChange"], ["tuiButton", "", "type", "button", "iconRight", "tuiIconChevronDown", 3, "tuiDropdown", "tuiDropdownManual", "tuiObscured", "click"], ["dropdownContent", ""], [1, "dropdown"]],
    template: function TuiDropdownExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiActiveZoneChange", function TuiDropdownExample1_Template_span_tuiActiveZoneChange_0_listener($event) {
          return ctx.onActiveZone($event);
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiObscured", function TuiDropdownExample1_Template_button_tuiObscured_1_listener($event) {
          return ctx.onObscured($event);
        })("click", function TuiDropdownExample1_Template_button_click_1_listener() {
          return ctx.onClick();
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Choose ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDropdownExample1_ng_template_3_Template, 2, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r0)("tuiDropdownManual", ctx.open);
      }
    },
    directives: [active_zone_directive/* TuiActiveZoneDirective */.e, button_component/* TuiButtonComponent */.v, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_manual_directive/* TuiDropdownManualDirective */.T, obscured_directive/* TuiObscuredDirective */.z],
    styles: [".dropdown[_ngcontent-%COMP%]{font-size:.8125rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:.075em;padding:.25rem .75rem}"],
    changeDetection: 0
  });
  return TuiDropdownExample1;
})();
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown/examples/2/index.ts












function TuiDropdownExample2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 5);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 8);
    fesm2015_core/* ɵɵtext */._uU(4, "Taiga UI developer");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 9);
    fesm2015_core/* ɵɵtext */._uU(6, "Alex Inkin");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 10);
    fesm2015_core/* ɵɵtext */._uU(8, "a.inkin");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true)("avatarUrl", ctx_r1.avatarUrl);
  }
}

let TuiDropdownExample2 = /*#__PURE__*/(() => {
  class TuiDropdownExample2 {
    constructor() {
      this.open = false;
      this.avatarUrl = utils/* assets */.L`/images/avatar.jpg`;
    }

    onMouseEnter() {
      this.open = true;
    }

    onMouseLeave() {
      this.open = false;
    }

  }

  TuiDropdownExample2.ɵfac = function TuiDropdownExample2_Factory(t) {
    return new (t || TuiDropdownExample2)();
  };

  TuiDropdownExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownExample2,
    selectors: [["tui-dropdown-example-2"]],
    decls: 12,
    vars: 5,
    consts: [[1, "toggle"], ["size", "l", 3, "ngModel", "ngModelChange"], ["tuiDropdownDirection", "bottom", "tuiDropdown", "A directive to show content in a dropdown", 3, "textContent", "tuiDropdownManual"], ["tuiLink", "", "tuiDropdownDirection", "top", 3, "tuiDropdown", "tuiDropdownManual"], ["dropdownContent", ""], [1, "dropdown"], ["size", "l", 3, "rounded", "avatarUrl"], [1, "text"], [1, "label"], [1, "name"], [1, "account"]],
    template: function TuiDropdownExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-toggle", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDropdownExample2_Template_tui_toggle_ngModelChange_2_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(3, " Show help ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(4, "\nYou can ask any questions about\n");
        fesm2015_core/* ɵɵelement */._UZ(5, "code", 2);
        fesm2015_core/* ɵɵtext */._uU(6, "\nand\n");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(8, " Alex\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(9, "\nwill gladly answer! ");
        fesm2015_core/* ɵɵtemplate */.YNc(10, TuiDropdownExample2_ng_template_10_Template, 9, 2, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(11);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("textContent", "tuiDropdown")("tuiDropdownManual", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r0)("tuiDropdownManual", ctx.open);
      }
    },
    directives: [toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_manual_directive/* TuiDropdownManualDirective */.T, link_component/* TuiLinkComponent */.V, avatar_component/* TuiAvatarComponent */.J],
    styles: [".dropdown[_ngcontent-%COMP%]{display:flex;width:14rem;padding:.375rem .75rem}.toggle[_ngcontent-%COMP%]{display:flex;grid-gap:.5rem;gap:.5rem;align-items:center}.text[_ngcontent-%COMP%]{padding:0 .75rem}.label[_ngcontent-%COMP%]{font:var(--tui-font-text-m);color:var(--tui-text-03)}.name[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.account[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-02)}"],
    changeDetection: 0
  });
  return TuiDropdownExample2;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/interval.js
var interval = __webpack_require__(20945);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown/examples/3/index.ts

















function TuiDropdownExample3_ng_template_6_p_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiDropdownExample3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDropdownExample3_ng_template_6_Template_tui_input_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.value = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(2, "Changes propagate both ways");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "polymorpheus");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " directive on the template to make changes propagate both ways ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(8, TuiDropdownExample3_ng_template_6_p_8_Template, 2, 0, "p", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.showBigText);
  }
}

let TuiDropdownExample3 = /*#__PURE__*/(() => {
  class TuiDropdownExample3 {
    constructor(destroy$, changeDetectorRef) {
      this.open = false;
      this.value = `some data`;
      this.showBigText = false;
      (0,interval/* interval */.F)(3000).pipe((0,cdk.tuiWatch)(changeDetectorRef), (0,takeUntil/* takeUntil */.R)(destroy$)).subscribe(() => {
        this.showBigText = !this.showBigText;
      });
    }

  }

  TuiDropdownExample3.ɵfac = function TuiDropdownExample3_Factory(t) {
    return new (t || TuiDropdownExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDestroyService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ChangeDetectorRef */.sBO));
  };

  TuiDropdownExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownExample3,
    selectors: [["tui-dropdown-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService])],
    decls: 8,
    vars: 5,
    consts: [[1, "flex"], [3, "ngModel", "ngModelChange"], [1, "flex", 3, "tuiDropdown", "tuiDropdownManual"], [3, "polymorpheus"], ["dropdownContent", "polymorpheus"], [1, "dropdown"], [4, "ngIf"]],
    template: function TuiDropdownExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDropdownExample3_Template_tui_input_ngModelChange_1_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, "Changes propagate both ways");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "label", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-toggle", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDropdownExample3_Template_tui_toggle_ngModelChange_4_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(5, " Open dropdown ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiDropdownExample3_ng_template_6_Template, 9, 2, "ng-template", 3, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r0)("tuiDropdownManual", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("polymorpheus", "");
      }
    },
    directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_manual_directive/* TuiDropdownManualDirective */.T, toggle_component/* TuiToggleComponent */.p, tinkoff_ng_polymorpheus/* PolymorpheusTemplate */.GL, common/* NgIf */.O5],
    styles: [".flex[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:.5rem;gap:.5rem}.dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:1rem}"],
    changeDetection: 0
  });
  return TuiDropdownExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.component.ts
var dropdown_documentation_component = __webpack_require__(89104);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown/dropdown.component.ts


























const _c10 = function () {
  return ["/directives/active-zone"];
};

const _c11 = function () {
  return ["/components/hosted-dropdown"];
};

function ExampleTuiDropdownComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "a", 4);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(5, 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "a", 4);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-dropdown-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-dropdown-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-dropdown-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(5, _c10));
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(6, _c11));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiDropdownComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 14);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 15);
    fesm2015_core/* ɵɵelement */._UZ(2, "p");
    fesm2015_core/* ɵɵelement */._UZ(3, "button", 16);
    fesm2015_core/* ɵɵelement */._UZ(4, "p");
    fesm2015_core/* ɵɵelement */._UZ(5, "sub");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiDropdownComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiDropdownComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiDropdownComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "span", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiActiveZoneChange", function ExampleTuiDropdownComponent_ng_template_2_Template_span_tuiActiveZoneChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.onActiveZone($event);
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiObscured", function ExampleTuiDropdownComponent_ng_template_2_Template_button_tuiObscured_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.onObscured($event);
    })("click", function ExampleTuiDropdownComponent_ng_template_2_Template_button_click_2_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.onClick();
    });
    fesm2015_core/* ɵɵtext */._uU(3, " PRESS! ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "i");
    fesm2015_core/* ɵɵtext */._uU(5, "* There is also a pretty long text to check its width limitations");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiDropdownComponent_ng_template_2_ng_template_6_Template, 6, 0, "ng-template", null, 11, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiDropdownComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.open = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiDropdownComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵelement */._UZ(11, "dropdown-documentation");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(7);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r3)("tuiDropdownMinHeight", ctx_r1.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.dropdownMaxHeight)("tuiDropdownAlign", ctx_r1.dropdownAlign)("tuiDropdownDirection", ctx_r1.dropdownDirection)("tuiDropdownLimitWidth", ctx_r1.dropdownLimitWidth)("tuiDropdownManual", ctx_r1.open);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.open);
  }
}

function ExampleTuiDropdownComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 19);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 20);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 23);
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

let ExampleTuiDropdownComponent = /*#__PURE__*/(() => {
  class ExampleTuiDropdownComponent extends dropdown/* AbstractExampleTuiDropdown */.X {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 21863).then(__webpack_require__.t.bind(__webpack_require__, 21863, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 92606).then(__webpack_require__.t.bind(__webpack_require__, 92606, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 22680).then(__webpack_require__.t.bind(__webpack_require__, 22680, 17)),
        HTML: __webpack_require__.e(/* import() */ 46179).then(__webpack_require__.t.bind(__webpack_require__, 46179, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 72398).then(__webpack_require__.t.bind(__webpack_require__, 72398, 17)),
        HTML: __webpack_require__.e(/* import() */ 67899).then(__webpack_require__.t.bind(__webpack_require__, 67899, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 46029).then(__webpack_require__.t.bind(__webpack_require__, 46029, 17)),
        HTML: __webpack_require__.e(/* import() */ 53097).then(__webpack_require__.t.bind(__webpack_require__, 53097, 17))
      };
      this.open = false;
    }

    onClick() {
      this.open = !this.open;
    }

    onObscured(obscured) {
      if (obscured) {
        this.open = false;
      }
    }

    onActiveZone(active) {
      this.open = active && this.open;
    }

  }

  ExampleTuiDropdownComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiDropdownComponent_BaseFactory;
    return function ExampleTuiDropdownComponent_Factory(t) {
      return (ɵExampleTuiDropdownComponent_BaseFactory || (ɵExampleTuiDropdownComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiDropdownComponent)))(t || ExampleTuiDropdownComponent);
    };
  }();

  ExampleTuiDropdownComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDropdownComponent,
    selectors: [["example-tui-dropdown"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiDropdownComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3950150784859096463$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}tuiDropdown{$closeTagCode} shows a dropdown with custom template. Use {$startLink} ActiveZone {$closeLink} directive to hide dropdown. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_3950150784859096463$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟c17669cf8128e9355bfe52fdb5cc62a1ed173590␟3950150784859096463:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiDropdown${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: shows a dropdown with custom template. Use ${"\uFFFD#3\uFFFD"}:START_LINK: ActiveZone ${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: directive to hide dropdown. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_792659549883643150$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__3 = goog.getMsg(" See also {$startLink} HostedDropdown {$closeLink}", {
          "startLink": "\uFFFD#6\uFFFD",
          "closeLink": "\uFFFD/#6\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_792659549883643150$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟af1c479da4ba0bfe2598873f34a047c91040cb36␟792659549883643150: See also ${"\uFFFD#6\uFFFD"}:START_LINK: HostedDropdown ${"\uFFFD/#6\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7142877349532194759$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__7 = goog.getMsg("Interesting one");
        i18n_6 = MSG_EXTERNAL_7142877349532194759$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟fc14228bf80fdeaf8ab75718c8f338bbf64a0dbe␟7142877349532194759:Interesting one`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5074208700730793721$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__9 = goog.getMsg("Change detection");
        i18n_8 = MSG_EXTERNAL_5074208700730793721$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a070bd37ddb9b45ffc97f6f50824096ae922e0f2␟5074208700730793721:Change detection`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3726023972778634362$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___13 = goog.getMsg(" Here can be any content {$startParagraph}You can even insert other components:{$closeParagraph}{$startTagButton} Do not touch! {$closeTagButton}{$startParagraph}Everything you want... *{$closeParagraph}{$startSubstript}* except cases of human rights violation{$closeSubstript}", {
          "startParagraph": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]",
          "closeParagraph": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]",
          "startTagButton": "\uFFFD#3\uFFFD",
          "closeTagButton": "\uFFFD/#3\uFFFD",
          "startSubstript": "\uFFFD#5\uFFFD",
          "closeSubstript": "\uFFFD/#5\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_3726023972778634362$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟a66147d5f842b346c17bceecd9845748d9cbc001␟3726023972778634362: Here can be any content ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:You can even insert other components:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_BUTTON: Do not touch! ${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_BUTTON:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:Everything you want... *${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#5\uFFFD"}:START_SUBSTRIPT:* except cases of human rights violation${"\uFFFD/#5\uFFFD"}:CLOSE_SUBSTRIPT:`;
      }

      i18n_12 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_12);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_690417550587081498$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___15 = goog.getMsg(" Show dropdown (basic manual implementation, see related pages for other options) ");
        i18n_14 = MSG_EXTERNAL_690417550587081498$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟01184524ae081363ba799dd4144bfcfedc2d088b␟690417550587081498: Show dropdown (basic manual implementation, see related pages for other options) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___17 = goog.getMsg(" Content ");
        i18n_16 = MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1816878685679044442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiDropdownModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_1816878685679044442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Dropdown", "package", "CORE", "type", "directives"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["tuiLink", "", 3, "routerLink"], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], ["id", "full-featured", "heading", i18n_6, 3, "content"], ["id", "change-detection", "heading", i18n_8, 3, "content"], [3, "tuiActiveZoneChange"], ["tuiButton", "", "type", "button", 3, "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownManual", "tuiObscured", "click"], ["dropdownContent", ""], ["documentationPropertyName", "tuiDropdownManual", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdown", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], [1, "dropdown"], i18n_12, ["tuiButton", "", "type", "button"], i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDropdownComponent_ng_template_1_Template, 13, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDropdownComponent_ng_template_2_Template, 12, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDropdownComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiDropdownExample1, TuiDropdownExample2, TuiDropdownExample3, demo_component/* TuiDocDemoComponent */.F, active_zone_directive/* TuiActiveZoneDirective */.e, button_component/* TuiButtonComponent */.v, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_manual_directive/* TuiDropdownManualDirective */.T, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, obscured_directive/* TuiObscuredDirective */.z, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, dropdown_documentation_component/* DropdownDocumentationComponent */.X, code_component/* TuiDocCodeComponent */.c],
    styles: [".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiDropdownComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown/dropdown.module.ts















let ExampleTuiDropdownModule = /*#__PURE__*/(() => {
  class ExampleTuiDropdownModule {}

  ExampleTuiDropdownModule.ɵfac = function ExampleTuiDropdownModule_Factory(t) {
    return new (t || ExampleTuiDropdownModule)();
  };

  ExampleTuiDropdownModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDropdownModule
  });
  ExampleTuiDropdownModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiLinkModule, kit.TuiAvatarModule, core.TuiButtonModule, core.TuiDropdownModule, kit.TuiSelectModule, cdk.TuiObscuredModule, cdk.TuiActiveZoneModule, kit.TuiToggleModule, kit.TuiInputModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDropdownComponent)), dropdown_documentation_module/* DropdownDocumentationModule */.F]]
  });
  return ExampleTuiDropdownModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDropdownModule, {
    declarations: [ExampleTuiDropdownComponent, TuiDropdownExample1, TuiDropdownExample2, TuiDropdownExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiLinkModule, kit.TuiAvatarModule, core.TuiButtonModule, core.TuiDropdownModule, kit.TuiSelectModule, cdk.TuiObscuredModule, cdk.TuiActiveZoneModule, kit.TuiToggleModule, kit.TuiInputModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, dropdown_documentation_module/* DropdownDocumentationModule */.F],
    exports: [ExampleTuiDropdownComponent]
  });
})();

/***/ })

}]);