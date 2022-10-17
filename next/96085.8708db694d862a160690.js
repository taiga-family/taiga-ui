"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[96085],{

/***/ 96085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "StackblitzStarterModule": () => (/* binding */ StackblitzStarterModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/demo/src/modules/app/stackblitz/stackblitz.service.ts + 2 modules
var stackblitz_service = __webpack_require__(39383);
// EXTERNAL MODULE: ./projects/demo/src/modules/app/stackblitz/utils.ts
var utils = __webpack_require__(18296);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/app/stackblitz/starter/stackblitz-starter.component.ts







let StackblitzStarterComponent = /*#__PURE__*/(() => {
  class StackblitzStarterComponent {
    constructor(stackblitz) {
      this.stackblitz = stackblitz;
      void this.openStackblitz();
    }

    openStackblitz() {
      return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
        const [appTemplate, appComponent, indexHtml, stylesLess] = yield Promise.all([__webpack_require__.e(/* import() */ 61421).then(__webpack_require__.t.bind(__webpack_require__, 61421, 17)), __webpack_require__.e(/* import() */ 71981).then(__webpack_require__.t.bind(__webpack_require__, 71981, 17)), __webpack_require__.e(/* import() */ 45592).then(__webpack_require__.t.bind(__webpack_require__, 45592, 17)), __webpack_require__.e(/* import() */ 18006).then(__webpack_require__.t.bind(__webpack_require__, 18006, 17))].map(public_api/* tuiRawLoad */.JQ)).then(markdowns => markdowns.map(md => (0,public_api/* tuiTryParseMarkdownCodeBlock */.vi)(md)[0]));
        return this.stackblitz.openStarter({
          title: `Taiga UI Starter`,
          description: `A starter with Taiga UI library\nDocumentation: https://taiga-ui.dev`,
          files: {
            'src/index.html': indexHtml,
            'src/styles.less': stylesLess,
            [utils/* appPrefix */.n_`app.component.html`]: appTemplate,
            [utils/* appPrefix */.n_`app.component.ts`]: appComponent,
            [utils/* appPrefix */.n_`app.component.less`]: `@import '@taiga-ui/core/styles/taiga-ui-local.less';`
          }
        }, {
          newWindow: false,
          openFile: utils/* appPrefix */.n_`app.component.html`,
          hideExplorer: true
        });
      });
    }

  }

  StackblitzStarterComponent.ɵfac = function StackblitzStarterComponent_Factory(t) {
    return new (t || StackblitzStarterComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(stackblitz_service/* TuiStackblitzService */.i));
  };

  StackblitzStarterComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: StackblitzStarterComponent,
    selectors: [["demo-stackblitz-starter"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([stackblitz_service/* TuiStackblitzService */.i])],
    decls: 1,
    vars: 1,
    consts: [["size", "xxl", "textContent", "Stackblitz loading...", 1, "loader", 3, "overlay"]],
    template: function StackblitzStarterComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-loader", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("overlay", true);
      }
    },
    directives: [loader_component/* TuiLoaderComponent */.k],
    styles: [".loader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--tui-base-01);z-index:1}"],
    changeDetection: 0
  });
  return StackblitzStarterComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/app/stackblitz/starter/stackblitz-starter.module.ts





let StackblitzStarterModule = /*#__PURE__*/(() => {
  class StackblitzStarterModule {}

  StackblitzStarterModule.ɵfac = function StackblitzStarterModule_Factory(t) {
    return new (t || StackblitzStarterModule)();
  };

  StackblitzStarterModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: StackblitzStarterModule
  });
  StackblitzStarterModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiLoaderModule, router/* RouterModule.forChild */.Bz.forChild([{
      path: ``,
      component: StackblitzStarterComponent
    }])]]
  });
  return StackblitzStarterModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(StackblitzStarterModule, {
    declarations: [StackblitzStarterComponent],
    imports: [core.TuiLoaderModule, router/* RouterModule */.Bz],
    exports: [StackblitzStarterComponent]
  });
})();

/***/ })

}]);