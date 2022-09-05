(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-3-alert-example-alert-example-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiNotificationContentContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-notifications-service-example`,\n    templateUrl: `./alert-example.template.html`,\n    changeDetection,\n})\nexport class AlertExampleComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiNotificationContentContext<boolean>,\n    ) {}\n\n    ok(): void {\n        this.context.emitAndCloseHook(true);\n    }\n\n    cancel(): void {\n        this.context.emitAndCloseHook(false);\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-3-alert-example-alert-example-component-ts.js.map