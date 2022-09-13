(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-service-usage-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/service-usage.md":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/service-usage.md ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n// ...\n\nexport class MyComponent {\n  constructor(\n    @Inject(TuiDialogService)\n    private readonly dialogService: TuiDialogService,\n  ) {}\n\n  // ...\n\n  open() {\n    this.dialogService.open('Hello!').subscribe();\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/service-usage.md":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/service-usage.md ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiAlertService} from '@taiga-ui/core';\n//...\n\nexport class MyComponent {\n  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {\n    //...\n\n    this.alertService.open('Notification').subscribe({\n      complete: () => {\n        console.log('Notification is closed');\n      },\n    });\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/service-usage.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/service-usage.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n// ...\nexport class AppComponent {\n  @ViewChild('tableBarTemplate')\n  tableBarTemplate: TemplateRef<Record<string, unknown>>;\n\n  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n    // ...\n    this.tableBarsService\n      .showTableBar(this.tableBarTemplate, {\n        mode: 'onLight',\n        hasCloseButton: true,\n      })\n      .subscribe();\n    // ...\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-service-usage-md.js.map