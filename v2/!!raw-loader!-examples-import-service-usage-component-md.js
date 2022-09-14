(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-service-usage-component-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/service-usage-component.md":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/service-usage-component.md ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {CustomNotificationComponent} from './custom-notification.component';\n//...\n\nexport class MyComponent {\n  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {\n    //...\n\n    this.alertService.open(new PolymorpheusComponent(CustomNotificationComponent)).subscribe({\n      complete: () => {\n        console.log('Notification is closed');\n      },\n    });\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-service-usage-component-md.js.map