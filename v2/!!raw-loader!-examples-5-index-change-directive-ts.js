(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-index-change-directive-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index-change.directive.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index-change.directive.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {VIRTUAL_SCROLL_STRATEGY, VirtualScrollStrategy} from '@angular/cdk/scrolling';\nimport {Directive, Inject, Output} from '@angular/core';\n\n@Directive({\n    selector: `[indexChange]`,\n})\nexport class IndexChangeDirective {\n    @Output()\n    readonly indexChange = this.strategy.scrolledIndexChange;\n\n    constructor(\n        @Inject(VIRTUAL_SCROLL_STRATEGY)\n        private readonly strategy: VirtualScrollStrategy,\n    ) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-index-change-directive-ts.js.map