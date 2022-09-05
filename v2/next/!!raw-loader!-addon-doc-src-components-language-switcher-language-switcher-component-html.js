(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select [formControl]=\"language\">\n    <ng-content></ng-content>\n    <tui-data-list *tuiDataList>\n        <button\n            *ngFor=\"let name of names\"\n            tuiOption\n            [value]=\"name | titlecase\"\n            (click)=\"switcher.setLanguage(name)\"\n        >\n            <img\n                alt=\"\"\n                class=\"t-flag\"\n                [src]=\"getFlagPath(flags.get(name))\"\n            />\n            {{ name | titlecase }}\n        </button>\n    </tui-data-list>\n</tui-select>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-html.js.map