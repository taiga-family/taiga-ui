(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-lazy-module-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/lazy-module.md":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/import/lazy-module.md ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\nimport {MyDialogComponent} from './my-dialog.component.ts';\n\n// ...\n\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private readonly injector: Injector,\n    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n  ) {}\n\n  // ...\n  open() {\n    this.dialogService.open(new PolymorpheusComponent(MyDialogComponent, this.injector)).subscribe();\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/lazy-module.md":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/lazy-module.md ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\n\nimport {CustomNotificationComponent} from './custom-notification.component';\n\n//...\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private injector: Injector,\n    @Inject(TuiAlertService) private readonly alertService: TuiAlertService,\n  ) {\n    //...\n    this.alertService\n      .open(new PolymorpheusComponent(CustomNotificationComponent, this.injector), {label: 'Heading'})\n      .subscribe();\n  }\n  //...\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/lazy-module.md":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/import/lazy-module.md ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {Injector} from '@angular/core';\nimport {CustomTableBarsComponent} from 'customTableBars.component';\n// ...\n\nexport class LazyModule {\n  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n    // ...\n    this.tableBarsService.showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector)).subscribe();\n    // ...\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-lazy-module-md.js.map