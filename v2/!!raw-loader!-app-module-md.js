(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-app-module-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/i18n/app.module.md":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/i18n/app.module.md ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiLanguageName} from '@taiga-ui/i18n/interfaces';\nimport {tuiLanguageSwitcher} from '@taiga-ui/i18n/switch';\n\n@NgModule({\n  imports: [\n    // ...\n  ],\n  providers: [\n    // ...\n    tuiLanguageSwitcher(\n      /**\n       * @note:\n       * then the i18n language files will be loaded from node_modules\n       */\n      async (language: TuiLanguageName): Promise<unknown> =>\n        import(\n          /* webpackMode: \"lazy\" */\n          /* webpackChunkName: \"i18n-lazy-\" */\n          /* webpackExports: [\"named\"] */\n          `@taiga-ui/i18n/languages/${language}`\n          // also you can override the paths to your i18n language files\n        ),\n    ),\n  ],\n})\nexport class AppModule {}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-app-module-md.js.map