"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12763],{

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

/***/ 12763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDropdownSelectionModule": () => (/* binding */ ExampleTuiDropdownSelectionModule)
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
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown.directive.ts
var dropdown_directive = __webpack_require__(26072);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-driver.directive.ts
var dropdown_driver_directive = __webpack_require__(9829);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-position.directive.ts
var dropdown_position_directive = __webpack_require__(82886);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-selection.directive.ts
var dropdown_selection_directive = __webpack_require__(39088);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-selection/examples/1/index.ts





let TuiDropdownSelectionExample1 = /*#__PURE__*/(() => {
  class TuiDropdownSelectionExample1 {}

  TuiDropdownSelectionExample1.ɵfac = function TuiDropdownSelectionExample1_Factory(t) {
    return new (t || TuiDropdownSelectionExample1)();
  };

  TuiDropdownSelectionExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownSelectionExample1,
    selectors: [["tui-dropdown-selection-example-1"]],
    decls: 3,
    vars: 0,
    consts: [["tuiDropdownSelection", "", "tuiDropdownSelectionPosition", "selection", "tuiDropdown", "\u00A0\u00A0Dropdown text\u00A0\u00A0"]],
    template: function TuiDropdownSelectionExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0, "Dropdown will be shown text selection:\n");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p", 0);
        fesm2015_core/* ɵɵtext */._uU(2, " Select a text to see dropdown\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_selection_directive/* TuiDropdownSelectionDirective */.y],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDropdownSelectionExample1;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.component.ts
var text_area_component = __webpack_require__(40329);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.directive.ts
var text_area_directive = __webpack_require__(78665);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-selection/examples/2/index.ts


















function TuiDropdownSelectionExample2_ng_template_4_tui_data_list_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDropdownSelectionExample2_ng_template_4_tui_data_list_0_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(3);

      const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

      return ctx_r6.onClick(item_r5.login, _r0.nativeFocusableElement);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.name, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true)("avatarUrl", item_r5.avatar)("text", item_r5.name);
  }
}

function TuiDropdownSelectionExample2_ng_template_4_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("keydown.escape", function TuiDropdownSelectionExample2_ng_template_4_tui_data_list_0_Template_tui_data_list_keydown_escape_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      fesm2015_core/* ɵɵnextContext */.oxw(2);

      const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

      return _r0.nativeFocusableElement.focus();
    });
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDropdownSelectionExample2_ng_template_4_tui_data_list_0_button_1_Template, 3, 4, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);

    const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r3.filterItems(_r0.nativeFocusableElement));
  }
}

function TuiDropdownSelectionExample2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiDropdownSelectionExample2_ng_template_4_tui_data_list_0_Template, 2, 1, "tui-data-list", 3);
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", _r0.nativeFocusableElement);
  }
}

class TuiDropdownSelectionExample2 {
  constructor() {
    this.options = cdk.EMPTY_QUERY;
    this.value = `Type @ to see a dropdown`;
    this.items = [{
      name: `Alexander Inkin`,
      avatar: utils/* assets */.L`/images/avatar.jpg`,
      login: `a.inkin`
    }, {
      name: `Roman Sedov`,
      avatar: ``,
      login: `r.sedov`
    }];

    this.predicate = range => (0,core.tuiGetWordRange)(range).toString().startsWith(`@`);
  }

  onArrow(event, which) {
    const item = this.options[which];

    if (!item) {
      return;
    }

    event.preventDefault();
    item.nativeElement.focus();
  }

  filterItems(textarea) {
    const search = this.getCurrentSearch(textarea).replace(`@`, ``);
    return this.getFilteredItems(this.items, search);
  }

  onClick(login, textarea) {
    const search = this.getCurrentSearch(textarea);
    const value = this.value.replace(search, login);
    const caret = value.indexOf(login) + login.length;
    this.value = value;
    textarea.focus();
    textarea.value = value;
    textarea.setSelectionRange(caret, caret);
  }

  getFilteredItems(items, search) {
    return items.filter(({
      name,
      login
    }) => login.startsWith(search) || name.startsWith(search));
  }

  getCurrentSearch(textarea) {
    return textarea.value.slice(textarea.value.indexOf(`@`), textarea.selectionStart);
  }

}

TuiDropdownSelectionExample2.ɵfac = function TuiDropdownSelectionExample2_Factory(t) {
  return new (t || TuiDropdownSelectionExample2)();
};

TuiDropdownSelectionExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiDropdownSelectionExample2,
  selectors: [["tui-dropdown-selection-example-2"]],
  viewQuery: function TuiDropdownSelectionExample2_Query(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiDriver, 5);
      fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiOptionComponent, 5, fesm2015_core/* ElementRef */.SBq);
    }

    if (rf & 2) {
      let _t;

      fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.driver = _t.first);
      fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.options = _t);
    }
  },
  decls: 6,
  vars: 6,
  consts: [["tuiDropdownSelectionPosition", "word", 3, "tuiDropdown", "tuiDropdownSelection", "pseudoFocus", "ngModel", "ngModelChange", "keydown.arrowUp", "keydown.arrowDown"], ["textarea", ""], ["dropdown", ""], ["class", "menu", 3, "keydown.escape", 4, "ngIf"], [1, "menu", 3, "keydown.escape"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "click"], ["size", "s", 3, "rounded", "avatarUrl", "text"]],
  template: function TuiDropdownSelectionExample2_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-text-area", 0, 1);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDropdownSelectionExample2_Template_tui_text_area_ngModelChange_0_listener($event) {
        return ctx.value = $event;
      })("keydown.arrowUp", function TuiDropdownSelectionExample2_Template_tui_text_area_keydown_arrowUp_0_listener($event) {
        return ctx.onArrow($event, "last");
      })("keydown.arrowDown", function TuiDropdownSelectionExample2_Template_tui_text_area_keydown_arrowDown_0_listener($event) {
        return ctx.onArrow($event, "first");
      });
      fesm2015_core/* ɵɵpipe */.ALo(2, "async");
      fesm2015_core/* ɵɵtext */._uU(3, " Type a message\n");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDropdownSelectionExample2_ng_template_4_Template, 1, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    }

    if (rf & 2) {
      const _r1 = fesm2015_core/* ɵɵreference */.MAs(5);

      fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdown", _r1)("tuiDropdownSelection", ctx.predicate)("pseudoFocus", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 4, ctx.driver) || null)("ngModel", ctx.value);
    }
  },
  directives: [text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_selection_directive/* TuiDropdownSelectionDirective */.y, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgIf */.O5, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, avatar_component/* TuiAvatarComponent */.J],
  pipes: [common/* AsyncPipe */.Ov],
  styles: [".menu[_ngcontent-%COMP%]{width:12.5rem}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiDropdownSelectionExample2.prototype, "getFilteredItems", null);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.component.ts
var dropdown_documentation_component = __webpack_require__(89104);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-selection/dropdown-selection.component.ts





















function ExampleTuiDropdownSelectionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-dropdown-selection-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-dropdown-selection-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 10);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 11);
    fesm2015_core/* ɵɵelement */._UZ(2, "p");
    fesm2015_core/* ɵɵelement */._UZ(3, "button", 12);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "strong");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiDropdownSelectionComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p", 5);
    fesm2015_core/* ɵɵi18nStart */.tHW(2, 6);
    fesm2015_core/* ɵɵelement */._UZ(3, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_7_Template, 3, 0, "ng-template", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.position = $event;
    });
    fesm2015_core/* ɵɵelement */._UZ(9, "dropdown-documentation");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(5);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownSelectionPosition", ctx_r1.position)("tuiDropdown", _r3)("tuiDropdownMinHeight", ctx_r1.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.dropdownMaxHeight)("tuiDropdownAlign", ctx_r1.dropdownAlign)("tuiDropdownDirection", ctx_r1.dropdownDirection)("tuiDropdownLimitWidth", ctx_r1.dropdownLimitWidth);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.positionVariants)("documentationPropertyValue", ctx_r1.position);
  }
}

function ExampleTuiDropdownSelectionComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiDropdownSelectionComponent = /*#__PURE__*/(() => {
  class ExampleTuiDropdownSelectionComponent extends dropdown/* AbstractExampleTuiDropdown */.X {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 90539).then(__webpack_require__.t.bind(__webpack_require__, 90539, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 20761).then(__webpack_require__.t.bind(__webpack_require__, 20761, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 80788).then(__webpack_require__.t.bind(__webpack_require__, 80788, 17)),
        HTML: __webpack_require__.e(/* import() */ 89821).then(__webpack_require__.t.bind(__webpack_require__, 89821, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 24121).then(__webpack_require__.t.bind(__webpack_require__, 24121, 17)),
        HTML: __webpack_require__.e(/* import() */ 81357).then(__webpack_require__.t.bind(__webpack_require__, 81357, 17)),
        LESS: __webpack_require__.e(/* import() */ 18465).then(__webpack_require__.t.bind(__webpack_require__, 18465, 17))
      };
      this.positionVariants = [`selection`, `word`, `tag`];
      this.position = this.positionVariants[0];
    }

  }

  ExampleTuiDropdownSelectionComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiDropdownSelectionComponent_BaseFactory;
    return function ExampleTuiDropdownSelectionComponent_Factory(t) {
      return (ɵExampleTuiDropdownSelectionComponent_BaseFactory || (ɵExampleTuiDropdownSelectionComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiDropdownSelectionComponent)))(t || ExampleTuiDropdownSelectionComponent);
    };
  }();

  ExampleTuiDropdownSelectionComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDropdownSelectionComponent,
    selectors: [["example-tui-dropdown-selection"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiDropdownSelectionComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8026038358277049383$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}DropdownSelection{$closeTagCode} shows dropdown with custom template on selected text ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8026038358277049383$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟12526c183174cf9e4ab3fa57adbaf6a057ddc8d8␟8026038358277049383:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:DropdownSelection${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: shows dropdown with custom template on selected text `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1238358838717941284$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__3 = goog.getMsg("Sample");
        i18n_2 = MSG_EXTERNAL_1238358838717941284$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟86bd4c895bf70b35a58305b7d107a2f1b67b141c␟1238358838717941284:Sample`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2266199980508326983$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__5 = goog.getMsg(" Select a text to {$startTagStrong}see a dropdown{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2266199980508326983$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟2a35c99c7df15ae5710562ef89d46774fd4550ea␟2266199980508326983: Select a text to ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:see a dropdown${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3745698783499999973$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___7 = goog.getMsg(" Here you can have any content {$startParagraph}You can select a text inside a dropdown and it will not close a dropdown{$closeParagraph}{$startTagButton} Button {$closeTagButton}", {
          "startParagraph": "\uFFFD#2\uFFFD",
          "closeParagraph": "\uFFFD/#2\uFFFD",
          "startTagButton": "\uFFFD#3\uFFFD",
          "closeTagButton": "\uFFFD/#3\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_3745698783499999973$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟57dfffe78ad66f88475054d12e085cc38d437029␟3745698783499999973: Here you can have any content ${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:You can select a text inside a dropdown and it will not close a dropdown${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_BUTTON: Button ${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_BUTTON:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1070006108743271766$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___9 = goog.getMsg("{$startTagStrong}Directive selector{$closeTagStrong} . Optional: you can also set a handler that gets {$startTagCode}Range{$closeTagCode} and returns show/close dropdown ", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1070006108743271766$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟5c15cd8f1ed7cb2bd17b60a6af84c911cd1699cc␟1070006108743271766:${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Directive selector${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG: . Optional: you can also set a handler that gets ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Range${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: and returns show/close dropdown `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1537393581077902015$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___11 = goog.getMsg(" Position of dropdown near text selection ");
        i18n_10 = MSG_EXTERNAL_1537393581077902015$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟7b2fe7a08c93ab872d983500d94a057f31327d32␟1537393581077902015: Position of dropdown near text selection `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1816878685679044442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiDropdownModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_1816878685679044442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "DropdownSelection", "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_0, ["id", "selection", "heading", i18n_2, 3, "content"], ["id", "textarea", "heading", "textarea", 3, "content"], ["tuiDropdownSelection", "", 3, "tuiDropdownSelectionPosition", "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth"], i18n_4, ["dropdownContent", ""], ["documentationPropertyName", "tuiDropdownSelection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<Range>"], ["documentationPropertyName", "tuiDropdownSelectionPosition", "documentationPropertyMode", "input", "documentationPropertyType", "'selection' | 'word' | 'tag'", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "dropdown"], i18n_6, ["tuiButton", "", "type", "button"], i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiDropdownSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDropdownSelectionComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDropdownSelectionComponent_ng_template_2_Template, 10, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDropdownSelectionComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiDropdownSelectionExample1, TuiDropdownSelectionExample2, demo_component/* TuiDocDemoComponent */.F, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_selection_directive/* TuiDropdownSelectionDirective */.y, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, dropdown_documentation_component/* DropdownDocumentationComponent */.X, button_component/* TuiButtonComponent */.v, code_component/* TuiDocCodeComponent */.c],
    styles: [".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiDropdownSelectionComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-selection/dropdown-selection.module.ts













let ExampleTuiDropdownSelectionModule = /*#__PURE__*/(() => {
  class ExampleTuiDropdownSelectionModule {}

  ExampleTuiDropdownSelectionModule.ɵfac = function ExampleTuiDropdownSelectionModule_Factory(t) {
    return new (t || ExampleTuiDropdownSelectionModule)();
  };

  ExampleTuiDropdownSelectionModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDropdownSelectionModule
  });
  ExampleTuiDropdownSelectionModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiDropdownModule, core.TuiButtonModule, kit.TuiTextAreaModule, kit.TuiAvatarModule, core.TuiDataListModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDropdownSelectionComponent)), dropdown_documentation_module/* DropdownDocumentationModule */.F]]
  });
  return ExampleTuiDropdownSelectionModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDropdownSelectionModule, {
    declarations: [ExampleTuiDropdownSelectionComponent, TuiDropdownSelectionExample1, TuiDropdownSelectionExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiDropdownModule, core.TuiButtonModule, kit.TuiTextAreaModule, kit.TuiAvatarModule, core.TuiDataListModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, dropdown_documentation_module/* DropdownDocumentationModule */.F],
    exports: [ExampleTuiDropdownSelectionComponent]
  });
})();

/***/ })

}]);