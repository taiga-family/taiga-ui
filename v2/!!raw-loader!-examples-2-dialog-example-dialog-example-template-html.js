(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-dialog-example-dialog-example-template-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/dialog-example/dialog-example.template.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/dialog-example/dialog-example.template.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"text\">\n    Your balance:\n    <tui-money [value]=\"data\"></tui-money>\n</p>\n\n<tui-input\n    tuiTextfieldSize=\"m\"\n    tuiAutoFocus\n    [(ngModel)]=\"name\"\n>\n    Type a name\n</tui-input>\n\n<tui-select\n    tuiTextfieldSize=\"m\"\n    class=\"tui-space_top-3 tui-space_bottom-5\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n>\n    Select a sum\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items\"\n    ></tui-data-list-wrapper>\n</tui-select>\n\n<input\n    type=\"range\"\n    tuiSlider\n    class=\"tui-space_bottom-5\"\n    [ngModel]=\"5\"\n    [max]=\"10\"\n/>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    [disabled]=\"!hasValue\"\n    (click)=\"submit()\"\n>\n    Submit\n</button>\n\n<p>\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"m\"\n        (click)=\"showDialog(template)\"\n    >\n        Show one more dialog\n    </button>\n</p>\n\n<ng-template #template>\n    <div class=\"dialog\">\n        <p>This one is a template dialog</p>\n    </div>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-dialog-example-dialog-example-template-html.js.map