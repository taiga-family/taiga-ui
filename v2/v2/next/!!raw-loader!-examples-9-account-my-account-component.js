(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-9-account-my-account-component"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/9/account/my-account.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/9/account/my-account.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Input} from '@angular/core';\nimport {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nexport interface MyAccount {\n    name: string;\n    amount: number;\n    currency: TuiCurrencyVariants;\n    paymentSystem: PolymorpheusContent;\n}\n\n@Component({\n    selector: `my-account`,\n    templateUrl: `./my-account.component.html`,\n    styleUrls: [`./my-account.component.less`],\n})\nexport class ExampleMyAccountComponent {\n    @Input()\n    account!: MyAccount;\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-9-account-my-account-component.js.map