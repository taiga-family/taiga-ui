(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-core-styles-theme-wrapper-base-less"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../core/styles/theme/wrapper/base.less":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!../core/styles/theme/wrapper/base.less ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import '../../taiga-ui-local';\n\n/* stylelint-disable order/order */\ntui-wrapper,\n[tuiWrapper] {\n    .transition(~'color, background, opacity');\n    position: relative;\n    display: block;\n    height: 100%;\n    width: 100%;\n    appearance: none;\n    border-radius: inherit;\n\n    &:after {\n        .transition(box-shadow);\n        .fullsize(absolute, inset);\n        content: '';\n        border-radius: inherit;\n        border: 1px solid currentColor;\n        pointer-events: none;\n        color: transparent;\n    }\n\n    .wrapper-focus({\n        &:after {\n            border-width: 2px;\n            color: var(--tui-focus);\n        }\n    });\n\n    .wrapper-disabled({\n        pointer-events: none;\n        opacity: var(--tui-disabled-opacity);\n    });\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-core-styles-theme-wrapper-base-less.js.map