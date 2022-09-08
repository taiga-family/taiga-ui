"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[80831],{

/***/ 80831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "JestModule": () => (/* binding */ JestModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/testing/jest/jest.component.ts



let JestComponent = /*#__PURE__*/(() => {
  class JestComponent {
    constructor() {
      this.jestConfigJs = __webpack_require__.e(/* import() */ 32033).then(__webpack_require__.t.bind(__webpack_require__, 32033, 17));
      this.packageJson = __webpack_require__.e(/* import() */ 91173).then(__webpack_require__.t.bind(__webpack_require__, 91173, 17));
      this.setupJestJs = __webpack_require__.e(/* import() */ 83380).then(__webpack_require__.t.bind(__webpack_require__, 83380, 17));
    }

  }

  JestComponent.ɵfac = function JestComponent_Factory(t) {
    return new (t || JestComponent)();
  };

  JestComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: JestComponent,
    selectors: [["jest"]],
    decls: 67,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6404088366042352039$$PROJECTS_DEMO_SRC_MODULES_INFO_TESTING_JEST_JEST_COMPONENT_TS_1 = goog.getMsg("Jest");
        i18n_0 = MSG_EXTERNAL_6404088366042352039$$PROJECTS_DEMO_SRC_MODULES_INFO_TESTING_JEST_JEST_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟1c96647f8f7cd3dc5f81a447e9fd714d3fd48ee3␟6404088366042352039:Jest`;
      }

      return [["header", i18n_0], [1, "tui-list"], [1, "tui-list__item"], ["filename", "jest.config.js", 3, "code"], ["filename", "package.json", 3, "code"], ["filename", "setup-jest.js", 3, "code"]];
    },
    template: function JestComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2, " If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4, " Taiga UI uses ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
        fesm2015_core/* ɵɵtext */._uU(6, "@ng-web-apis/common");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(7, " to avoid accessing global variables like ");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "code");
        fesm2015_core/* ɵɵtext */._uU(9, "window");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(10, " or ");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "code");
        fesm2015_core/* ɵɵtext */._uU(12, "navigator");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(13, " directly. Which requires Server Side Rendering (SSR) with the help of its sister library ");
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "code");
        fesm2015_core/* ɵɵtext */._uU(15, "@ng-web-apis/universal");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(16, " for Jest to run properly. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
        fesm2015_core/* ɵɵtext */._uU(18, " Otherwise, you're gonna face errors like ");
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "code");
        fesm2015_core/* ɵɵtext */._uU(20, "ReferenceError: IntersectionObserver is not defined");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "h2");
        fesm2015_core/* ɵɵtext */._uU(22, " Using ");
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "code");
        fesm2015_core/* ɵɵtext */._uU(24, "@angular-builders/jest");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(25, " or ");
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "code");
        fesm2015_core/* ɵɵtext */._uU(27, "jest-preset-angular");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "p");
        fesm2015_core/* ɵɵtext */._uU(29, "If you're using one of these libraries. You can follow the following steps :");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "ol", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "li", 2);
        fesm2015_core/* ɵɵtext */._uU(32, " Install ");
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "code");
        fesm2015_core/* ɵɵtext */._uU(34, "npm i @ng-web-apis/universal --save-dev");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(35, " (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "li", 2);
        fesm2015_core/* ɵɵtext */._uU(37, " Add a ");
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "code");
        fesm2015_core/* ɵɵtext */._uU(39, "setupFilesAfterEnv");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(40, " property to your ");
        fesm2015_core/* ɵɵelementStart */.TgZ(41, "code");
        fesm2015_core/* ɵɵtext */._uU(42, "jest.config.js");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(43, " or ");
        fesm2015_core/* ɵɵelementStart */.TgZ(44, "code");
        fesm2015_core/* ɵɵtext */._uU(45, "package.json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(46, " jest configuration (depending on where your configuration is) with the path to ");
        fesm2015_core/* ɵɵelementStart */.TgZ(47, "code");
        fesm2015_core/* ɵɵtext */._uU(48, "setup-jest.js");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(49, " if you have not already. ");
        fesm2015_core/* ɵɵelement */._UZ(50, "tui-doc-code", 3);
        fesm2015_core/* ɵɵtext */._uU(51, " or ");
        fesm2015_core/* ɵɵelement */._UZ(52, "tui-doc-code", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(53, "li", 2);
        fesm2015_core/* ɵɵtext */._uU(54, " Create the file ");
        fesm2015_core/* ɵɵelementStart */.TgZ(55, "code");
        fesm2015_core/* ɵɵtext */._uU(56, "setup-jest.js");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(57, " (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(58, "li", 2);
        fesm2015_core/* ɵɵtext */._uU(59, " Add the following line to the ");
        fesm2015_core/* ɵɵelementStart */.TgZ(60, "code");
        fesm2015_core/* ɵɵtext */._uU(61, "setup-jest.js");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(62, " : ");
        fesm2015_core/* ɵɵelementStart */.TgZ(63, "code");
        fesm2015_core/* ɵɵtext */._uU(64, "import '@ng-web-apis/universal/mocks';");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(65, " . ");
        fesm2015_core/* ɵɵelement */._UZ(66, "tui-doc-code", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(50);
        fesm2015_core/* ɵɵproperty */.Q6J("code", ctx.jestConfigJs);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("code", ctx.packageJson);
        fesm2015_core/* ɵɵadvance */.xp6(14);
        fesm2015_core/* ɵɵproperty */.Q6J("code", ctx.setupJestJs);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return JestComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/testing/jest/jest.module.ts







let JestModule = /*#__PURE__*/(() => {
  class JestModule {}

  JestModule.ɵfac = function JestModule_Factory(t) {
    return new (t || JestModule)();
  };

  JestModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: JestModule
  });
  JestModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core/* TuiLinkModule */.jzK, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(JestComponent))]]
  });
  return JestModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(JestModule, {
    declarations: [JestComponent],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core/* TuiLinkModule */.jzK, router/* RouterModule */.Bz]
  });
})();

/***/ })

}]);