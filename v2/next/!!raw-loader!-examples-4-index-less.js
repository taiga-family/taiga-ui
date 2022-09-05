(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-index-less"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.less":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n    height: 6.25rem;\n}\n\n.bars {\n    height: 12.5rem;\n    width: 6.25rem;\n    margin-bottom: 3.125rem;\n    box-shadow: 0 1px var(--tui-base-03);\n    transform-origin: bottom left;\n    transform: rotate(90deg) translate(-12.5rem, 0);\n\n    --tui-chart-0: linear-gradient(#ffc500, #c21500);\n    --tui-chart-1: linear-gradient(#26a0da, #314755);\n    --tui-chart-2: linear-gradient(#f64f59, #c471ed, #12c2e9);\n    --tui-chart-3: linear-gradient(#c94b4b, #4b134f);\n    --tui-chart-4: linear-gradient(#114357, #f29492);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".axes {\n    height: 12.5rem;\n    width: 25rem;\n    color: #bc71c9;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.less":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    max-width: 37.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// This goes into global, unencapsulated styles\ntui-wrapper[data-appearance='custom'] {\n    background: #bc71c9;\n    color: #fff;\n\n    &[data-state='hovered'] {\n        background: #a381ff;\n    }\n\n    &[data-state='pressed'] {\n        background: #8f75d1;\n    }\n\n    &[data-state='disabled'] {\n        background: #eaecee;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.less":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    margin: 0 -5rem;\n\n    :host-context(tui-root._mobile) & {\n        margin: 0;\n\n        button {\n            display: none;\n        }\n    }\n}\n\n.header {\n    .transition(background);\n    height: 10rem;\n    flex: 1;\n    background: var(--tui-base-01) center;\n    background-size: cover;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n@color-mobile-gray: #9299a2;\n\n:host {\n    font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;\n}\n\n.portal {\n    .center-left();\n    position: fixed;\n    bottom: 1.25rem;\n    animation: tuiFadeIn var(--tui-duration) var(--tui-duration);\n    animation-fill-mode: backwards;\n}\n\n.header {\n    position: sticky;\n    top: 0;\n    width: calc(100% + 4rem);\n    margin-top: -2rem;\n    margin-left: -2rem;\n    text-align: center;\n    word-wrap: break-word;\n    background: var(--tui-support-20);\n    border-radius: 1rem 1rem 0 0;\n    transform-origin: top left;\n}\n\n.background {\n    position: sticky;\n    top: -1rem;\n    height: 2rem;\n    width: calc(100% + 4rem);\n    margin: -2rem 0 -2rem -2rem;\n    background: var(--tui-support-20);\n    border-radius: 1rem 1rem 0 0;\n}\n\n.wrapper {\n    background: var(--tui-base-02);\n    padding: 3.125rem 0 2rem;\n}\n\n.logo {\n    position: relative;\n    height: 5.5rem;\n    color: var(--tui-base-01);\n}\n\n.date {\n    display: block;\n    font-size: 1.0625rem;\n    line-height: 1.125rem;\n    padding: 0.75rem 0;\n}\n\n.icon[data-size='m'] {\n    position: relative;\n    margin-top: 0.25rem;\n    width: 5rem;\n    height: 5rem;\n    box-shadow: 0 0 0 2px var(--tui-base-02);\n    color: var(--tui-base-02);\n    background: var(--tui-support-20);\n}\n\n.description {\n    font-size: 1.0625rem;\n    line-height: 1.125rem;\n    margin: 0.5rem 0 0;\n    color: @color-mobile-gray;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 1.0625rem;\n    line-height: 1.25rem;\n    margin: 1.5rem 0 0.25rem;\n}\n\n.money {\n    font-size: 2.125rem;\n    line-height: 2.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.less":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor {\n    min-height: 20rem;\n}\n\n.socket {\n    white-space: pre-wrap;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.less":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.less ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.filters-with-all {\n    display: inline-flex;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/4/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/4/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n    text-align: right;\n    width: 320px;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.less":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.less ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.wrapper {\n    max-width: 30rem;\n}\n\n.ticks-labels {\n    .tui-slider-ticks-labels();\n\n    color: var(--tui-text-02);\n    align-items: center;\n    margin-top: 0.25rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.control {\n    width: 50%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.success {\n    color: var(--tui-success-fill);\n}\n\n.error {\n    color: var(--tui-error-fill);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    max-width: 18rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/4/index.less":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/4/index.less ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    max-width: 30rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.label-wrapper {\n    width: 50%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.less":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.less ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n\n    & > * {\n        margin-right: 1rem;\n    }\n}\n\n.progress {\n    &[data-size='l'] {\n        color: var(--tui-support-01);\n    }\n\n    &[data-size='m'] {\n        color: var(--tui-support-03);\n    }\n\n    &[data-size='s'] {\n        color: var(--tui-support-09);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/4/index.less":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/4/index.less ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n    display: flex;\n    justify-content: space-between;\n\n    & > *:first-child {\n        text-align: left;\n    }\n\n    & > *:last-child {\n        text-align: right;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.range {\n    z-index: 1;\n\n    /* (Optionally) expand clickable area as you wish */\n    &:after {\n        content: '';\n        position: absolute;\n        top: -0.5rem;\n        bottom: -1.5rem;\n        width: 100%;\n    }\n}\n\n.ticks-labels {\n    .tui-slider-ticks-labels(m);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/4/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/4/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: block;\n}\n\n.more {\n    color: var(--tui-link);\n\n    &:focus {\n        color: var(--tui-link-hover);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/4/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/4/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n    height: 12rem;\n    top: -8rem;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    background: var(--tui-support-03);\n}\n\n.image {\n    position: absolute;\n    height: 8rem;\n    width: 100%;\n    top: 1rem;\n    left: 0;\n    transform-origin: bottom;\n    pointer-events: none;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.less":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.tags {\n    display: flex;\n    align-items: center;\n}\n\n.tag {\n    .gradient(#2d96ff, #ff5011, 60deg);\n    color: var(--tui-text-01-night);\n    margin: 0.25rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/4/index.less":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/4/index.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.description {\n    margin-bottom: 2rem;\n}\n\n.steps {\n    list-style-type: disc;\n    padding-left: 0.9375rem;\n    margin: 1rem 0;\n\n    &_optional {\n        list-style-type: circle;\n    }\n}\n\n.form {\n    :host-context(tui-root._mobile) & {\n        width: 100%;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.less":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.less ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n    width: 100%;\n}\n\n.filters {\n    display: flex;\n}\n\n.input {\n    flex: 1;\n}\n\n.columns {\n    width: 10.625rem;\n}\n\n.match {\n    background: var(--tui-selection);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.less":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.less ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/4/index.less":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/4/index.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.less":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-index-less.js.map