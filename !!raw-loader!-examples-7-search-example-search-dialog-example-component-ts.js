(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-7-search-example-search-dialog-example-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialogContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `search-dialog-example`,\n    templateUrl: `./search-dialog-example.template.html`,\n    styleUrls: [`./search-dialog-example.component.less`],\n    changeDetection,\n})\nexport class SearchDialogExampleComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,\n    ) {}\n\n    close(): void {\n        this.context.completeWith(false);\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-7-search-example-search-dialog-example-component-ts.js.map