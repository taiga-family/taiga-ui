(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-project-files-src-main-ts-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/app/stackblitz/project-files/src/main.ts.md":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/app/stackblitz/project-files/src/main.ts.md ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport './polyfills';\n\nimport {platformBrowserDynamic} from '@angular/platform-browser-dynamic';\n\nimport {AppModule} from './app/app.module';\n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .then(ref => {\n    // Stackblitz: Ensure Angular destroys itself on hot reloads.\n    if (window['ngRef']) {\n      window['ngRef'].destroy();\n    }\n\n    window['ngRef'] = ref;\n\n    // Otherwise, log the boot error\n  })\n  .catch(err => console.error(err));\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-project-files-src-main-ts-md.js.map