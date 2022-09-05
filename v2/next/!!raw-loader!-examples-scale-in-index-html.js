(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-scale-in-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/scale-in/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>TODO:</h3>\n<p>(click on item if it is finished)</p>\n\n<ul class=\"tui-list\">\n    <li\n        *ngFor=\"let task of todoTasks\"\n        class=\"tui-list__item\"\n        (click)=\"task.completed = !task.completed\"\n    >\n        {{ task.title }}\n        <tui-svg\n            *ngIf=\"task.completed\"\n            src=\"tuiIconCheckLarge\"\n            [@tuiScaleIn]=\"getAnimation(speed)\"\n        ></tui-svg>\n    </li>\n</ul>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-scale-in-index-html.js.map