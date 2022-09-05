(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-index-less"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/arc-chart/examples/2/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/arc-chart/examples/2/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.wrapper {\n    position: relative;\n\n    --tui-chart-0: var(--tui-support-03);\n}\n\n.stacked {\n    .fullsize();\n\n    --tui-secondary: transparent;\n    --tui-chart-0: var(--tui-support-04);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.less":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.less ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host,\n.hint {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n}\n\n.axes {\n    height: 18.75rem;\n    width: 37.5rem;\n}\n\n.chart {\n    height: 100%;\n}\n\n.wrapper {\n    position: relative;\n    display: flex;\n    flex: 1;\n    align-items: flex-end;\n    justify-content: center;\n    height: 100%;\n    margin-bottom: -0.0625rem;\n    cursor: pointer;\n\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.05);\n    }\n}\n\n.hint {\n    display: flex;\n    align-items: center;\n}\n\n.dot {\n    border-radius: 100%;\n    width: 0.75rem;\n    height: 0.75rem;\n    margin-right: 0.5rem;\n}\n\n.name {\n    margin-right: 0.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".axes {\n    height: 18.75rem;\n    width: 37.5rem;\n\n    &:first-child {\n        --tui-chart-0: gold;\n        --tui-chart-1: purple;\n    }\n\n    &:last-child {\n        --tui-chart-0: skyblue;\n        --tui-chart-1: violet;\n    }\n}\n\n.flex {\n    display: flex;\n    min-width: 31.25rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.less":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bars {\n    height: 6.25rem;\n    width: 10rem;\n    box-shadow: 0 1px var(--tui-base-03);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.less":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bar {\n    height: 6.25rem;\n\n    --tui-chart-0: gold;\n    --tui-chart-1: skyblue;\n    --tui-chart-2: pink;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/legend-item/examples/2/index.less":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/legend-item/examples/2/index.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n:host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n\n.chart {\n    pointer-events: none;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    margin-top: 1rem;\n\n    @media @mobile {\n        flex-direction: column;\n    }\n}\n\n.disable {\n    .transition(~'transform, color');\n    margin-left: 0.25rem;\n    will-change: transform;\n    color: var(--tui-text-02);\n    pointer-events: auto;\n\n    &:hover {\n        color: var(--tui-text-01);\n    }\n\n    &_rotated {\n        transform: rotate(45deg);\n    }\n}\n\n.legend {\n    margin: 0 0 0 2rem;\n    justify-content: center;\n\n    @media @mobile {\n        margin: 2rem 0 0;\n    }\n}\n\n.item {\n    margin: 0 0.5rem 0.75rem 0;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".axes {\n    height: 12.5rem;\n    width: 25rem;\n    color: #bc71c9;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.less":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.less ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.color() {\n    color: var(--tui-support-01);\n\n    &:first-child {\n        color: var(--tui-support-08);\n    }\n\n    &:last-child {\n        color: var(--tui-support-12);\n    }\n}\n\n.axes {\n    height: 12.5rem;\n}\n\n.controls {\n    display: flex;\n\n    .b-form {\n        flex: 1;\n    }\n}\n\n.legend {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item {\n    .color();\n    display: flex;\n    align-items: center;\n    margin: 0 0.75rem;\n\n    &:before {\n        content: '';\n        border-bottom: 0.125rem solid;\n        width: 1rem;\n        margin-right: 0.5rem;\n    }\n}\n\n.name {\n    color: var(--tui-text-01);\n}\n\n.value {\n    color: var(--tui-text-01-night);\n}\n\n.chart {\n    .color();\n    .fullsize();\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/pie-chart/examples/2/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/pie-chart/examples/2/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/ring-chart/examples/2/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/ring-chart/examples/2/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.less":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.container {\n    max-width: 46.875rem;\n}\n\n.operation-header {\n    font: var(--tui-font-text-l);\n    display: flex;\n    align-items: center;\n}\n\n.operation-date {\n    font: var(--tui-font-text-xl);\n    text-align: center;\n}\n\n.operation-date,\n.operation-info {\n    color: var(--tui-text-02);\n}\n\n.operation-month,\n.operation-status {\n    font: var(--tui-font-text-s);\n}\n\n.operation-pic {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin: 0 1.5rem;\n    background: var(--tui-secondary-active);\n    border-radius: 100%;\n    width: 3rem;\n    height: 3rem;\n    color: var(--tui-text-03);\n}\n\n.operation-title {\n    .text-overflow();\n    margin-right: 1.5rem;\n    flex-grow: 1;\n}\n\n.operation-info {\n    text-align: right;\n}\n\n.operation-status {\n    &_success {\n        color: var(--tui-success-fill);\n    }\n\n    &_error {\n        color: var(--tui-error-fill);\n    }\n}\n\n.form-title {\n    font: var(--tui-font-heading-6);\n    margin: 0 0 1.25rem;\n}\n\n.input {\n    max-width: 28.75rem;\n    margin-bottom: 1.25rem;\n}\n\n.buttons {\n    display: flex;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/2/index.less":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/2/index.less ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".template {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n    padding: 0 0.375rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.less":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.less ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n    color: var(--tui-base-09);\n    background-color: var(--tui-primary);\n    margin: 1rem 0;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/color-picker/examples/2/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/color-picker/examples/2/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invert {\n    color: inherit;\n    filter: invert(1);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.less":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.avatar {\n    margin: 0 @space * 2 0 0;\n    flex-shrink: 0;\n}\n\n.name {\n    .text-overflow();\n    flex-shrink: 1;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.less":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor {\n    min-height: 30rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.less":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.less ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new {\n    width: 2rem;\n    height: 1.5rem;\n    border-radius: 4px;\n    background: var(--tui-secondary);\n    color: var(--tui-link);\n}\n\n.card {\n    background: var(--tui-support-01);\n\n    button:nth-child(4) & {\n        background: var(--tui-support-05);\n    }\n}\n\n.label {\n    margin: 0 auto 0 0.75rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone-international/examples/2/index.less":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone-international/examples/2/index.less ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n    max-width: 24.375rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.wrapper {\n    width: 70%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.slider-ticks-labels {\n    .tui-slider-ticks-labels();\n\n    color: var(--tui-text-02);\n    margin-top: 0.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/2/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/2/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    max-width: 62.5rem;\n}\n\n.some-figure {\n    border-radius: 100%;\n    width: 3rem;\n    height: 3rem;\n    background-color: var(--tui-secondary-active);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/2/index.less":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/2/index.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".island {\n    max-width: 20rem;\n}\n\n.clamp {\n    pointer-events: none;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/2/index.less":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/2/index.less ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.white {\n    display: inline-block;\n    padding: 0.625rem;\n    background-color: var(--tui-base-02);\n}\n\n.custom {\n    color: var(--tui-base-01);\n    background: linear-gradient(45deg, #c86dd7 0%, #3023ae 100%);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.control {\n    width: 31.25rem;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.template {\n    display: flex;\n    align-items: center;\n}\n\n.avatar {\n    margin: 0 @space * 2 0 -@space;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.less":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n    width: 80%;\n    height: 80%;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.less":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.less ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.progress {\n    width: 70%;\n    margin-bottom: 1rem;\n    color: var(--tui-support-09);\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.description {\n    font: var(--tui-font-heading-6);\n    margin-bottom: 1rem;\n\n    &:first-child {\n        margin-top: 0;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.less":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.less ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n\n    & > * {\n        margin-right: 1rem;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/2/index.less":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/2/index.less ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.progress {\n    width: 50%;\n    margin-bottom: 1.5rem;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/2/index.less":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/2/index.less ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.description {\n    font: var(--tui-font-text-xs);\n    margin-top: @space;\n    color: var(--tui-text-03);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.less":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.description {\n    font: var(--tui-font-text-s);\n    margin-top: @space;\n    color: var(--tui-text-03);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n:host {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n}\n\n.island {\n    box-sizing: border-box;\n    width: 49%;\n\n    @media @mobile {\n        width: 100%;\n    }\n}\n\n.range {\n    margin: 2rem 0;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/2/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/2/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.example {\n    .tui-space(bottom, 2);\n}\n\n.yellow {\n    color: #faaf00;\n}\n\n.pink {\n    color: pink;\n}\n\n.red {\n    color: var(--tui-negative);\n}\n\n.label {\n    color: #000;\n    font-weight: bold;\n    cursor: pointer;\n    .tui-space(bottom, 2);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/2/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/2/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.form {\n    max-width: 25rem;\n}\n\n.account-item,\n.card-item {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    min-width: 0;\n}\n\n.account-item {\n    height: 4rem;\n}\n\n.account {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n}\n\n.card {\n    background-color: var(--tui-support-05);\n}\n\n.card-name {\n    .text-overflow();\n    margin: 0 0.5rem;\n    min-width: 0;\n    flex: 1 1 0;\n}\n\n.card-number {\n    margin-left: auto;\n    color: var(--tui-text-02);\n}\n\n.icon {\n    width: 1.5rem;\n}\n\n.account-currency {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin-right: @space * 2;\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 100%;\n    background-color: var(--tui-base-01);\n    font-weight: bold;\n}\n\n.account-card {\n    margin-left: auto;\n    flex-shrink: 0;\n}\n\n.account-name {\n    font: var(--tui-font-text-s);\n    color: var(--tui-text-03);\n}\n\n.account-value {\n    font: var(--tui-font-text-m);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.less":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".first {\n    --tui-primary: var(--tui-support-01);\n    --tui-primary-hover: var(--tui-support-21);\n    --tui-primary-active: var(--tui-support-02);\n}\n\n.second {\n    --tui-primary: var(--tui-support-03);\n    --tui-primary-hover: var(--tui-support-04);\n    --tui-primary-active: var(--tui-positive);\n}\n\n.third {\n    --tui-primary: var(--tui-support-12);\n    --tui-primary-hover: var(--tui-support-07);\n    --tui-primary-active: var(--tui-support-08);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/svg/examples/2/index.less":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/svg/examples/2/index.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".primary {\n    color: var(--tui-primary);\n    fill: var(--tui-text-01);\n}\n\n.retrowave {\n    color: #4dc3f7;\n    fill: #ff78a7;\n}\n\n.question {\n    color: #aed57f;\n    fill: #73b077;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.less":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tag {\n    margin: 0.25rem;\n}\n\n.light-mode {\n    display: inline-block;\n    background-color: #454e58;\n}\n\n.dark-mode {\n    display: inline-block;\n    margin-left: 0.25rem;\n    background-color: #e5e7ea;\n}\n\n@iterations: 20;\n\n.loop (@i) when (@i > 0) {\n    .support-@{i} {\n        background-color: ~'var(--tui-support-@{i}, var(--tui-support-0@{i}))';\n    }\n    .loop(@i - 1);\n}\n.loop (@iterations);\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/2/index.less":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/2/index.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-large {\n    min-height: 9.375rem;\n}\n\n.field-small {\n    min-height: 3.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/2/index.less":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/2/index.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: block;\n    margin: -1.25rem;\n    padding: 1.875rem;\n    background: #3e4757;\n    color: var(--tui-base-01);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/2/index.less":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/2/index.less ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tui-tree {\n    margin-left: -3.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.less":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.less ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".context-menu {\n    width: 8rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.less":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.less ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n    width: 12.5rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: block;\n}\n\n.video {\n    display: block;\n}\n\n.player {\n    position: relative;\n    width: 20rem;\n}\n\n.controls {\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: 0.75rem 0.75rem 0.5rem;\n    box-sizing: border-box;\n    color: var(--tui-base-01);\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.56));\n}\n\n.slider {\n    flex: 1;\n    margin-left: 0.75rem;\n}\n\n.time {\n    flex-shrink: 0;\n    margin-left: 0.75rem;\n    font-size: 0.8125rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/2/index.less":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/2/index.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n    overflow: auto;\n    width: 16rem;\n    height: 9.75rem;\n    border: 1px solid var(--tui-base-09);\n    padding: 0 0.6875rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/swipe/examples/2/index.less":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/swipe/examples/2/index.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    width: 200px;\n    height: 200px;\n}\n\n.sidebar {\n    width: 100%;\n    height: 100%;\n}\n\n.container,\n.sidebar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/grid/examples/2/index.less":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/grid/examples/2/index.less ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\n.dummy {\n    margin-bottom: 0.75rem;\n    padding: 0.75rem;\n    width: 100%;\n    min-height: 2.5rem;\n    box-sizing: border-box;\n    background-color: rgba(208, 2, 27, 0.3);\n}\n\n.tui-row {\n    &_example {\n        margin-top: 0.75rem;\n        height: 5.3125rem;\n        box-shadow: 0 0 0 2px rgba(204, 228, 255, 0.5) inset;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.less":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.less ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: block;\n}\n\n.container {\n    padding: 1.5rem;\n\n    &_dark {\n        background-image: linear-gradient(225deg, #3023ae, #c86dd7);\n        color: var(--tui-text-01-night);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.less":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.less ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'taiga-ui-local';\n\ntd,\nth {\n    white-space: nowrap;\n    border-color: transparent;\n    border-right-color: var(--tui-base-04);\n\n    &:last-child {\n        border-right-color: transparent;\n    }\n}\n\ntbody {\n    border-color: transparent;\n}\n\ntr:nth-child(even) td {\n    background: var(--tui-base-02);\n}\n\n.alive,\n.deceased {\n    display: flex;\n    align-items: center;\n    text-transform: capitalize;\n\n    &:before {\n        content: '';\n        width: 0.5rem;\n        height: 0.5rem;\n        border-radius: 100%;\n        margin-right: 0.5rem;\n        background: var(--tui-base-04);\n    }\n}\n\n.alive:before {\n    background: var(--tui-success-fill);\n}\n\n.remove {\n    .transition(opacity);\n    opacity: 0;\n\n    tr:hover &,\n    tr:focus-within & {\n        opacity: 1;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.less":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.less ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/2/index.less":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/2/index.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-index-less.js.map