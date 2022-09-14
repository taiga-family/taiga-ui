(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-custom-dialog-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/custom-dialog.md":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/custom-dialog.md ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n// ...\n\nexport class MyDialogComponent {\n  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>) {}\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-custom-dialog-md.js.map