(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/arc-chart/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/arc-chart/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-count\n    class=\"b-form\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n<div class=\"wrapper\">\n    <tui-arc-chart\n        size=\"m\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n        [(activeItemIndex)]=\"activeItemIndex\"\n    >\n        Total value\n    </tui-arc-chart>\n    <tui-arc-chart\n        size=\"l\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n        [(activeItemIndex)]=\"activeItemIndex\"\n    >\n        Total value\n        <div>Label</div>\n    </tui-arc-chart>\n    <tui-arc-chart\n        size=\"xl\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n        [(activeItemIndex)]=\"activeItemIndex\"\n    >\n        <tui-money [value]=\"123456\"></tui-money>\n        <div>Not bad!</div>\n    </tui-arc-chart>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/1/index.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/1/index.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    axisYName=\"Target\"\n    axisYSecondaryName=\"Sum\"\n    class=\"axes\"\n    [axisYInset]=\"true\"\n    [horizontalLines]=\"2\"\n    [verticalLines]=\"3\"\n    [axisXLabels]=\"axisXLabels\"\n    [axisYLabels]=\"axisYLabels\"\n    [axisYSecondaryLabels]=\"axisYSecondaryLabels\"\n    [verticalLinesHandler]=\"verticalLinesHandler\"\n></tui-axes>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    class=\"axes\"\n    [axisXLabels]=\"labelsX\"\n    [axisYLabels]=\"labelsY\"\n>\n    <tui-bar-chart\n        [max]=\"10000\"\n        [value]=\"value\"\n    ></tui-bar-chart>\n</tui-axes>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-bar-set\n    class=\"bars\"\n    [value]=\"value\"\n    [size]=\"null\"\n></tui-bar-set>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/1/index.html":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/1/index.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-bar class=\"bar\"></tui-bar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/legend-item/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/legend-item/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-ring-chart\n        [value]=\"value\"\n        [content]=\"content\"\n        [(activeItemIndex)]=\"activeItemIndex\"\n    ></tui-ring-chart>\n\n    <ng-template #content>\n        <tui-money\n            [singleColor]=\"true\"\n            [value]=\"sum\"\n        ></tui-money>\n        <div>Total</div>\n    </ng-template>\n\n    <div class=\"legend\">\n        <tui-legend-item\n            *ngFor=\"let label of labels; let index = index\"\n            size=\"s\"\n            class=\"item\"\n            [color]=\"getColor(index)\"\n            [text]=\"label\"\n            [active]=\"isItemActive(index)\"\n            (tuiHoveredChange)=\"onHover(index, $event)\"\n        >\n            <tui-money\n                [singleColor]=\"true\"\n                [value]=\"value[index]\"\n            ></tui-money>\n        </tui-legend-item>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    class=\"axes\"\n    [verticalLines]=\"4\"\n    [horizontalLines]=\"2\"\n>\n    <tui-line-chart\n        [x]=\"0\"\n        [y]=\"0\"\n        [width]=\"400\"\n        [height]=\"200\"\n        [dots]=\"true\"\n        [value]=\"value\"\n        [xStringify]=\"stringify\"\n        [yStringify]=\"stringify\"\n    ></tui-line-chart>\n</tui-axes>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"b-form\">\n    <tui-input-date-range\n        [maxLength]=\"maxLength\"\n        [(ngModel)]=\"range\"\n    >\n        Range\n    </tui-input-date-range>\n</p>\n<tui-axes\n    *ngIf=\"computeLabels$(range) | async as labels\"\n    class=\"axes\"\n    [verticalLines]=\"labels.length\"\n    [horizontalLines]=\"4\"\n    [axisXLabels]=\"labels\"\n>\n    <tui-line-days-chart\n        class=\"chart\"\n        [height]=\"200\"\n        [value]=\"value\"\n        [yStringify]=\"yStringify\"\n        [xStringify]=\"xStringify$ | async\"\n    ></tui-line-days-chart>\n</tui-axes>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/pie-chart/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/pie-chart/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-pie-chart\n        size=\"xs\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-pie-chart>\n    <tui-pie-chart\n        size=\"s\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-pie-chart>\n    <tui-pie-chart\n        size=\"m\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-pie-chart>\n    <tui-pie-chart\n        size=\"l\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-pie-chart>\n    <tui-pie-chart\n        size=\"xl\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-pie-chart>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/ring-chart/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/ring-chart/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-ring-chart\n        size=\"s\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-ring-chart>\n    <tui-ring-chart\n        size=\"m\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-ring-chart>\n    <tui-ring-chart\n        size=\"l\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-ring-chart>\n    <tui-ring-chart\n        size=\"xl\"\n        class=\"tui-space_right-4\"\n        [value]=\"value\"\n    ></tui-ring-chart>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-accordion class=\"container\">\n    <tui-accordion-item>\n        Taiga UI cdk\n        <ng-template tuiAccordionItemContent>\n            Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities\n        </ng-template>\n    </tui-accordion-item>\n    <tui-accordion-item>\n        Taiga UI core\n        <ng-template tuiAccordionItemContent>\n            <div #content>\n                Basic elements needed to develop components, directives and more using Taiga UI design system\n            </div>\n        </ng-template>\n    </tui-accordion-item>\n    <tui-accordion-item>\n        Taiga UI kit\n        <ng-template tuiAccordionItemContent>\n            The main set of components used to build Taiga UI based Angular applications\n        </ng-template>\n    </tui-accordion-item>\n</tui-accordion>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-action\n        icon=\"tuiIconStarLarge\"\n        class=\"action\"\n        (click)=\"onClick('Different')\"\n    >\n        And now for something completely different\n    </tui-action>\n    <tui-action\n        icon=\"tuiIconBellLarge\"\n        class=\"action\"\n        (click)=\"onClick('Inquisition')\"\n    >\n        Nobody expects the Spanish Inquisition!\n    </tui-action>\n    <tui-action\n        icon=\"tuiIconFlagLarge\"\n        class=\"action\"\n        (click)=\"onClick('Lumberjack')\"\n    >\n        I'm a lumberjack and I'm OK\n    </tui-action>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-avatar\n    class=\"tui-space_top-1\"\n    [avatarUrl]=\"avatar\"\n></tui-avatar>\n<tui-avatar\n    text=\"alex inkin\"\n    class=\"tui-space_top-1\"\n></tui-avatar>\n<tui-avatar\n    text=\"dmitry demensky\"\n    size=\"l\"\n    class=\"tui-space_top-1\"\n    [rounded]=\"true\"\n></tui-avatar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>Statuses</p>\n<tui-badge\n    class=\"tui-space_right-2\"\n    [value]=\"-6\"\n></tui-badge>\n<tui-badge\n    status=\"primary\"\n    class=\"tui-space_right-2\"\n    [value]=\"6\"\n></tui-badge>\n<tui-badge\n    status=\"success\"\n    value=\"Success\"\n    class=\"tui-space_right-2\"\n></tui-badge>\n<tui-badge\n    status=\"error\"\n    value=\"Error\"\n    class=\"tui-space_right-2\"\n></tui-badge>\n<tui-badge\n    status=\"warning\"\n    value=\"Warning\"\n    class=\"tui-space_right-2\"\n></tui-badge>\n<tui-badge\n    status=\"neutral\"\n    value=\"Neutral\"\n    class=\"tui-space_right-2\"\n></tui-badge>\n<tui-badge\n    status=\"info\"\n    value=\"Info\"\n    class=\"tui-space_right-2\"\n></tui-badge>\n<div\n    tuiMode=\"onLight\"\n    class=\"tui-space_right-2 outline outline_dark\"\n>\n    <tui-badge [value]=\"6\"></tui-badge>\n</div>\n<div\n    tuiMode=\"onDark\"\n    class=\"outline outline_light\"\n>\n    <tui-badge [value]=\"6\"></tui-badge>\n</div>\n<p i18n>\n    Use CSS and\n    <code>status=\"custom\"</code>\n    for support colors\n</p>\n<tui-badge\n    *tuiRepeatTimes=\"let index of 20\"\n    status=\"custom\"\n    value=\"Taiga\"\n    class=\"tui-space_horizontal-2 tui-space_vertical-2 support-{{ index + 1 }}\"\n    [hoverable]=\"true\"\n></tui-badge>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <tui-badged-content\n        colorTop=\"var(--tui-error-fill)\"\n        size=\"l\"\n        class=\"tui-space_right-5\"\n        [rounded]=\"true\"\n    >\n        <tui-avatar\n            text=\"a b\"\n            size=\"l\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorBottom=\"var(--tui-success-fill)\"\n        size=\"l\"\n        class=\"tui-space_right-5\"\n        [rounded]=\"true\"\n    >\n        <tui-avatar\n            text=\"c d\"\n            size=\"l\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorTop=\"var(--tui-success-fill)\"\n        colorBottom=\"var(--tui-error-fill)\"\n        size=\"l\"\n        class=\"tui-space_right-5\"\n        [rounded]=\"true\"\n    >\n        <tui-avatar\n            text=\"e\"\n            size=\"l\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n    </tui-badged-content>\n</div>\n\n<div class=\"row tui-space_top-5\">\n    <tui-badged-content\n        colorTop=\"var(--tui-error-fill)\"\n        size=\"l\"\n        class=\"tui-space_right-5\"\n    >\n        <tui-avatar\n            text=\"a b\"\n            size=\"l\"\n        ></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorBottom=\"var(--tui-success-fill)\"\n        size=\"l\"\n        class=\"tui-space_right-5\"\n    >\n        <tui-avatar\n            text=\"c d\"\n            size=\"l\"\n        ></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorTop=\"var(--tui-success-fill)\"\n        colorBottom=\"var(--tui-error-fill)\"\n        size=\"l\"\n        class=\"tui-space_right-5\"\n    >\n        <tui-avatar\n            text=\"e\"\n            size=\"l\"\n        ></tui-avatar>\n    </tui-badged-content>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/breadcrumbs/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/breadcrumbs/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-breadcrumbs>\n    <ng-container *ngFor=\"let item of items\">\n        <a\n            *tuiBreadcrumb\n            tuiLink\n            [routerLink]=\"item.routerLink\"\n        >\n            {{ item.caption }}\n        </a>\n    </ng-container>\n</tui-breadcrumbs>\n\n<tui-breadcrumbs\n    size=\"l\"\n    class=\"tui-space_top-2\"\n>\n    <ng-container *ngFor=\"let item of items\">\n        <a\n            *tuiBreadcrumb\n            tuiLink\n            [routerLink]=\"item.routerLink\"\n        >\n            {{ item.caption }}\n        </a>\n    </ng-container>\n</tui-breadcrumbs>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #icon>\n    <tui-avatar\n        size=\"xs\"\n        [rounded]=\"true\"\n        [avatarUrl]=\"avatarUrl\"\n    ></tui-avatar>\n</ng-template>\n<h3>button[tuiButton]</h3>\n<p>\n    <button\n        tuiButton\n        type=\"button\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n        (click)=\"onClick($event)\"\n    >\n        Button\n    </button>\n\n    <button\n        tuiButton\n        type=\"button\"\n        iconRight=\"tuiIconSearch\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [disabled]=\"true\"\n        (click)=\"onClick($event)\"\n    >\n        Disabled button\n    </button>\n\n    <button\n        tuiButton\n        type=\"button\"\n        [showLoader]=\"true\"\n        (click)=\"onClick($event)\"\n    >\n        Loading button\n    </button>\n</p>\n<h3>button[tuiIconButton]</h3>\n<p>\n    <button\n        tuiIconButton\n        type=\"button\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n        (click)=\"onClick($event)\"\n    ></button>\n\n    <button\n        tuiIconButton\n        type=\"button\"\n        icon=\"tuiIconSearch\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [disabled]=\"true\"\n        (click)=\"onClick($event)\"\n    ></button>\n\n    <button\n        tuiIconButton\n        type=\"button\"\n        [showLoader]=\"true\"\n        (click)=\"onClick($event)\"\n    ></button>\n</p>\n<h3>a[tuiButton]</h3>\n<p>\n    <a\n        tuiButton\n        type=\"button\"\n        href=\"http://google.com\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n    >\n        Link\n    </a>\n\n    <a\n        tuiButton\n        [showLoader]=\"true\"\n    >\n        Loading button\n    </a>\n</p>\n<h3>a[tuiIconButton]</h3>\n<p>\n    <a\n        tuiIconButton\n        type=\"button\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [icon]=\"icon\"\n        [routerLink]=\"['/tui-dropdown']\"\n    ></a>\n\n    <a\n        tuiIconButton\n        type=\"button\"\n        icon=\"tuiIconSearch\"\n        class=\"tui-space_right-3 tui-space_bottom-3\"\n        [disabled]=\"true\"\n        [routerLink]=\"\"\n        [tuiFocusable]=\"false\"\n    ></a>\n\n    <a\n        tuiIconButton\n        type=\"button\"\n        [showLoader]=\"true\"\n        [routerLink]=\"\"\n        [tuiFocusable]=\"false\"\n    ></a>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-month/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-month/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-calendar-month\n    [value]=\"value\"\n    (monthClick)=\"onMonthClick($event)\"\n    (hoveredItemChange)=\"onMonthHovered($event)\"\n></tui-calendar-month>\n<p>Selected month: {{ value }}</p>\n<p>Hovered month: {{ hoveredMonth }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-calendar-range></tui-calendar-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/1/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/1/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-calendar\n    [value]=\"value\"\n    (dayClick)=\"onDayClick($event)\"\n></tui-calendar>\n<div\n    *ngIf=\"value\"\n    i18n\n>\n    Chosen date: {{ value }}\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-card\n    cardNumber=\"1234\"\n    paymentSystem=\"visa\"\n    class=\"logo\"\n    [active]=\"true\"\n></tui-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/1/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/1/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-carousel\n    [duration]=\"4000\"\n    [(index)]=\"index\"\n>\n    <ng-container *ngFor=\"let item of items\">\n        <tui-island *tuiItem>\n            <h2 class=\"tui-island__title\">{{ item }}</h2>\n            <a\n                tuiButton\n                href=\"https://en.wikipedia.org/wiki/{{ item }}\"\n            >\n                Wiki\n            </a>\n        </tui-island>\n    </ng-container>\n</tui-carousel>\n<tui-pagination\n    size=\"s\"\n    class=\"pagination\"\n    [length]=\"items.length\"\n    [(index)]=\"index\"\n></tui-pagination>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <div class=\"tui-form__row\">\n        <tui-checkbox-block\n            i18n\n            formControlName=\"testValue1\"\n            contentAlign=\"right\"\n            size=\"s\"\n        >\n            One option\n        </tui-checkbox-block>\n    </div>\n    <div class=\"tui-form__row\">\n        <tui-checkbox-block\n            i18n\n            formControlName=\"testValue2\"\n            contentAlign=\"right\"\n            size=\"m\"\n        >\n            An alternative one\n        </tui-checkbox-block>\n    </div>\n    <div class=\"tui-form__row\">\n        <tui-checkbox-block\n            i18n\n            contentAlign=\"right\"\n            formControlName=\"testValue3\"\n            size=\"l\"\n        >\n            Other\n        </tui-checkbox-block>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/1/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/1/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-checkbox-labeled formControlName=\"testValue1\">\n        Taiga UI\n        <div class=\"example\">Angular UI Kit for awesome people</div>\n    </tui-checkbox-labeled>\n\n    <tui-checkbox-labeled\n        formControlName=\"testValue2\"\n        class=\"tui-space_top-3\"\n    >\n        ng-polymorpheus\n        <div class=\"example\">A tiny library for polymorphic templates in Angular.</div>\n    </tui-checkbox-labeled>\n\n    <tui-checkbox-labeled\n        formControlName=\"testValue3\"\n        class=\"tui-space_top-3\"\n    >\n        ng-dompurify\n        <div class=\"example\">Inclusive Angular API for DOMPurify</div>\n    </tui-checkbox-labeled>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/1/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/1/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-checkbox\n        formControlName=\"testValue1\"\n        class=\"tui-space_bottom-3\"\n    ></tui-checkbox>\n\n    <tui-checkbox\n        formControlName=\"testValue2\"\n        class=\"tui-space_bottom-3\"\n    ></tui-checkbox>\n\n    <tui-checkbox\n        formControlName=\"testValue3\"\n        class=\"tui-space_bottom-3\"\n    ></tui-checkbox>\n\n    <tui-checkbox formControlName=\"testValue4\"></tui-checkbox>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/color-picker/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/color-picker/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-color\n    class=\"b-form\"\n    [colors]=\"palette\"\n    [(ngModel)]=\"color\"\n>\n    Background color\n</tui-input-color>\n<tui-input-color\n    tuiTextfieldSize=\"m\"\n    class=\"b-form tui-space_vertical-2\"\n    [colors]=\"palette\"\n    [(ngModel)]=\"color\"\n>\n    Background color\n</tui-input-color>\n<tui-input-color\n    tuiTextfieldSize=\"s\"\n    class=\"b-form\"\n    [colors]=\"palette\"\n    [(ngModel)]=\"color\"\n>\n    Background color\n</tui-input-color>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    <tui-combo-box\n        tuiTextfieldSize=\"s\"\n        [formControl]=\"testValue\"\n        [valueContent]=\"content\"\n        (searchChange)=\"onSearchChange($event)\"\n    >\n        Find the best employees\n        <input\n            tuiTextfield\n            placeholder=\"Type a name\"\n            (input)=\"onSearchChange(extractValueFromEvent($event))\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n            [itemContent]=\"content\"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n    <tui-combo-box\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_vertical-5\"\n        [formControl]=\"testValue\"\n        [valueContent]=\"content\"\n    >\n        Find the best employees\n        <input\n            tuiTextfield\n            placeholder=\"Type a name\"\n            (input)=\"onSearchChange(extractValueFromEvent($event))\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n            [itemContent]=\"content\"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n    <tui-combo-box\n        [formControl]=\"testValue\"\n        [valueContent]=\"content\"\n    >\n        Choose a developer\n        <input\n            tuiTextfield\n            placeholder=\"Type a name\"\n            (input)=\"onSearchChange(extractValueFromEvent($event))\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n            [itemContent]=\"content\"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n\n<ng-template\n    #content\n    let-data\n>\n    <div class=\"template\">\n        <tui-avatar\n            size=\"xs\"\n            class=\"avatar\"\n            [avatarUrl]=\"data.avatarUrl || null\"\n            [text]=\"data.toString()\"\n        ></tui-avatar>\n        <div class=\"name\">{{ data }}</div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown [content]=\"content\">\n    <button\n        tuiButton\n        type=\"button\"\n        [iconRight]=\"arrow\"\n    >\n        Menu\n    </button>\n</tui-hosted-dropdown>\n<ng-template #content>\n    <tui-data-list role=\"menu\">\n        <tui-opt-group\n            *ngFor=\"let group of groups\"\n            [label]=\"group.label\"\n        >\n            <a\n                *ngFor=\"let item of group.items\"\n                #rla=\"routerLinkActive\"\n                tuiOption\n                role=\"menuitemradio\"\n                routerLinkActive\n                [attr.aria-checked]=\"rla.isActive\"\n                [routerLink]=\"item.routerLink\"\n            >\n                {{ item.label }}\n                <tui-svg\n                    *ngIf=\"rla.isActive\"\n                    src=\"tuiIconCheckLarge\"\n                ></tui-svg>\n            </a>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n    (click)=\"showDialog()\"\n>\n    Show\n</button>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n    (click)=\"showDialogWithCustomButton()\"\n>\n    Show (custom button text)\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-editor\n    new\n    class=\"editor\"\n    [formControl]=\"control\"\n    [tools]=\"builtInTools\"\n>\n    Smiles are custom tool. Try it.\n\n    <ng-container ngProjectAs=\"tools\">\n        <smiles-tool tuiToolbarTool></smiles-tool>\n\n        <span class=\"hint\">\n            <tui-svg src=\"tuiIconArrowLeft\"></tui-svg>\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <button\n        tuiButton\n        type=\"button\"\n        (click)=\"onClick()\"\n    >\n        Set value\n    </button>\n</p>\n<tui-editor\n    i18n\n    exampleText=\"Describe a problem with templates\"\n    class=\"editor\"\n    [(ngModel)]=\"model\"\n>\n    Describe a problem\n</tui-editor>\n<h4>HTML:</h4>\n<tui-editor-socket [content]=\"model\"></tui-editor-socket>\n<h4>Text:</h4>\n<p>{{ model }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/error/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/error/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-toggle [(ngModel)]=\"enabled\">Show</tui-toggle>\n<tui-error [error]=\"computedError\"></tui-error>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/expand/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/expand/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Chapman: Mr Wentworth just told me to come in here and say that there was trouble at the mill, that's all - I didn't\n    expect a kind of Spanish Inquisition.\n</p>\n<button\n    tuiButton\n    type=\"button\"\n    (click)=\"toggle()\"\n>\n    Show/Hide\n</button>\n<tui-expand [expanded]=\"expanded\">\n    <ng-template tuiExpandContent>\n        <p>NOBODY expects the Spanish Inquisition!</p>\n    </ng-template>\n</tui-expand>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        i18n-label\n        tuiLabel\n        label=\"Type the ultimate answer\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-field-error formControlName=\"testValue2\"></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Set a password\"\n    >\n        <tui-input\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-field-error formControlName=\"testValue1\"></tui-field-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to type something, subscribe on form value\n        changes and call markAsTouched on control on first value change\n    </p>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    <tui-filter\n        formControlName=\"filters\"\n        size=\"s\"\n        [disabledItemHandler]=\"disabledItemHandler\"\n        [items]=\"items\"\n    ></tui-filter>\n</form>\n<div>\n    <pre>Form value: {{ form.value | json }}</pre>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"input-wrapper\"\n    [formGroup]=\"testForm\"\n>\n    <div\n        tuiGroup\n        class=\"group\"\n    >\n        <div>\n            <tui-input\n                formControlName=\"testValue\"\n                tuiTextfieldExampleText=\"House\"\n                tuiHintContent=\"Write a number\"\n                class=\"tui-group__inherit-item\"\n            >\n                House\n            </tui-input>\n            <tui-error\n                formControlName=\"testValue\"\n                [error]=\"[] | tuiFieldError | async\"\n            ></tui-error>\n        </div>\n        <div>\n            <tui-multi-select\n                formControlName=\"multiSelectControl\"\n                tuiHintContent=\"Write house building\"\n                class=\"tui-group__inherit-item\"\n                [tuiTextfieldLabelOutside]=\"true\"\n                [editable]=\"false\"\n                [expandable]=\"false\"\n            >\n                Building\n                <tui-data-list-wrapper\n                    *tuiDataList\n                    tuiMultiSelectGroup\n                    [items]=\"items\"\n                ></tui-data-list-wrapper>\n            </tui-multi-select>\n            <tui-error\n                formControlName=\"multiSelectControl\"\n                [error]=\"[] | tuiFieldError | async\"\n            ></tui-error>\n        </div>\n        <div>\n            <tui-input\n                formControlName=\"testValue3\"\n                tuiTextfieldExampleText=\"Apartment number\"\n                tuiHintContent=\"Write an apartment number only\"\n                class=\"tui-group__inherit-item\"\n            >\n                Apartment\n            </tui-input>\n            <tui-error\n                formControlName=\"testValue3\"\n                [error]=\"[] | tuiFieldError | async\"\n            ></tui-error>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/1/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/1/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    tuiDropdownAlign=\"left\"\n    [content]=\"dropdown\"\n    [(open)]=\"open\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n        appearance=\"flat\"\n        [iconRight]=\"icon\"\n    >\n        Button\n    </button>\n</tui-hosted-dropdown>\n<ng-template #icon>\n    <tui-svg\n        src=\"tuiIconChevronDown\"\n        class=\"icon\"\n        [class.icon_rotated]=\"open\"\n    ></tui-svg>\n</ng-template>\n<ng-template #dropdown>\n    <tui-data-list>\n        <button\n            *ngFor=\"let item of items\"\n            tuiOption\n            (click)=\"onClick()\"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/1/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/1/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-card-grouped\n    [cardSrc]=\"card\"\n    [formControl]=\"control\"\n></tui-input-card-grouped>\n<tui-error\n    [formControl]=\"control\"\n    [error]=\"[] | tuiFieldError | async\"\n></tui-error>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>\n    <code>form</code>\n    tag is used for better autocomplete\n</p>\n<form\n    tuiGroup\n    [formGroup]=\"form\"\n>\n    <tui-input-card\n        formControlName=\"card\"\n        [autocompleteEnabled]=\"true\"\n        [cardSrc]=\"card\"\n    >\n        Card number\n    </tui-input-card>\n    <tui-input-expire\n        formControlName=\"expire\"\n        [autocompleteEnabled]=\"true\"\n    >\n        Expire date\n    </tui-input-expire>\n    <tui-input-cvc\n        formControlName=\"cvc\"\n        [autocompleteEnabled]=\"true\"\n    >\n        CVC/CVV\n    </tui-input-cvc>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-copy/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-copy/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-copy\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n    >\n        Value\n        <input\n            tuiTextfield\n            placeholder=\"Placeholder\"\n        />\n    </tui-input-copy>\n\n    <tui-input-copy\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_vertical-4\"\n    >\n        Value\n    </tui-input-copy>\n\n    <tui-input-copy formControlName=\"testValue\">Value</tui-input-copy>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Step is 1 by default\"\n    >\n        <tui-input-count\n            formControlName=\"testValue1\"\n            [min]=\"1\"\n            [max]=\"200\"\n        >\n            Count something\n            <input\n                tuiTextfield\n                placeholder=\"1.. 2.. 3..\"\n            />\n        </tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Step is 100\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-input-count\n            formControlName=\"testValue2\"\n            [tuiTextfieldLabelOutside]=\"true\"\n            [step]=\"100\"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Also works with negative values\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-input-count\n            formControlName=\"testValue3\"\n            [tuiTextfieldLabelOutside]=\"true\"\n            [min]=\"-100\"\n            [max]=\"100\"\n        ></tui-input-count>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/1/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/1/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <p i18n>\n        If a field is optional, but unfinished field should be marked as invalid, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-date-range\n        tuiUnfinishedValidator=\"Finish filling the field\"\n        formControlName=\"testValue\"\n        [min]=\"min\"\n        [max]=\"max\"\n    >\n        Choose dates\n        <input\n            tuiTextfield\n            placeholder=\"From - To\"\n        />\n    </tui-input-date-range>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/1/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/1/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-date-time formControlName=\"testValue\">\n        Choose date and time\n        <input\n            tuiTextfield\n            placeholder=\"OCT 26 1985 01:22\"\n        />\n    </tui-input-date-time>\n\n    <p i18n>Form value:</p>\n\n    <pre><code>{{testForm.value | json}}</code></pre>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    <p i18n>\n        If a field is optional, but unfinished field should be marked as invalid, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-date\n        tuiUnfinishedValidator=\"Finish filling the field\"\n        formControlName=\"testValue\"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-error\n        formControlName=\"testValue\"\n        [error]=\"[] | tuiFieldError | async\"\n    ></tui-error>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-file\n    link=\"Choose an image\"\n    accept=\"image/*\"\n    class=\"container\"\n    [formControl]=\"control\"\n    [loadingFiles]=\"(loading$ | async) || []\"\n    [rejectedFiles]=\"(rejected$ | async) || []\"\n></tui-input-file>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-files\n    *ngIf=\"!control.value\"\n    accept=\"image/*\"\n    [formControl]=\"control\"\n    (reject)=\"onReject($event)\"\n></tui-input-files>\n\n<tui-files class=\"tui-space_top-1\">\n    <tui-file\n        *ngIf=\"control.valueChanges | async as file\"\n        [file]=\"file\"\n        (removed)=\"removeFile()\"\n    ></tui-file>\n\n    <tui-file\n        *ngIf=\"rejectedFiles$ | async as file\"\n        state=\"error\"\n        [file]=\"file\"\n        (removed)=\"clearRejected()\"\n    ></tui-file>\n</tui-files>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month-range/examples/1/index.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month-range/examples/1/index.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-month-range\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    Choose a range of months\n    <input\n        tuiTextfield\n        placeholder=\"3 months or more\"\n    />\n</tui-input-month-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-month\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    Choose a month\n    <input\n        tuiTextfield\n        placeholder=\"Not September please\"\n    />\n</tui-input-month>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-number\n    tuiHintContent=\"Dollar sign is commonly placed BEFORE the amount. Use [prefix].\"\n    [formControl]=\"control\"\n    [prefix]=\"'USD' | tuiCurrency\"\n>\n    Type a sum\n</tui-input-number>\n\n<tui-input-number\n    tuiHintContent=\"Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].\"\n    [formControl]=\"control\"\n    [postfix]=\"'978' | tuiCurrency\"\n>\n    Type a sum\n</tui-input-number>\n\n<tui-input-number\n    tuiHintContent=\"Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].\"\n    [formControl]=\"control\"\n    [prefix]=\"826 | tuiCurrency\"\n>\n    Type a sum\n</tui-input-number>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-password/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-password/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-password\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n    >\n        Type a password\n        <input\n            tuiTextfield\n            placeholder=\"Make it secure!\"\n        />\n    </tui-input-password>\n    <tui-input-password\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_top-2\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Type a password\n        <input\n            tuiTextfield\n            placeholder=\"Make it secure!\"\n        />\n    </tui-input-password>\n    <tui-input-password\n        formControlName=\"testValue\"\n        class=\"tui-space_top-2\"\n    >\n        Type a password\n        <input\n            tuiTextfield\n            placeholder=\"Make it secure!\"\n        />\n    </tui-input-password>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone-international/examples/1/index.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone-international/examples/1/index.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-input-phone-international\n        formControlName=\"testValue\"\n        class=\"input\"\n        [countries]=\"countries\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [(countryIsoCode)]=\"countryIsoCode\"\n    ></tui-input-phone-international>\n</form>\n\n<button\n    tuiButton\n    class=\"tui-space_top-4\"\n    (click)=\"patchValue()\"\n>\n    Patch value\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-phone formControlName=\"testValue\">\n        Type a phone number\n        <input\n            tuiTextfield\n            autocomplete=\"tel\"\n        />\n    </tui-input-phone>\n    <pre class=\"tui-space_bottom-3\">Form value: {{ testForm.value | json }}</pre>\n</form>\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"setValue()\"\n>\n    Set value from outside: +79926775676\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-range\n    new\n    [min]=\"min\"\n    [max]=\"max\"\n    [quantum]=\"quantum\"\n    [steps]=\"steps\"\n    [formControl]=\"control\"\n    [tuiTextfieldSize]=\"'m'\"\n    [tuiTextfieldLabelOutside]=\"true\"\n></tui-input-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-slider\n    class=\"control\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [steps]=\"steps\"\n    [quantum]=\"quantum\"\n    [formControl]=\"control\"\n    [tuiHintContent]=\"hint\"\n>\n    Select interest rate\n</tui-input-slider>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-tag\n    class=\"b-form\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [formControl]=\"control\"\n>\n    I'm a\n    <i>placeholder</i>\n</tui-input-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-time\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n    >\n        Input time\n    </tui-input-time>\n    <tui-input-time\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_top-2\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Input time\n    </tui-input-time>\n    <p i18n>\n        If field is not required, but you want to mark it invalid if user did not complete it, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-time\n        tuiUnfinishedValidator\n        formControlName=\"testValue\"\n    >\n        Input time\n    </tui-input-time>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input formControlName=\"testValue\">\n        Type an email\n        <input\n            tuiTextfield\n            type=\"email\"\n        />\n    </tui-input>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"tui-row\">\n        <div class=\"tui-col_md-4\">\n            <tui-island>\n                <p class=\"tui-island__category\">category</p>\n                <h3 class=\"tui-island__title\">Some heading</h3>\n                <p class=\"tui-island__paragraph\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                    et dolore magna aliqua.\n                </p>\n                <p class=\"tui-island__paragraph tui-island__paragraph_link\">\n                    <a\n                        href=\"/\"\n                        tuiLink\n                    >\n                        Link\n                    </a>\n                </p>\n            </tui-island>\n        </div>\n        <div class=\"tui-col_md-4\">\n            <tui-island>\n                <h3 class=\"tui-island__title\">Title</h3>\n                <p class=\"tui-island__paragraph\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                    et dolore magna aliqua.\n                </p>\n                <button\n                    tuiButton\n                    type=\"button\"\n                    appearance=\"flat\"\n                    size=\"m\"\n                    class=\"tui-island__footer-button\"\n                >\n                    Button\n                </button>\n            </tui-island>\n        </div>\n        <div class=\"tui-col_md-4\">\n            <tui-island>\n                <div class=\"tui-island__content\">\n                    <figure class=\"tui-island__figure\">\n                        <div class=\"some-figure\"></div>\n                    </figure>\n                    <div>\n                        <p class=\"tui-island__paragraph\">\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                        </p>\n                        <p class=\"tui-island__paragraph tui-island__paragraph_link\">\n                            <a\n                                href=\"/\"\n                                tuiLink\n                            >\n                                Fill some papers\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/label/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/label/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        [label]=\"label\"\n    >\n        <tui-input\n            nativeId=\"uniqueId\"\n            formControlName=\"testValue\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            0,00\n        </tui-input>\n    </label>\n    <ng-template #label>\n        Sum\n        <tui-tooltip\n            describeId=\"uniqueId\"\n            content=\"I am a tooltip that is ready for Screen Readers\"\n            direction=\"top-right\"\n        ></tui-tooltip>\n    </ng-template>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island class=\"island\">\n    <tui-line-clamp\n        [content]=\"content\"\n        [lineHeight]=\"20\"\n        [linesLimit]=\"2\"\n    ></tui-line-clamp>\n</tui-island>\n<ng-template #content>\n    <div class=\"hint\">\n        Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the\n        First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven\n        Kingdoms, Breaker of Chains and Mother of Dragons\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n    tuiLink\n    routerLink=\"/components/link\"\n>\n    Link\n</a>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    class=\"tui-space_right-2\"\n>\n    Clickable button\n</button>\n<tui-loader\n    class=\"inline-flex tui-space_right-2\"\n    [showLoader]=\"true\"\n    [inheritColor]=\"true\"\n    [overlay]=\"true\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n    >\n        Loading button\n    </button>\n</tui-loader>\n<button\n    tuiButton\n    type=\"button\"\n>\n    Useless button\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-marker-icon src=\"tuiIconBellLarge\"></tui-marker-icon>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/1/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/1/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <button\n        tuiIconButton\n        type=\"button\"\n        title=\"Choose a date\"\n        appearance=\"secondary\"\n        shape=\"rounded\"\n        icon=\"tuiIconCalendarLarge\"\n        (click)=\"onClick()\"\n    ></button>\n    <span\n        class=\"date\"\n        [class.date_empty]=\"empty\"\n    >\n        {{ date$ | async }}\n    </span>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-dialog/examples/1/index.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-dialog/examples/1/index.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>Choose iPhone into DevTools to see iOS styled dialog.</p>\n<button\n    tuiButton\n    type=\"button\"\n    (click)=\"show()\"\n>\n    Show dialog\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/1/index.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/1/index.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-theme-android></tui-theme-android>\n\n<p>Button:</p>\n\n<button\n    tuiButton\n    tuiRipple\n    size=\"m\"\n>\n    Hello\n</button>\n\n<p>Link:</p>\n\n<a\n    tuiLink\n    href=\"http://ng-web-apis.github.io/\"\n    target=\"_blank\"\n>\n    Let's check it\n</a>\n\n<p>Island:</p>\n\n<tui-island tuiRipple>Wow!</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol>\n    <li>\n        <tui-money\n            [currency]=\"null\"\n            [value]=\"10728.9\"\n        ></tui-money>\n    </li>\n    <li>\n        <tui-money [value]=\"10728.9\"></tui-money>\n    </li>\n    <li>\n        <tui-money\n            currency=\"EUR\"\n            [value]=\"10728.9\"\n        ></tui-money>\n    </li>\n    <li>\n        <tui-money\n            currency=\"USD\"\n            [value]=\"10728.9\"\n        ></tui-money>\n    </li>\n    <li>\n        <tui-money\n            currency=\"GBP\"\n            [value]=\"10728.9\"\n        ></tui-money>\n    </li>\n</ol>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-multi-select\n    tuiTextfieldExampleText=\"Ignored text\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [editable]=\"false\"\n    [(search)]=\"search\"\n>\n    Star Wars persons\n    <tui-data-list-wrapper\n        *tuiDataList\n        tuiMultiSelectGroup\n        [items]=\"filter(search)\"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/notification/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/notification/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-notification>\n        A short simple informative message. It can be&nbsp;multiline&nbsp;if&nbsp;you&nbsp;need it\n    </tui-notification>\n    <tui-notification\n        status=\"success\"\n        class=\"tui-space_top-4\"\n    >\n        A short simple informative message. It can be&nbsp;multiline&nbsp;if&nbsp;you&nbsp;need it\n    </tui-notification>\n    <tui-notification\n        status=\"error\"\n        class=\"tui-space_top-4\"\n    >\n        A short simple informative message. It can be&nbsp;multiline&nbsp;if&nbsp;you&nbsp;need it\n    </tui-notification>\n    <tui-notification\n        status=\"warning\"\n        class=\"tui-space_top-4\"\n    >\n        A short simple informative message. It can be&nbsp;multiline&nbsp;if&nbsp;you&nbsp;need it\n    </tui-notification>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-slider\n    secondary=\"index\"\n    size=\"m\"\n    class=\"slider\"\n    [max]=\"length - 1\"\n    [quantum]=\"1\"\n    [(ngModel)]=\"index\"\n></tui-input-slider>\n\n<tui-pagination\n    [length]=\"length\"\n    [index]=\"index\"\n    (indexChange)=\"goToPage($event)\"\n></tui-pagination>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-notification class=\"tui-space_bottom-3\">\n    Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n</tui-notification>\n<button\n    tuiButton\n    (click)=\"show(actions)\"\n>\n    Taiga\n</button>\n<ng-template\n    #actions\n    let-content=\"content\"\n>\n    <a\n        tuiButton\n        shape=\"rounded\"\n        size=\"s\"\n        download\n        [href]=\"content\"\n    >\n        Download\n    </a>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tui-space_bottom-2\">With all features</div>\n\n<button\n    tuiButton\n    size=\"m\"\n    type=\"button\"\n    class=\"tui-space_bottom-4\"\n    (click)=\"show()\"\n>\n    Show preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]=\"true\"\n        (tuiSwipe)=\"onSwipe($event)\"\n    >\n        <tui-preview-title>{{ title }}</tui-preview-title>\n        <tui-preview-pagination\n            [length]=\"length\"\n            [(index)]=\"index\"\n        ></tui-preview-pagination>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon=\"tuiIconTrash\"\n            title=\"Delete\"\n            (click)=\"delete()\"\n        ></button>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon=\"tuiIconDownload\"\n            title=\"Download\"\n            (click)=\"download()\"\n        ></button>\n        <button\n            tuiPreviewAction\n            tuiIconButton\n            icon=\"tuiIconCloseLarge\"\n            title=\"Close\"\n            (click)=\"preview.complete()\"\n        ></button>\n\n        <div\n            polymorpheus-outlet\n            [content]=\"previewContent\"\n        >\n            <ng-template let-src>\n                <img\n                    alt=\"\"\n                    [src]=\"src\"\n                />\n            </ng-template>\n        </div>\n    </tui-preview>\n</ng-template>\n\n<ng-template #contentSample>\n    <div class=\"content\">\n        <h1>Important document</h1>\n\n        <p>Hello everyone! This is some important document in A4 format, although it is made using html</p>\n\n        <p>\n            This shows that the component preview can work with absolutely any content: this way you can show any\n            template, image, pdf or even iframe with your favorite site. We will put this content in the center of the\n            portal and provide the user with control over it, and we will provide you with convenient levers to change\n            it and process actions.\n        </p>\n\n        <img\n            src=\"https://github.com/tinkoff/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg\"\n            class=\"polymorpheus\"\n        />\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/1/index.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/1/index.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-primitive-textfield\n    [invalid]=\"computedInvalid\"\n    [focusable]=\"focusable\"\n    [disabled]=\"disabled\"\n    [readOnly]=\"readOnly\"\n    [iconContent]=\"iconContent\"\n    [value]=\"value\"\n    (valueChange)=\"onValueChange($event)\"\n    (focusedChange)=\"onFocused($event)\"\n>\n    <ng-content></ng-content>\n    <input\n        tuiTextfield\n        [type]=\"inputType\"\n    />\n</tui-primitive-textfield>\n\n<ng-template #iconContent>\n    <tui-svg\n        tuiHintId=\"not_required\"\n        class=\"icon\"\n        [tuiHint]=\"hintContent\"\n        [src]=\"icon\"\n        (click)=\"togglePasswordVisibility()\"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #hintContent>{{ hint }}</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<progress\n    tuiProgressBar\n    max=\"100\"\n    class=\"progress\"\n    [value]=\"value$ | async\"\n></progress>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/1/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/1/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-progress-circle\n    size=\"xl\"\n    [max]=\"max\"\n    [value]=\"(value$ | async) || 0\"\n></tui-progress-circle>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/1/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/1/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-progress-segmented\n    class=\"progress\"\n    [max]=\"5\"\n    [value]=\"3\"\n></tui-progress-segmented>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/1/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/1/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-pull-to-refresh (pulled)=\"onPull()\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n    <button\n        tuiButton\n        type=\"button\"\n        class=\"tui-space_top-8 tui-space_bottom-8\"\n        (click)=\"finishLoading()\"\n    >\n        Finish loading\n    </button>\n</tui-pull-to-refresh>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/push/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/push/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-push\n        heading=\"Rachael\"\n        type=\"Replicant\"\n        class=\"push\"\n        [timestamp]=\"1661358075379\"\n        (close)=\"onClose()\"\n    >\n        <tui-svg src=\"tuiIconSettingsLarge\"></tui-svg>\n        Do you like our owl?\n        <button tuiButton>It's artificial?</button>\n        <button tuiLink>Nice hooters!</button>\n    </tui-push>\n\n    <tui-push\n        heading=\"Deckard\"\n        type=\"Human?\"\n        class=\"push\"\n        [timestamp]=\"1661357000000\"\n    >\n        <tui-svg\n            src=\"tuiIconShowLarge\"\n            class=\"human\"\n        ></tui-svg>\n        I've had people walk out on me before, but not when I was being so charming.\n    </tui-push>\n</div>\n\n<tui-push\n    heading=\"Roy\"\n    type=\"Replicant\"\n    (close)=\"onClose()\"\n>\n    <img\n        src=\"assets/images/roy.jpg\"\n        alt=\"\"\n    />\n    <tui-svg src=\"tuiIconSettingsLarge\"></tui-svg>\n    I’ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams\n    glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain.\n    <button tuiLink>Time to die</button>\n</tui-push>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-block/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-block/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <div class=\"tui-form__row\">\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"qiwi\"\n            size=\"s\"\n        >\n            Qiwi\n        </tui-radio-block>\n    </div>\n    <div class=\"tui-form__row\">\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"orange\"\n            size=\"m\"\n        >\n            Oranges\n        </tui-radio-block>\n    </div>\n    <div class=\"tui-form__row\">\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"apple\"\n            size=\"l\"\n        >\n            Apples\n        </tui-radio-block>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/1/index.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/1/index.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-radio-labeled\n        formControlName=\"testValue1\"\n        class=\"tui-space_bottom-3\"\n        [item]=\"items[0]\"\n    >\n        One option\n    </tui-radio-labeled>\n    <tui-radio-labeled\n        formControlName=\"testValue1\"\n        class=\"tui-space_bottom-3\"\n        [item]=\"items[1]\"\n    >\n        Other option\n    </tui-radio-labeled>\n    <tui-radio-labeled\n        formControlName=\"testValue1\"\n        [item]=\"items[2]\"\n    >\n        Alternative option\n    </tui-radio-labeled>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tui-row\">\n    <div class=\"tui-col_md-4\">\n        <form [formGroup]=\"testForm\">\n            <tui-radio-list\n                formControlName=\"tariff\"\n                [items]=\"items\"\n                [itemContent]=\"tariff1ItemContent\"\n            ></tui-radio-list>\n            <ng-template\n                #tariff1ItemContent\n                let-data\n            >\n                <div>Option &laquo;{{ data.name }}&raquo;.</div>\n                <div class=\"description\">{{ data.description }}</div>\n            </ng-template>\n        </form>\n    </div>\n    <div class=\"tui-col_md-4\">\n        <form [formGroup]=\"testForm\">\n            <tui-radio-list\n                formControlName=\"tariff\"\n                orientation=\"horizontal\"\n                [items]=\"items\"\n                [itemContent]=\"tariff2ItemContent\"\n            ></tui-radio-list>\n            <ng-template\n                #tariff2ItemContent\n                let-data\n            >\n                &laquo;{{ data.name }}&raquo;\n            </ng-template>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-radio\n        formControlName=\"testValue1\"\n        item=\"One\"\n        class=\"tui-space_bottom-3\"\n    ></tui-radio>\n\n    <tui-radio\n        formControlName=\"testValue1\"\n        item=\"Two\"\n        class=\"tui-space_bottom-3\"\n    ></tui-radio>\n\n    <tui-radio\n        formControlName=\"testValue2\"\n        item=\"One\"\n        class=\"tui-space_bottom-3\"\n    ></tui-radio>\n\n    <tui-radio\n        formControlName=\"testValue2\"\n        item=\"Two\"\n    ></tui-radio>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-range\n    [formControl]=\"control\"\n    [max]=\"10\"\n    [quantum]=\"1\"\n></tui-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <h2>Template Driven</h2>\n\n    <p>\n        <b>value = {{ rateValue }}</b>\n    </p>\n    <tui-rating\n        class=\"rating\"\n        [(ngModel)]=\"rateValue\"\n    ></tui-rating>\n\n    <p><b>Read only</b></p>\n    <tui-rating\n        class=\"rating\"\n        [readOnly]=\"true\"\n        [(ngModel)]=\"rateValue\"\n    ></tui-rating>\n\n    <p><b>Disabled</b></p>\n    <tui-rating\n        class=\"rating\"\n        [disabled]=\"true\"\n        [(ngModel)]=\"rateValue\"\n    ></tui-rating>\n</div>\n\n<div class=\"example\">\n    <h2>Reactive Forms / Disabled</h2>\n\n    <p>\n        <b>value = {{ rateControl?.value }}</b>\n    </p>\n    <tui-rating\n        class=\"rating\"\n        [formControl]=\"rateControl\"\n    ></tui-rating>\n</div>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"xs\"\n    class=\"example\"\n    (click)=\"enableOrDisable()\"\n>\n    {{ rateControl?.disabled ? 'enable' : 'disable' }} form control\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"b-form\">\n    <tui-select\n        tuiTextfieldSize=\"s\"\n        [formControl]=\"testValue\"\n    >\n        Character\n        <input\n            tuiTextfield\n            placeholder=\"Choose your hero\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_vertical-4\"\n        [formControl]=\"testValue\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Character\n        <input\n            tuiTextfield\n            placeholder=\"Choose your hero\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select [formControl]=\"testValue\">\n        Character\n        <input\n            tuiTextfield\n            placeholder=\"Choose your hero\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"stream$.next()\"\n>\n    Show/Hide\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-slider\n    [formControl]=\"testValue\"\n    [max]=\"10\"\n></tui-slider>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n    tuiSlider\n    type=\"range\"\n    max=\"10\"\n    step=\"1\"\n    size=\"s\"\n    [(ngModel)]=\"value\"\n/>\n\n<input\n    tuiSlider\n    type=\"range\"\n    value=\"60\"\n    size=\"m\"\n    [formControl]=\"formControl\"\n/>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-stepper [activeItemIndex]=\"1\">\n    <button\n        tuiStep\n        state=\"pass\"\n    >\n        Finished step\n    </button>\n    <button tuiStep>Simple step</button>\n    <button\n        tuiStep\n        state=\"error\"\n    >\n        Error step\n    </button>\n    <button\n        tuiStep\n        disabled\n    >\n        Disabled step\n    </button>\n    <button\n        tuiStep\n        icon=\"tuiIconTimeLarge\"\n    >\n        Step with an icon\n    </button>\n</tui-stepper>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/svg/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/svg/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 i18n>Named icon from ShadowDOM</h2>\n<tui-svg\n    src=\"customTuiIconMaestro\"\n    class=\"icon\"\n></tui-svg>\n<ng-container *ngIf=\"timeout$ | async\">\n    <h2 i18n>Named icon</h2>\n    <tui-svg\n        src=\"customTuiIconMastercard\"\n        class=\"icon\"\n    ></tui-svg>\n\n    <h2 i18n>\n        Named icon got with\n        <code>TUI_ICONS_PATH</code>\n    </h2>\n    <tui-svg\n        src=\"tuiIconLikeLarge\"\n        class=\"icon\"\n    ></tui-svg>\n\n    <h2 i18n>Source code</h2>\n    <tui-svg [src]=\"tuiIconTimeLarge\"></tui-svg>\n\n    <h2 i18n>External link</h2>\n    <tui-svg\n        src=\"https://ng-web-apis.github.io/dist/assets/images/web-api.svg\"\n        class=\"external-icon\"\n    ></tui-svg>\n\n    <h2 i18n>External segment link</h2>\n    <tui-svg\n        class=\"icon\"\n        [src]=\"imageUrl\"\n    ></tui-svg>\n</ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tabs\n    tuiMobileTabs\n    [(activeItemIndex)]=\"activeItemIndex\"\n>\n    <button\n        *ngFor=\"let item of items\"\n        tuiTab\n        tuiRipple=\"var(--tui-text-01)\"\n        (click)=\"onClick(item.text)\"\n    >\n        <tui-svg\n            class=\"tui-space_right-2\"\n            [src]=\"item.icon\"\n        ></tui-svg>\n        {{ item.text }}\n    </button>\n</tui-tabs>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"2\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tag\n    size=\"s\"\n    [value]=\"tag\"\n></tui-tag>\n<tui-tag\n    size=\"m\"\n    class=\"tui-space_left-1\"\n    [value]=\"tag\"\n></tui-tag>\n<tui-tag\n    size=\"l\"\n    class=\"tui-space_left-1\"\n    [value]=\"tag\"\n></tui-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>\n    It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from\n    content inside\n</p>\n\n<form\n    class=\"container\"\n    [formGroup]=\"testForm\"\n>\n    <div class=\"tui-row\">\n        <div class=\"tui-col_md-6\">\n            <tui-text-area formControlName=\"testValue1\">Type a text</tui-text-area>\n        </div>\n        <div class=\"tui-col_md-6\">\n            <tui-text-area\n                formControlName=\"testValue2\"\n                [expandable]=\"true\"\n            >\n                Type a text\n            </tui-text-area>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/theme-switcher/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/theme-switcher/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>\n    Samples of\n    <code>LESS</code>\n    and\n    <code>TypeScript</code>\n    are in\n    <code>elderly</code>\n    component.\n</p>\n<elderly *ngIf=\"enabled\"></elderly>\n<label>\n    <tui-toggle\n        size=\"l\"\n        class=\"tui-space_right-1\"\n        [(ngModel)]=\"enabled\"\n    ></tui-toggle>\n    Senior Citizen mode\n</label>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toggle/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/toggle/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <div class=\"tui-space_bottom-2\">\n        <tui-toggle\n            formControlName=\"testValue1\"\n            [showIcons]=\"true\"\n        ></tui-toggle>\n        <tui-toggle\n            formControlName=\"testValue2\"\n            class=\"tui-space_left-1\"\n            [showIcons]=\"true\"\n        ></tui-toggle>\n    </div>\n\n    <div class=\"tui-space_bottom-2\">\n        <tui-toggle formControlName=\"testValue3\"></tui-toggle>\n        <tui-toggle\n            formControlName=\"testValue4\"\n            class=\"tui-space_left-1\"\n        ></tui-toggle>\n    </div>\n\n    <div class=\"tui-space_bottom-2\">\n        <tui-toggle\n            formControlName=\"testValue5\"\n            size=\"l\"\n            [showIcons]=\"true\"\n        ></tui-toggle>\n        <tui-toggle\n            formControlName=\"testValue6\"\n            size=\"l\"\n            class=\"tui-space_left-1\"\n            [showIcons]=\"true\"\n        ></tui-toggle>\n    </div>\n\n    <div>\n        <tui-toggle\n            formControlName=\"testValue7\"\n            size=\"l\"\n        ></tui-toggle>\n        <tui-toggle\n            formControlName=\"testValue8\"\n            size=\"l\"\n            class=\"tui-space_left-1\"\n        ></tui-toggle>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/toolbar/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (tuiActiveZoneChange)=\"onActiveZone($event)\">\n    <div\n        #editor\n        contenteditable\n        tuiDropdownDirection=\"top\"\n        class=\"editor tui-editor-socket\"\n        [class.editor_active]=\"open\"\n        [tuiDropdown]=\"open\"\n        [tuiDropdownContent]=\"dropdown\"\n        [(ngModel)]=\"model\"\n    ></div>\n    <ng-template #dropdown>\n        <tui-toolbar [editor]=\"editor\"></tui-toolbar>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>Component with a static text...</p>\n<tui-tooltip\n    content=\"Please don't touch this\"\n    direction=\"right\"\n></tui-tooltip>\n<p i18n>\n    ...or any custom HTML or logic with\n    <code>PolymorpheusContent</code>\n    :\n</p>\n<tui-tooltip\n    direction=\"bottom-right\"\n    [content]=\"tooltip\"\n></tui-tooltip>\n\n<ng-template #tooltip>\n    <tui-loader\n        size=\"s\"\n        class=\"tooltip\"\n        [inheritColor]=\"true\"\n        [showLoader]=\"loader\"\n    >\n        {{ text }}\n    </tui-loader>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [tuiTreeController]=\"true\">\n    <tui-tree-item>\n        Fruits\n        <tui-tree-item>\n            Apples\n            <tui-tree-item>Granny Smith</tui-tree-item>\n            <tui-tree-item>Red Delicious</tui-tree-item>\n        </tui-tree-item>\n        <tui-tree-item>Oranges</tui-tree-item>\n    </tui-tree-item>\n    <tui-tree-item>\n        Animals\n        <tui-tree-item>Cats</tui-tree-item>\n        <tui-tree-item>Dogs</tui-tree-item>\n    </tui-tree-item>\n</ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"onClick(choose, poorly, wisely)\"\n>\n    Show prompt\n</button>\n<ng-template #choose>\n    <div class=\"wrapper\">\n        <tui-avatar\n            avatarUrl=\"assets/images/choose.png\"\n            size=\"l\"\n            class=\"tui-space_right-2\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n        «Choose wisely»\n    </div>\n</ng-template>\n<ng-template #poorly>\n    <div class=\"wrapper\">\n        <tui-avatar\n            avatarUrl=\"assets/images/poorly.png\"\n            class=\"tui-space_right-2\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n        «You chose poorly»\n    </div>\n</ng-template>\n<ng-template #wisely>\n    <div class=\"wrapper\">\n        «You have chosen wisely»\n        <tui-avatar\n            avatarUrl=\"assets/images/wisely.png\"\n            class=\"tui-space_left-1\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"b-form\">\n    <tui-notification>\n        As usual with the DI this is hierarchical. Meaning you can provide different\n        <code>TUI_ICONS_PATH</code>\n        and use different icons across your app.\n    </tui-notification>\n    <tui-input-date-range\n        tuiHintContent=\"You can use any icons you want\"\n        class=\"tui-space_top-4\"\n        [tuiTextfieldCleaner]=\"true\"\n        [(ngModel)]=\"date\"\n    >\n        Pick your favorite date range\n    </tui-input-date-range>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/portals/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/portals/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    size=\"s\"\n    icon=\"tuiIconPlus\"\n    (click)=\"addTemplate(someTemplate)\"\n>\n    Add\n</button>\n\n<button\n    tuiButton\n    size=\"s\"\n    appearance=\"secondary\"\n    icon=\"tuiIconTrash\"\n    class=\"tui-space_left-3\"\n    (click)=\"removeTemplate()\"\n>\n    Remove\n</button>\n\n<ng-template #someTemplate>\n    <div class=\"template\">\n        <div class=\"greeting\">\n            Hello Taiga UI\n            <tui-svg\n                src=\"tuiIconHeartFilledLarge\"\n                class=\"icon\"\n            ></tui-svg>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/variables/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/variables/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island [hoverable]=\"true\">\n    <tui-input [(ngModel)]=\"value\">Input example</tui-input>\n    <div class=\"tui-space_top-4\">\n        <tui-checkbox-labeled\n            size=\"l\"\n            [(ngModel)]=\"checkbox\"\n        >\n            Checkbox example\n        </tui-checkbox-labeled>\n    </div>\n</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/wrapper/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/wrapper/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input\n    minlength=\"5\"\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Input example\n</tui-input>\n<div class=\"tui-space_vertical-4\">\n    <tui-checkbox-labeled [(ngModel)]=\"checkbox\">Checkbox example</tui-checkbox-labeled>\n</div>\n<button\n    tuiButton\n    size=\"s\"\n    appearance=\"material-button\"\n>\n    Submit\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Parent zone: {{ parentActive }}</p>\n<p>Child zone: {{ childActive }}</p>\n<p>\n    <input placeholder=\"input outside a zone\" />\n</p>\n<div\n    #parent=\"tuiActiveZone\"\n    class=\"active-zone\"\n    [class.active-zone_active]=\"parentActive\"\n    (tuiActiveZoneChange)=\"onParentActiveZone($event)\"\n>\n    <h2>Parent zone</h2>\n    <button\n        tuiButton\n        type=\"button\"\n    >\n        A button inside zone\n    </button>\n</div>\n<p>\n    <button>A button outside of zone</button>\n</p>\n<div\n    class=\"active-zone\"\n    [class.active-zone_active]=\"childActive\"\n    [tuiActiveZoneParent]=\"parent\"\n    (tuiActiveZoneChange)=\"onChildActiveZone($event)\"\n>\n    <h2>Child zone</h2>\n    <tui-input #input>Input inside zone</tui-input>\n    <p i18n>\n        You can bind different elements with\n        <code>[tuiActiveZoneParent]</code>\n        directive\n    </p>\n</div>\n<p>\n    <input placeholder=\"input outside zone\" />\n    <button (click)=\"onClick(input)\">Focus input in zone</button>\n</p>\n<p i18n>Zone keeps active after browser tab change</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/auto-focus/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/auto-focus/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    class=\"tui-space_bottom-5\"\n    (click)=\"onClick()\"\n>\n    Show input\n</button>\n<tui-input\n    *ngIf=\"showInput\"\n    tuiAutoFocus\n    [(ngModel)]=\"model\"\n>\n    Focusable tui-input\n</tui-input>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/copy-processor/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/copy-processor/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-number\n    class=\"tui-space_bottom-2\"\n    [tuiCopyProcessor]=\"numberProcessor\"\n    [(ngModel)]=\"value\"\n>\n    Copy this\n</tui-input-number>\n\n<div [tuiCopyProcessor]=\"textProcessor\">Try copy this text</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/described-by/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/described-by/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiIconButton\n    icon=\"tuiIconTrashLarge\"\n    size=\"m\"\n    shape=\"rounded\"\n    appearance=\"secondary\"\n    tuiDescribedBy=\"uniqId\"\n    tuiHint=\"Delete\"\n    tuiHintId=\"uniqId\"\n></button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/1/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/1/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Make right click on this icon ->\n    <tui-svg\n        src=\"tuiIconSettingsLarge\"\n        class=\"icon\"\n        [tuiDropdownContext]=\"iconInfo\"\n    ></tui-svg>\n</p>\n\n<ng-template #iconInfo>\n    <p class=\"text\">Nothing special</p>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-controller/examples/1/index.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-controller/examples/1/index.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Works as with\n    <a\n        tuiLink\n        routerLink=\"/components/hosted-dropdown\"\n        target=\"_blank\"\n    >\n        TuiHostedDropdown\n    </a>\n    :\n</p>\n\n<tui-hosted-dropdown\n    tuiDropdownDirection=\"top\"\n    [open]=\"open\"\n    [content]=\"dropdown\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n        (click)=\"onClick()\"\n    >\n        Press it\n    </button>\n</tui-hosted-dropdown>\n\n<ng-template #dropdown>\n    <div class=\"dropdown\">Hello!</div>\n</ng-template>\n\n<p>As with Taiga UI inputs that have dropdown:</p>\n\n<tui-input-date\n    tuiDropdownLimitAlign=\"right\"\n    class=\"input\"\n>\n    Choose a day\n</tui-input-date>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/1/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/1/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Dropdown will be shown text selection:\n<p\n    tuiDropdownSelection\n    tuiDropdownSelectionPosition=\"selection\"\n    tuiDropdownContent=\"&nbsp;&nbsp;Dropdown text&nbsp;&nbsp;\"\n>\n    Select a text to see dropdown\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/1/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/1/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span (tuiActiveZoneChange)=\"onActiveZone($event)\">\n    <button\n        tuiButton\n        type=\"button\"\n        iconRight=\"tuiIconChevronDown\"\n        [tuiDropdownContent]=\"dropdownContent\"\n        [tuiDropdown]=\"open\"\n        (tuiObscured)=\"onObscured($event)\"\n        (click)=\"onClick()\"\n    >\n        Choose\n    </button>\n    <ng-template #dropdownContent>\n        <div class=\"dropdown\">But there is nothing to choose...</div>\n    </ng-template>\n</span>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/1/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/1/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-scrollbar class=\"scrollbar\">\n    <p>I never wanted to do this in the first place!</p>\n    <header\n        tuiElasticSticky\n        class=\"header\"\n    >\n        <div class=\"wrapper\">\n            <tui-money\n                class=\"money\"\n                [style.fontSize.em]=\"scale$ | async\"\n                [value]=\"237000\"\n            ></tui-money>\n        </div>\n    </header>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n</tui-scrollbar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/element/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/element/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    #component\n    tuiButton\n    type=\"button\"\n    class=\"tui-space_right-3\"\n>\n    component\n</button>\n<button\n    #element=\"elementRef\"\n    tuiButton\n    type=\"button\"\n    tuiElement\n    class=\"tui-space_right-3\"\n>\n    element\n</button>\n<p>component instanceof TuiButtonComponent: {{ isButton(component) }}</p>\n<p>element instanceof ElementRef: {{ isElement(element) }}</p>\n<button\n    tuiButton\n    type=\"button\"\n    (click)=\"element.nativeElement.focus()\"\n>\n    Focus element\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/for/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/for/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <button\n        tuiButton\n        (click)=\"refresh()\"\n    >\n        Refresh\n    </button>\n</p>\n<div *ngFor=\"let item of items$ | async; else: loading; empty: blank\">\n    {{ item }}\n</div>\n<ng-template #loading>\n    <tui-loader></tui-loader>\n</ng-template>\n<ng-template #blank>Data is not available</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/highlight/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/highlight/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input\n    icon=\"tuiIconSearchLarge\"\n    [(ngModel)]=\"search\"\n>\n    Search\n</tui-input>\n<table class=\"tui-space_top-4\">\n    <thead>\n        <tr>\n            <th>Member</th>\n            <th>Nickname</th>\n            <th>Fate</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let row of rows\">\n            <td\n                *ngFor=\"let cell of row\"\n                [tuiHighlight]=\"search\"\n                [tuiHighlightColor]=\"'#228B22'\"\n            >\n                {{ cell }}\n            </td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint-controller/examples/1/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint-controller/examples/1/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    class=\"wrapper\"\n    [tuiHintContent]=\"text\"\n>\n    <tui-primitive-textfield [(value)]=\"text\">Content</tui-primitive-textfield>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/hint/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-avatar\n    size=\"l\"\n    text=\"❤\"\n    tuiHintMode=\"onDark\"\n    tuiHintDirection=\"right\"\n    [tuiHint]=\"tooltip\"\n    [autoColor]=\"true\"\n    [rounded]=\"true\"\n></tui-avatar>\n<ng-template #tooltip>\n    <div>\n        What is\n        <strong>love</strong>\n        ?\n    </div>\n    <div>Baby don't hurt me</div>\n    <div>Don't hurt me</div>\n    <div>No more...</div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/lazy-loading/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/lazy-loading/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let src of array\">\n    <img\n        height=\"200\"\n        width=\"300\"\n        loading=\"lazy\"\n        alt=\"Random image\"\n        [src]=\"src\"\n    />\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/let/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/let/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *tuiLet=\"timer$ | async as time\">\n    <p>Timer value: {{ time }}</p>\n    <p>\n        It can be used many times:\n        <tui-badge [value]=\"time\"></tui-badge>\n    </p>\n    <p>It subsribed once and async pipe unsubsribes it after component destroy</p>\n</ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/manual-hint/examples/1/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/manual-hint/examples/1/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    [tuiManualHint]=\"template\"\n    [tuiManualHintShow]=\"hintShown\"\n    (click)=\"toggleHint()\"\n>\n    Hint\n</button>\n\n<ng-template #template>\n    <div tuiMode=\"onDark\">\n        Use\n        <a\n            tuiLink\n            routerLink=\"hint\"\n            class=\"link\"\n        >\n            Hint\n        </a>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<video\n    tuiMedia\n    controls\n    width=\"320\"\n    class=\"video\"\n    [(currentTime)]=\"currentTime\"\n    [(paused)]=\"paused\"\n    [(volume)]=\"volume\"\n>\n    <source\n        *tuiHighDpi\n        src=\"/assets/media/bbb_dpi.ogv\"\n        type=\"video/ogg\"\n    />\n    <source\n        src=\"/assets/media/bbb.mp4\"\n        type=\"video/mp4\"\n    />\n</video>\n<p>currentTime: {{ currentTime }}</p>\n<p>volume: {{ volume }}</p>\n<p>paused: {{ paused }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/mode/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/mode/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    tuiMode=\"onDark\"\n    class=\"dark\"\n>\n    <p>\n        <tui-input [(ngModel)]=\"text\">Text</tui-input>\n    </p>\n    <p>\n        <tui-toggle [(ngModel)]=\"toggle\"></tui-toggle>\n    </p>\n    <p>\n        <tui-input-number [(ngModel)]=\"money\">Sum</tui-input-number>\n    </p>\n    <div\n        class=\"light\"\n        [tuiMode]=\"null\"\n    >\n        <p>\n            <tui-input [(ngModel)]=\"text\">Text</tui-input>\n        </p>\n        <p>\n            <tui-toggle [(ngModel)]=\"toggle\"></tui-toggle>\n        </p>\n        <p>\n            <tui-input-number [(ngModel)]=\"money\">Sum</tui-input-number>\n        </p>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    tuiOverscroll=\"none\"\n    class=\"box\"\n>\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et orci enim. Nam luctus mattis nisi. In\n        congue vitae arcu a volutpat. Nunc lacinia nulla quis eros facilisis convallis. Vivamus scelerisque eros quis\n        ipsum faucibus luctus. Aenean faucibus in turpis sit amet tincidunt. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Aliquam vel imperdiet libero. In hac habitasse platea dictumst.\n    </p>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pan/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pan/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container tui-text_body-l\">\n    <div\n        class=\"circle\"\n        [style.transform]=\"transform$ | async\"\n        (tuiPan)=\"onPan($event)\"\n    ></div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pointer-hint/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/pointer-hint/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island\n    tuiPointerHint=\"Wow! How exciting!\"\n    tuiHintDirection=\"top-left\"\n    class=\"block\"\n>\n    <p>In this block hint follows cursor</p>\n</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/portal/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/portal/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label>\n    <tui-toggle\n        size=\"l\"\n        class=\"tui-space_right-2\"\n        [(ngModel)]=\"show\"\n    ></tui-toggle>\n    Show\n</label>\n\n<div\n    *tuiPortal=\"show\"\n    class=\"portal\"\n>\n    Hey, Joe\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/present/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p\n    i18n\n    (tuiHoveredChange)=\"onHovered($event)\"\n>\n    Hover\n    <span\n        [class.hidden]=\"!hovered\"\n        (tuiPresentChange)=\"onCSS($event)\"\n    >\n        I am a component hidden with CSS\n    </span>\n    <span\n        *ngIf=\"hovered\"\n        (tuiPresentChange)=\"onIf($event)\"\n    >\n        I am a component hidden with *ngIf\n    </span>\n</p>\n<p i18n>Counter of component appearance minus counter of its disappearance:</p>\n<p>\n    CSS:\n    <tui-badge [value]=\"counterCSS\"></tui-badge>\n</p>\n<p>\n    ngIf:\n    <tui-badge [value]=\"counterIf\"></tui-badge>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/ripple/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/ripple/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island\n    tuiRipple=\"radial-gradient(circle, #5c0067 0%, #00d4ff 100%)\"\n    class=\"tui-space_bottom-3\"\n>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n<tui-island\n    tuiRipple=\"skyblue\"\n    class=\"tui-space_bottom-3\"\n>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n<tui-island\n    tuiRipple=\"red\"\n    class=\"tui-space_bottom-3\"\n>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n<tui-island\n    tuiRipple\n    class=\"tui-space_bottom-3\"\n>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n<tui-island\n    tuiRipple=\"blue\"\n    class=\"tui-space_bottom-3\"\n>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    (click)=\"toggle(true)\"\n    (tuiActiveZoneChange)=\"toggle($event)\"\n>\n    Show sidebar\n    <!-- Nest the directive so it is considered the same active zone -->\n    <div *tuiSidebar=\"open; direction: 'right'\">\n        <tui-accordion [rounded]=\"false\">\n            <tui-accordion-item borders=\"top-bottom\">\n                Web APIs for Angular\n                <ng-template tuiAccordionItemContent>\n                    <a\n                        *ngFor=\"let link of webApis\"\n                        tuiLink\n                        target=\"_blank\"\n                        href=\"https://github.com/ng-web-apis/{{ link }}\"\n                        class=\"link\"\n                    >\n                        {{ link }}\n                    </a>\n                </ng-template>\n            </tui-accordion-item>\n            <tui-accordion-item borders=\"top-bottom\">\n                Other libraries\n                <ng-template tuiAccordionItemContent>\n                    <a\n                        *ngFor=\"let link of tinkoff\"\n                        tuiLink\n                        target=\"_blank\"\n                        href=\"https://github.com/tinkoff/{{ link }}\"\n                        class=\"link\"\n                    >\n                        {{ link }}\n                    </a>\n                </ng-template>\n            </tui-accordion-item>\n        </tui-accordion>\n    </div>\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/swipe/examples/1/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/swipe/examples/1/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    class=\"box tui-text_body-l\"\n    [ngClass]=\"swiped\"\n    (tuiSwipe)=\"onSwipe($event)\"\n>\n    Swiped {{ swiped }}\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/textfield-controller/examples/1/index.html":
/*!***************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/textfield-controller/examples/1/index.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Works in several levels-->\n<div\n    class=\"wrapper tui-space_top-3\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    <!-- You can also put directive directly on textfield -->\n    <tui-primitive-textfield tuiTextfieldExampleText=\"Hello\">Cool</tui-primitive-textfield>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/touchable/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/touchable/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island\n    tuiTouchable=\"transform\"\n    class=\"tui-space_bottom-3\"\n>\n    <h1>transform</h1>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n<tui-island\n    tuiTouchable=\"opacity\"\n    class=\"tui-space_bottom-3\"\n>\n    <h1>opacity</h1>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n<tui-island\n    tuiTouchable=\"background\"\n    class=\"tui-space_bottom-3\"\n>\n    <h1>background</h1>\n    I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams\n    glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time\n    to die.\n</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/validator/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/validator/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"group\"\n>\n    <tui-input formControlName=\"name\">Name</tui-input>\n    <tui-select\n        class=\"tui-space_vertical-3\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [(ngModel)]=\"type\"\n    >\n        Connection\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-input\n        *ngIf=\"type === items[0]; else phone\"\n        formControlName=\"contact\"\n        [tuiValidator]=\"validator\"\n    >\n        Contact\n    </tui-input>\n    <ng-template #phone>\n        <tui-input-phone formControlName=\"contact\">Contact</tui-input-phone>\n    </ng-template>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    class=\"t-container\"\n    (tuiZoom)=\"onZoom($event)\"\n>\n    <div\n        class=\"t-zoomable\"\n        [style.transform]=\"transform$ | async\"\n    >\n        <span>{{ scale$ | async | number: '1.0-3' }}</span>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/breakpoints/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <span\n        *ngFor=\"let breakpoint of breakpoints\"\n        class=\"item {{ breakpoint }}\"\n    >\n        @{{ breakpoint }}\n    </span>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/grid/examples/1/index.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/grid/examples/1/index.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Full adaptive layout (3 states)</p>\n<div class=\"tui-container tui-container_adaptive tui-container_example\">\n    <div class=\"tui-row tui-row_adaptive\">\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col_lg-1\">\n            <div class=\"dummy\"></div>\n        </div>\n    </div>\n</div>\n<p>Half-adaptive layout (2 states of desktop)</p>\n<div class=\"tui-container tui-container_example\">\n    <div class=\"tui-row\">\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n        <div class=\"tui-col_1\">\n            <div class=\"dummy dummy_fixed\"></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/1/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/1/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"tui-list tui-list_large\">\n    <li class=\"tui-list__item\">Code Review ($ 10)</li>\n    <li class=\"tui-list__item\">\n        The whole project refactoring ($ 1000)\n        <ul class=\"tui-list tui-list_linear tui-list_nested\">\n            <li class=\"tui-list__item\">Add auto prettier and linters on precommit ($ 50)</li>\n            <li class=\"tui-list__item\">Rewrite to react and back ($ Infinity)</li>\n        </ul>\n    </li>\n    <li class=\"tui-list__item\">\n        Live workshop from\n        <a\n            tuiLink\n            href=\"https://angular.institute/corporate\"\n            target=\"_blank\"\n        >\n            angular.institute\n        </a>\n        ($ 3000)\n        <ol class=\"tui-list tui-list_ordered tui-list_nested\">\n            <li class=\"tui-list__item\">Interactive samples</li>\n            <li class=\"tui-list__item\">Case analysis</li>\n            <li class=\"tui-list__item\">Angular knowledge that keeps on growing</li>\n        </ol>\n    </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"xs\"\n        class=\"tui-space_right-2\"\n        (click)=\"showSkeleton()\"\n    >\n        Show/hide skeleton\n    </button>\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"xs\"\n        (click)=\"toggleLight()\"\n    >\n        Light mode\n    </button>\n</p>\n\n<div\n    class=\"container\"\n    [class.container_dark]=\"lightMode\"\n    [tuiMode]=\"lightMode ? 'onDark' : null\"\n>\n    <div class=\"tui-row\">\n        <div class=\"tui-col_md-4 tui-col_stretch\">\n            <tui-island\n                size=\"l\"\n                class=\"island\"\n                [transparent]=\"true\"\n            >\n                <div class=\"tui-island__content\">\n                    <div class=\"tui-island__figure\">\n                        <form [formGroup]=\"testForm\">\n                            <tui-toggle\n                                size=\"l\"\n                                formControlName=\"testValue\"\n                                [class.tui-skeleton]=\"skeletonVisible\"\n                                [class.tui-skeleton_light]=\"lightMode\"\n                            ></tui-toggle>\n                        </form>\n                    </div>\n                    <div class=\"island-content\">\n                        <p\n                            class=\"tui-island__category\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            A category\n                        </p>\n                        <h3\n                            class=\"tui-island__title\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_text]=\"skeletonVisible\"\n                            [class.tui-skeleton_short]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            {{ skeletonVisible ? '' : 'Title' }}\n                        </h3>\n                        <p\n                            class=\"tui-island__paragraph\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_text]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            {{ skeletonVisible ? '' : placeholder }}\n                        </p>\n                        <p\n                            class=\"tui-island__paragraph tui-island__paragraph_link\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            <a\n                                href=\"https://github.com/tinkoff/taiga-ui\"\n                                target=\"_blank\"\n                                tuiLink\n                            >\n                                Link\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_stretch\">\n            <a\n                size=\"l\"\n                href=\"https://ng-web-apis.github.io/dist/assets/images/web-api.svg\"\n                tuiIsland\n                target=\"_blank\"\n                class=\"island\"\n                [hoverable]=\"true\"\n                [transparent]=\"true\"\n            >\n                <div class=\"tui-island__content\">\n                    <figure class=\"tui-island__figure\">\n                        <div\n                            class=\"some-figure\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_rounded]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        ></div>\n                    </figure>\n                    <div class=\"island-content\">\n                        <h3\n                            class=\"tui-island__title\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_text]=\"skeletonVisible\"\n                            [class.tui-skeleton_short]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            {{ skeletonVisible ? '' : 'Another title' }}\n                        </h3>\n                        <p\n                            class=\"tui-island__paragraph\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_text]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            {{ skeletonVisible ? '' : 'And some new text again' }}\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_stretch\">\n            <tui-island\n                size=\"l\"\n                textAlign=\"center\"\n                class=\"island\"\n                [transparent]=\"true\"\n            >\n                <div class=\"tui-island__content\">\n                    <figure class=\"tui-island__figure\">\n                        <div\n                            class=\"some-figure\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_rounded]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        ></div>\n                    </figure>\n                    <div class=\"island-content\">\n                        <h3\n                            class=\"tui-island__title\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_text]=\"skeletonVisible\"\n                            [class.tui-skeleton_center]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            {{ skeletonVisible ? '' : 'One more title' }}\n                        </h3>\n                        <p\n                            class=\"tui-island__paragraph\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_text]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            {{ skeletonVisible ? '' : 'All right, I get it' }}\n                        </p>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/1/index.html":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/1/index.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2\n    i18n\n    class=\"title\"\n>\n    Margin top\n    <code>tui-space_top-&lt;value&gt;</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example tui-space_top-1 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_top-1\">tui-space_top-1</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_top-2 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_top-2\">tui-space_top-2</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_top-3 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_top-3\">tui-space_top-3</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_top-4 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_top-4\">tui-space_top-4</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_top-5 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_top-5\">tui-space_top-5</tui-doc-copy>\n    </div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Margin bottom\n    <code>tui-space_bottom-&lt;value&gt;</code>\n</h2>\n<div class=\"row row_align-items_bottom\">\n    <div class=\"example tui-space_bottom-1 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_bottom-1\">tui-space_bottom-1</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_bottom-2 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_bottom-2\">tui-space_bottom-2</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_bottom-3 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_bottom-3\">tui-space_bottom-3</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_bottom-4 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_bottom-4\">tui-space_bottom-4</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_bottom-5 tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_bottom-5\">tui-space_bottom-5</tui-doc-copy>\n    </div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Margin right\n    <code>tui-space_right-&lt;value&gt;</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example tui-space_right-1\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_right-1\">tui-space_right-1</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_right-2\">tui-space_right-2</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_right-3\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_right-3\">tui-space_right-3</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_right-4\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_right-4\">tui-space_right-4</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_right-5\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_right-5\">tui-space_right-5</tui-doc-copy>\n    </div>\n    <div class=\"example\"></div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Margin left\n    <code>tui-space_left-&lt;value&gt;</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example\"></div>\n    <div class=\"example tui-space_left-1\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_left-1\">tui-space_left-1</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_left-2\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_left-2\">tui-space_left-2</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_left-3\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_left-3\">tui-space_left-3</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_left-4\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_left-4\">tui-space_left-4</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_left-5\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_left-5\">tui-space_left-5</tui-doc-copy>\n    </div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Vertical and horizontal margins\n    <code>tui-space_vertical-&lt;value&gt;</code>\n    and\n    <code>tui-space_horizontal-&lt;value&gt;</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example tui-space_vertical-4\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_vertical-4\">tui-space_vertical-4</tui-doc-copy>\n    </div>\n    <div class=\"example tui-space_horizontal-4\">\n        <tui-doc-copy cdkCopyToClipboard=\"tui-space_horizontal-4\">tui-space_horizontal-4</tui-doc-copy>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/tables/examples/1/index.html":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/tables/examples/1/index.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"tui-table\">\n    <tbody>\n        <tr class=\"tui-table__tr tui-table__tr_border_none\">\n            <th class=\"tui-table__th tui-table__th_first\">\n                <tui-checkbox [formControl]=\"testValue\"></tui-checkbox>\n            </th>\n            <th class=\"tui-table__th\">Title</th>\n            <th class=\"tui-table__th\">Author</th>\n            <th class=\"tui-table__th\">Date</th>\n            <th class=\"tui-table__th tui-table__th_last\">Platform</th>\n        </tr>\n        <tr class=\"tui-table__tr tui-table__tr_border_none\">\n            <td class=\"tui-table__td tui-table__td_first\"></td>\n            <td class=\"tui-table__td\">How to cook RxJS in an Angular app</td>\n            <td class=\"tui-table__td\">Roman Sedov</td>\n            <td class=\"tui-table__td\">20.06.2020</td>\n            <td class=\"tui-table__td tui-table__td_last\">angular.institute</td>\n        </tr>\n        <tr class=\"tui-table__tr tui-table__tr_border_none\">\n            <td class=\"tui-table__td tui-table__td_first\"></td>\n            <td class=\"tui-table__td\">Taking down the Emperor: Declarative approach</td>\n            <td class=\"tui-table__td\">Alex Inkin</td>\n            <td class=\"tui-table__td\">26.08.2020</td>\n            <td class=\"tui-table__td tui-table__td_last\">angular.institute</td>\n        </tr>\n        <tr class=\"tui-table__tr tui-table__tr_border_none\">\n            <td class=\"tui-table__td tui-table__td_first\"></td>\n            <td class=\"tui-table__td\">The 10 best Angular tips selected by the community</td>\n            <td class=\"tui-table__td\">Roman Sedov</td>\n            <td class=\"tui-table__td\">28.07.2020</td>\n            <td class=\"tui-table__td tui-table__td_last\">indepth.dev</td>\n        </tr>\n        <tr class=\"tui-table__tr tui-table__tr_border_none\">\n            <td class=\"tui-table__td tui-table__td_first\"></td>\n            <td class=\"tui-table__td\">Agnostic components in Angular</td>\n            <td class=\"tui-table__td\">Alex Inkin</td>\n            <td class=\"tui-table__td\">05.08.2020</td>\n            <td class=\"tui-table__td tui-table__td_last\">indepth.dev</td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        i18n-label\n        tuiLabel\n        label=\"Type the ultimate answer\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-error\n            formControlName=\"testValue2\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Set a password\"\n    >\n        <tui-input\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-error\n            formControlName=\"testValue1\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to type something, subscribe on form value\n        changes and call markAsTouched on control on first value change\n    </p>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter-by-input/examples/1/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter-by-input/examples/1/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"form\"\n>\n    <tui-input formControlName=\"user\">\n        User\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items | tuiFilterByInput\"\n        ></tui-data-list-wrapper>\n    </tui-input>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-date/examples/1/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-date/examples/1/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Page refreshed {{ now | tuiFormatDate | async }} ago\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-number/examples/1/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-number/examples/1/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Formatted number by default: {{ 10500.33 | tuiFormatNumber }}</p>\n\n<p>Formatted number with custom params: {{ 10500.33 | tuiFormatNumber: 4:'.' }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-phone/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-phone/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Formatted number by default: {{ phone | tuiFormatPhone }}</p>\n\n<p>\n    Formatted number with custom params:\n    {{ phone | tuiFormatPhone: undefined:'###-###-##-##' }}\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify-content/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify-content/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-combo-box\n    class=\"b-form\"\n    [stringify]=\"stringify\"\n    [(ngModel)]=\"value\"\n>\n    Pick your guy\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items | tuiFilterByInputWith: stringify\"\n        [itemContent]=\"stringify | tuiStringifyContent\"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/stringify/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-combo-box\n    class=\"b-form\"\n    [stringify]=\"'name' | tuiStringify\"\n    [(ngModel)]=\"value\"\n>\n    Pick your guy\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items | tuiFilterByInputWith: ('name' | tuiStringify)\"\n        [itemContent]=\"'name' | tuiStringify | tuiStringifyContent\"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showNotification()\"\n>\n    Show\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/scroll/examples/1/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/scroll/examples/1/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n    <tui-input-count\n        class=\"element\"\n        [(ngModel)]=\"scrollTop\"\n    >\n        scrollTop\n    </tui-input-count>\n    <tui-input-count\n        class=\"element\"\n        [(ngModel)]=\"scrollLeft\"\n    >\n        scrollLeft\n    </tui-input-count>\n    <tui-input-count\n        class=\"element\"\n        [(ngModel)]=\"duration\"\n    >\n        duration\n    </tui-input-count>\n    <button\n        tuiButton\n        type=\"button\"\n        class=\"element\"\n        (click)=\"onClick(scrollRef)\"\n    >\n        Go!\n    </button>\n</div>\n<tui-scrollbar\n    #scrollRef=\"elementRef\"\n    tuiElement\n    class=\"scrollbar\"\n>\n    <div class=\"wrapper\">\n        <p>\n            Monty Python (also collectively known as the Pythons) were a British surreal comedy group who created their\n            sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes\n            were made over four series. The Python phenomenon developed from the television series into something larger\n            in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The\n            Pythons' influence on comedy has been compared to the Beatles' influence on music. Their sketch show has\n            been referred to as \"not only one of the more enduring icons of 1970s British popular culture, but also an\n            important moment in the evolution of television comedy\".\n        </p>\n        <p>\n            Broadcast by the BBC between 1969 and 1974, Monty Python's Flying Circus was conceived, written, and\n            performed by its members Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael\n            Palin. Loosely structured as a sketch show, but with an innovative stream-of-consciousness approach, aided\n            by Gilliam's animation, it pushed the boundaries of what was acceptable in style and content. A\n            self-contained comedy team responsible for both writing and performing their work, the Pythons had creative\n            control which allowed them to experiment with form and content, discarding rules of television comedy.\n            Following their television work, they began making films, which include Monty Python and the Holy Grail\n            (1975), Life of Brian (1979) and The Meaning of Life (1983). Their influence on British comedy has been\n            apparent for years, while in North America, it has coloured the work of cult performers from the early\n            editions of Saturday Night Live through to more recent absurdist trends in television comedy. \"Pythonesque\"\n            has entered the English lexicon as a result.\n        </p>\n        <p>\n            In a 2005 poll of over 300 comics, comedy writers, producers and directors throughout the English-speaking\n            world to find \"The Comedian's Comedian\", three of the six Pythons members were voted to be among the top 50\n            greatest comedians ever: Cleese at No. 2, Idle at No. 21, and Palin at No. 30.\n        </p>\n    </div>\n</tui-scrollbar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/1/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/table-bar/examples/1/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showTableBar()\"\n>\n    Show TableBar\n</button>\n\n<ng-template\n    #tableBarTemplate\n    let-close\n>\n    <div\n        tuiMode=\"onDark\"\n        class=\"content\"\n    >\n        <button\n            tuiButton\n            type=\"button\"\n            size=\"m\"\n        >\n            Save\n        </button>\n        <button\n            tuiButton\n            type=\"button\"\n            appearance=\"flat\"\n            size=\"m\"\n            class=\"tui-space_left-3\"\n            (click)=\"close()\"\n        >\n            Cancel\n        </button>\n        <button\n            tuiButton\n            type=\"button\"\n            appearance=\"outline\"\n            size=\"m\"\n            icon=\"tuiIconTrashLarge\"\n            class=\"delete-button\"\n        >\n            Delete\n        </button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/reorder/examples/1/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/reorder/examples/1/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-reorder\n    class=\"list\"\n    [(items)]=\"items\"\n    [(enabled)]=\"enabled\"\n></tui-reorder>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/resizable-column/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/resizable-column/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n    <thead>\n        <tr>\n            <th tuiResizableColumn>Member</th>\n            <th tuiResizableColumn>Nickname</th>\n            <th tuiResizableColumn>Fate</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let row of rows\">\n            <td *ngFor=\"let cell of row\">{{ cell }}</td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/1/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-filters/examples/1/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container tuiTableFilters>\n    <form\n        class=\"form\"\n        [formGroup]=\"form\"\n    >\n        <tui-input-number\n            tuiTableFilter=\"balance\"\n            formControlName=\"balance\"\n            class=\"control\"\n            [tuiGenericFilter]=\"filter\"\n        >\n            Minimal balance\n        </tui-input-number>\n        <label>\n            <tui-toggle\n                [ngModelOptions]=\"{standalone: true}\"\n                [ngModel]=\"form.enabled\"\n                (ngModelChange)=\"onToggle($event)\"\n            ></tui-toggle>\n            Enable filtering\n        </label>\n    </form>\n    <table\n        tuiTable\n        class=\"table\"\n        [columns]=\"columns\"\n    >\n        <thead>\n            <tr tuiThGroup>\n                <th tuiTh>Name</th>\n                <th tuiTh>Balance</th>\n            </tr>\n        </thead>\n        <tbody tuiTbody>\n            <tr\n                *ngFor=\"let item of data | tuiTableFilters | async\"\n                tuiTr\n            >\n                <td\n                    *tuiCell=\"'name'\"\n                    tuiTd\n                >\n                    {{ item.name }}\n                </td>\n                <td\n                    *tuiCell=\"'balance'\"\n                    tuiTd\n                >\n                    {{ item.balance | tuiFormatNumber }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/1/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/1/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-table-pagination\n    [total]=\"237\"\n    [(page)]=\"page\"\n    [(size)]=\"size\"\n></tui-table-pagination>\n<p>Current page: {{ page }}</p>\n<p>Items per page: {{ size }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/1/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/1/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table\n    tuiTable\n    class=\"table\"\n    [columns]=\"columns\"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                tuiTh\n                [resizable]=\"true\"\n            >\n                Name\n            </th>\n            <th tuiTh>Balance</th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]=\"data\"\n    >\n        <tr\n            *tuiRow=\"let item of data\"\n            tuiTr\n        >\n            <td\n                *tuiCell=\"'balance'\"\n                tuiTd\n            >\n                {{ item.balance | tuiFormatNumber }}\n            </td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/browser/examples/1/index.html":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/browser/examples/1/index.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label>Your browser is:</label>\n\n<p>{{ aboutMyBrowser }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/1/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/1/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("'{{ px }}' = px(value);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input-number\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input-number>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/1/index.html":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/1/index.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ rounded }} = round(value, precision);</p>\n<p>{{ floored }} = floor(value, precision);</p>\n<p>{{ ceiled }} = ceil(value, precision);</p>\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input-number\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n            [precision]=\"3\"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number\n            formControlName=\"precision\"\n            class=\"tui-space_top-2\"\n        >\n            precision\n        </tui-input-number>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/1/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/1/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ assertResult }}</p>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-index-html.js.map