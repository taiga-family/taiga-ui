(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-inject-service-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/inject-service.md":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/inject-service.md ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\nexport class MyComponent {\n  constructor(@Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService) {}\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/svg/examples/inject-service.md":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/svg/examples/inject-service.md ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiSvgService, tuiIconTrashLarge} from '@taiga-ui/core';\n\nexport class MyComponent {\n  constructor(@Inject(TuiSvgService) tuiSvgService: TuiSvgService) {\n    tuiSvgService.define({tuiIconTrashLarge});\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-inject-service-md.js.map