(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiContextWithImplicit, tuiPure} from '@taiga-ui/cdk';\nimport {TuiNotification, TuiNotificationContentContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-notifications-service-example-with-custom-label`,\n    templateUrl: `./alert-example-with-custom-label.template.html`,\n    changeDetection,\n})\nexport class AlertExampleWithCustomLabelComponent {\n    @tuiPure\n    get label(): PolymorpheusContent<TuiContextWithImplicit<TuiNotification>> {\n        return this.context.label;\n    }\n\n    @tuiPure\n    get status(): TuiNotification {\n        return this.context.$implicit;\n    }\n\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiNotificationContentContext<boolean>,\n    ) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-component-ts.js.map