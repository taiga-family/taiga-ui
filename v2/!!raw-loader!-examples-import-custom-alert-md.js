(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-custom-alert-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/custom-alert.md":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/custom-alert.md ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {TuiNotificationContentContext} from '@taiga-ui/core';\n\n//...\n\nexport class NotificationExampleComponent {\n  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiNotificationContentContext<boolean>) {}\n\n  ok() {\n    this.context.emitAndCloseHook(true);\n  }\n\n  cancel() {\n    this.context.emitAndCloseHook(false);\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-custom-alert-md.js.map