(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-disable-all-animation-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/info/testing/disable-animation/examples/disable-all-animation.md":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/info/testing/disable-animation/examples/disable-all-animation.md ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  // ...\n  providers: [\n    // ...\n    {\n      provide: TUI_ANIMATIONS_DURATION,\n      useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),\n    },\n  ],\n})\nexport class AppModule {}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-disable-all-animation-md.js.map