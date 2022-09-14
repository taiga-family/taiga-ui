(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-9-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-example-9`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample9 {\n    value = ``;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/9/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/9/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService, TuiSizeL, TuiSizeS} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-multi-select-example-9`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample9 {\n    readonly testValue = new FormControl([]);\n\n    readonly items: readonly string[] = [\n        `Luke Skywalker`,\n        `Leia Organa Solo`,\n        `Darth Vader`,\n        `Han Solo`,\n        `Obi-Wan Kenobi`,\n        `Yoda`,\n    ];\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    showDialog(\n        content: PolymorpheusContent<TuiDialogContext>,\n        textFieldSize: TuiSizeL | TuiSizeS,\n    ): void {\n        this.dialogService.open(content, {data: {textFieldSize}}).subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/9/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/9/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\n\nimport {MyAccount} from './account/my-account.component';\n\n@Component({\n    selector: `tui-select-example-9`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample9 {\n    readonly accounts: MyAccount[] = [\n        {\n            name: `Dollar deposit`,\n            amount: 237000,\n            currency: TuiCurrency.Dollar,\n            paymentSystem: `tuiIconVisa`,\n        },\n        {\n            name: `Pound deposit`,\n            amount: 100,\n            currency: TuiCurrency.Pound,\n            paymentSystem: `tuiIconMastercard`,\n        },\n        {\n            name: `Rouble deposit`,\n            amount: 1234567890,\n            currency: TuiCurrency.Ruble,\n            paymentSystem: `tuiIconMir`,\n        },\n    ];\n\n    account = new FormControl(this.accounts[0]);\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-9-index-ts.js.map