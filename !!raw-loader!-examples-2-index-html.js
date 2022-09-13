(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/arc-chart/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/arc-chart/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-arc-chart\n        size=\"l\"\n        [value]=\"[40]\"\n    ></tui-arc-chart>\n    <tui-arc-chart\n        size=\"l\"\n        minLabel=\"\"\n        maxLabel=\"\"\n        class=\"stacked\"\n        [value]=\"[20]\"\n    >\n        +20%\n        <div>For filling in last name</div>\n    </tui-arc-chart>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    axisY=\"none\"\n    class=\"axes\"\n    [axisXLabels]=\"axisXLabels\"\n    [axisYSecondaryLabels]=\"axisYSecondaryLabels\"\n    [horizontalLines]=\"2\"\n    [verticalLines]=\"4\"\n    [horizontalLinesHandler]=\"horizontalLinesHandler\"\n    [verticalLinesHandler]=\"verticalLinesHandler\"\n>\n    <tui-bar-chart\n        class=\"chart\"\n        [value]=\"value\"\n        [hintContent]=\"hint\"\n    ></tui-bar-chart>\n</tui-axes>\n\n<ng-template\n    #hint\n    let-setIndex\n>\n    <p\n        *ngFor=\"let item of value; let index = index\"\n        class=\"hint\"\n    >\n        <span\n            class=\"dot\"\n            [style.background]=\"getBackground(index)\"\n        ></span>\n        <span class=\"name\">{{ getSetName(index) }}</span>\n        <tui-money\n            [singleColor]=\"true\"\n            [value]=\"item[setIndex] * 1000\"\n        ></tui-money>\n    </p>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n    <tui-axes\n        class=\"axes\"\n        [axisXLabels]=\"labelsX\"\n        [axisYLabels]=\"labelsY\"\n    >\n        <tui-bar-chart\n            [max]=\"10000\"\n            [value]=\"value\"\n        ></tui-bar-chart>\n    </tui-axes>\n\n    <tui-axes\n        class=\"axes\"\n        [axisXLabels]=\"labelsX\"\n        [axisYLabels]=\"labelsY\"\n    >\n        <tui-bar-chart\n            [max]=\"10000\"\n            [value]=\"value\"\n            [collapsed]=\"true\"\n        ></tui-bar-chart>\n    </tui-axes>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-bar-set\n    size=\"m\"\n    class=\"bars\"\n    [value]=\"value\"\n></tui-bar-set>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.html":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar/examples/2/index.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-bar\n    size=\"s\"\n    class=\"bar\"\n    [value]=\"value\"\n></tui-bar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/legend-item/examples/2/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/legend-item/examples/2/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-notification>\n    In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it\n    for more details\n</tui-notification>\n\n<div class=\"wrapper\">\n    <tui-ring-chart\n        size=\"s\"\n        class=\"chart\"\n        [value]=\"value\"\n    ></tui-ring-chart>\n\n    <div class=\"legend\">\n        <tui-legend-item\n            *ngFor=\"let label of labels; let index = index\"\n            #item\n            class=\"item\"\n            [color]=\"getColor(index)\"\n            [text]=\"label\"\n            [disabled]=\"!isEnabled(index)\"\n            (click)=\"onClick(index)\"\n            (keydown.delete)=\"toggle(index)\"\n        >\n            <tui-primitive-checkbox [value]=\"!item.disabled\"></tui-primitive-checkbox>\n            <tui-money\n                [singleColor]=\"true\"\n                [value]=\"data[index]\"\n            ></tui-money>\n            <tui-svg\n                src=\"tuiIconCloseLarge\"\n                class=\"disable\"\n                [class.disable_rotated]=\"item.disabled\"\n                (click.stop)=\"toggle(index)\"\n            ></tui-svg>\n        </tui-legend-item>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    class=\"axes\"\n    [verticalLines]=\"4\"\n    [horizontalLines]=\"2\"\n>\n    <tui-line-chart\n        [x]=\"0\"\n        [y]=\"0\"\n        [width]=\"400\"\n        [height]=\"200\"\n        [smoothingFactor]=\"50\"\n        [value]=\"value\"\n        [filled]=\"true\"\n    ></tui-line-chart>\n</tui-axes>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-notification i18n>\n    <code>TuiLineDaysChart</code>\n    is used to show data of several months to simplify working with different number of days in months\n</tui-notification>\n<p class=\"controls\">\n    <tui-input-date-range\n        class=\"b-form\"\n        [maxLength]=\"maxLength\"\n        [(ngModel)]=\"data\"\n        (ngModelChange)=\"onDataChange($event)\"\n    >\n        Data\n    </tui-input-date-range>\n    <tui-input-date-range\n        class=\"b-form tui-space_left-4\"\n        [maxLength]=\"maxLength\"\n        [(ngModel)]=\"show\"\n    >\n        Visible range\n    </tui-input-date-range>\n</p>\n<p class=\"legend\">\n    <span\n        *ngFor=\"let chart of days; let index = index\"\n        class=\"item\"\n    >\n        <small class=\"name\">Chart {{ index + 1 }}</small>\n    </span>\n</p>\n<tui-axes\n    *ngIf=\"show | labels | async as labels\"\n    class=\"axes\"\n    [verticalLines]=\"labels.length\"\n    [horizontalLines]=\"4\"\n    [axisXLabels]=\"labels\"\n    [tuiLineChartHint]=\"hint\"\n>\n    <ng-container *ngIf=\"getWidth(show) > 90; else line\">\n        <tui-line-days-chart\n            *ngFor=\"let chart of days\"\n            class=\"chart\"\n            [height]=\"200\"\n            [value]=\"chart | tuiFilter: filter:range\"\n        ></tui-line-days-chart>\n    </ng-container>\n    <ng-template #line>\n        <tui-line-chart\n            *ngFor=\"let chart of days\"\n            class=\"chart\"\n            [height]=\"200\"\n            [width]=\"getWidth(range)\"\n            [value]=\"chart | tuiFilter: filter:range | tuiMapper: toNumbers:range\"\n        ></tui-line-chart>\n    </ng-template>\n</tui-axes>\n\n<ng-template\n    #hint\n    let-data\n>\n    <div class=\"tui-space_bottom-2\">\n        <strong>{{ getDate(data[0][0], range.from) }}</strong>\n    </div>\n    <div>\n        <div\n            *ngFor=\"let point of data\"\n            class=\"item\"\n        >\n            <span class=\"value\">${{ point[1].toFixed(0) }}</span>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/pie-chart/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/pie-chart/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-pie-chart\n    [value]=\"value\"\n    [hintContent]=\"content\"\n></tui-pie-chart>\n\n<ng-template\n    #content\n    let-index\n>\n    <tui-money\n        [singleColor]=\"true\"\n        [value]=\"value[index]\"\n    ></tui-money>\n    <div>{{ labels[index] }}</div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/ring-chart/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/ring-chart/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-ring-chart\n    [value]=\"value\"\n    [(activeItemIndex)]=\"index\"\n>\n    <tui-money [value]=\"sum\"></tui-money>\n    <div>{{ label }}</div>\n</tui-ring-chart>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-accordion\n    *ngIf=\"svgIcons.rubles | async as lazySvg\"\n    class=\"container\"\n    [rounded]=\"false\"\n>\n    <tui-accordion-item\n        borders=\"top-bottom\"\n        [showArrow]=\"false\"\n    >\n        <div class=\"operation-header\">\n            <div class=\"operation-date\">\n                4\n                <div class=\"operation-month\">May</div>\n            </div>\n            <div class=\"operation-pic\">\n                <tui-svg\n                    class=\"operation-icon\"\n                    [src]=\"lazySvg?.default || ''\"\n                ></tui-svg>\n            </div>\n            <div class=\"operation-title\">Get your money</div>\n            <div class=\"operation-info\">\n                <tui-money\n                    class=\"operation-amount\"\n                    [value]=\"23000\"\n                ></tui-money>\n                <div class=\"operation-status\">Waiting for approve</div>\n            </div>\n        </div>\n        <ng-template tuiAccordionItemContent>\n            <h3 class=\"form-title\">Payment form</h3>\n            <form\n                class=\"operation-form\"\n                [formGroup]=\"testForm\"\n            >\n                <tui-input\n                    tuiTextfieldExampleText=\"Roman Sedov\"\n                    formControlName=\"name\"\n                    class=\"input\"\n                >\n                    Your name\n                </tui-input>\n                <tui-select\n                    formControlName=\"accounts\"\n                    class=\"input\"\n                >\n                    Choose an account\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        [items]=\"accounts\"\n                    ></tui-data-list-wrapper>\n                </tui-select>\n                <div class=\"buttons\">\n                    <button\n                        tuiButton\n                        type=\"submit\"\n                        size=\"l\"\n                        class=\"tui-space_right-2\"\n                    >\n                        Send\n                    </button>\n                    <button\n                        tuiButton\n                        type=\"button\"\n                        appearance=\"flat\"\n                        size=\"l\"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </form>\n        </ng-template>\n    </tui-accordion-item>\n    <tui-accordion-item\n        borders=\"top-bottom\"\n        [showArrow]=\"false\"\n    >\n        <div class=\"operation-header\">\n            <div class=\"operation-date\">\n                5\n                <div class=\"operation-month\">May</div>\n            </div>\n            <div class=\"operation-pic\">\n                <tui-svg\n                    class=\"operation-icon\"\n                    [src]=\"lazySvg?.default || ''\"\n                ></tui-svg>\n            </div>\n            <div class=\"operation-title\">Get your money back</div>\n            <div class=\"operation-info\">\n                <tui-money\n                    class=\"operation-amount\"\n                    [value]=\"23000\"\n                ></tui-money>\n                <div class=\"operation-status operation-status_success\">Approved</div>\n            </div>\n        </div>\n        <ng-template tuiAccordionItemContent>\n            <h3 class=\"form-title\">Payment form</h3>\n            <form\n                class=\"operation-form\"\n                [formGroup]=\"testForm\"\n            >\n                <tui-input\n                    tuiTextfieldExampleText=\"Roman Sedov\"\n                    formControlName=\"name\"\n                    class=\"input\"\n                >\n                    Your name\n                </tui-input>\n                <tui-select\n                    formControlName=\"accounts\"\n                    class=\"input\"\n                >\n                    Choose an account\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        [items]=\"accounts\"\n                    ></tui-data-list-wrapper>\n                </tui-select>\n                <div class=\"buttons\">\n                    <button\n                        tuiButton\n                        type=\"submit\"\n                        size=\"l\"\n                        class=\"tui-space_right-2\"\n                    >\n                        Send\n                    </button>\n                    <button\n                        tuiButton\n                        type=\"button\"\n                        appearance=\"flat\"\n                        size=\"l\"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </form>\n        </ng-template>\n    </tui-accordion-item>\n    <tui-accordion-item\n        borders=\"top-bottom\"\n        [showArrow]=\"false\"\n    >\n        <div class=\"operation-header\">\n            <div class=\"operation-date\">\n                6\n                <div class=\"operation-month\">May</div>\n            </div>\n            <div class=\"operation-pic\">\n                <tui-svg\n                    class=\"operation-icon\"\n                    [src]=\"lazySvg?.default || ''\"\n                ></tui-svg>\n            </div>\n            <div class=\"operation-title\">Get your neighbor's money</div>\n            <div class=\"operation-info\">\n                <tui-money\n                    class=\"operation-amount\"\n                    [value]=\"23000\"\n                ></tui-money>\n                <div class=\"operation-status operation-status_error\">Declined</div>\n            </div>\n        </div>\n        <ng-template tuiAccordionItemContent>\n            <h3 class=\"form-title\">Payment form</h3>\n            <form\n                class=\"operation-form\"\n                [formGroup]=\"testForm\"\n            >\n                <tui-input\n                    tuiTextfieldExampleText=\"Roman Sedov\"\n                    formControlName=\"name\"\n                    class=\"input\"\n                >\n                    Your name\n                </tui-input>\n                <tui-select\n                    formControlName=\"accounts\"\n                    class=\"input\"\n                >\n                    Choose an account\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        [items]=\"accounts\"\n                    ></tui-data-list-wrapper>\n                </tui-select>\n                <div class=\"buttons\">\n                    <button\n                        tuiButton\n                        type=\"submit\"\n                        size=\"l\"\n                        class=\"tui-space_right-2\"\n                    >\n                        Send\n                    </button>\n                    <button\n                        tuiButton\n                        type=\"button\"\n                        appearance=\"flat\"\n                        size=\"l\"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </form>\n        </ng-template>\n    </tui-accordion-item>\n</tui-accordion>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/action/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n    tuiAction\n    icon=\"tuiIconImgLarge\"\n    target=\"_blank\"\n    href=\"http://www.montypython.com/\"\n>\n    It's\n</a>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-avatar\n    text=\"yuliya tsareva\"\n    class=\"tui-space_top-1\"\n    [autoColor]=\"true\"\n></tui-avatar>\n<tui-avatar\n    text=\"alex inkin\"\n    class=\"tui-space_top-1\"\n    [autoColor]=\"true\"\n></tui-avatar>\n<tui-avatar\n    text=\"dmitry demensky\"\n    class=\"tui-space_top-1\"\n    [autoColor]=\"true\"\n></tui-avatar>\n<tui-avatar\n    text=\"evgeniy mamaev\"\n    class=\"custom tui-space_top-1\"\n></tui-avatar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-badge\n    size=\"xs\"\n    value=\"Badge\"\n    class=\"tui-space_right-2\"\n    [hoverable]=\"true\"\n></tui-badge>\n<tui-badge\n    size=\"s\"\n    value=\"Badge\"\n    class=\"tui-space_right-2\"\n    [hoverable]=\"true\"\n></tui-badge>\n<tui-badge\n    size=\"m\"\n    value=\"Badge\"\n    class=\"tui-space_right-2\"\n    [hoverable]=\"true\"\n></tui-badge>\n<tui-badge\n    size=\"l\"\n    value=\"Badge\"\n    [hoverable]=\"true\"\n></tui-badge>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/2/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/2/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-badged-content\n    colorTop=\"var(--tui-support-01)\"\n    [contentTop]=\"badgeValue\"\n>\n    <tui-input\n        class=\"b-form\"\n        [(ngModel)]=\"value\"\n    >\n        Input text\n    </tui-input>\n</tui-badged-content>\n\n<div class=\"tui-space_top-5\">\n    <tui-badged-content\n        [contentTop]=\"contentTop\"\n        [contentBottom]=\"contentTop === 50 ? customBadge : ''\"\n        [colorTop]=\"color\"\n    >\n        <button\n            tuiButton\n            type=\"button\"\n            appearance=\"secondary\"\n            size=\"xl\"\n            [disabled]=\"contentTop === 50\"\n            (click)=\"onClick()\"\n        >\n            Let's click 50 times ...\n        </button>\n    </tui-badged-content>\n\n    <ng-template #customBadge>\n        <div class=\"template\">... and nothing happened</div>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    appearance=\"primary\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n>\n    primary\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    appearance=\"secondary\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n>\n    secondary\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    appearance=\"secondary-destructive\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n>\n    secondary-destructive\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    appearance=\"accent\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n>\n    accent\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    appearance=\"flat\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n>\n    flat\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    appearance=\"outline\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n>\n    outline\n</button>\n<button\n    tuiIconButton\n    type=\"button\"\n    appearance=\"icon\"\n    icon=\"tuiIconCloseLarge\"\n    class=\"tui-space_right-3 tui-space_bottom-3\"\n></button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-month/examples/2/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-month/examples/2/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-calendar-month\n    [value]=\"value\"\n    [min]=\"min\"\n    [max]=\"max\"\n    (monthClick)=\"onMonthClick($event)\"\n></tui-calendar-month>\n<p>Selected range: {{ value }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/2/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/2/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-calendar-range></tui-calendar-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/2/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/2/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-calendar\n        [value]=\"value\"\n        [showAdjacent]=\"false\"\n        [maxViewedMonth]=\"firstMonth\"\n        [month]=\"firstMonth\"\n        [(hoveredItem)]=\"hoveredItem\"\n        (monthChange)=\"onMonthChangeFirst($event)\"\n        (dayClick)=\"onDayClick($event)\"\n    ></tui-calendar>\n    <tui-calendar\n        [value]=\"value\"\n        [showAdjacent]=\"false\"\n        [month]=\"middleMonth\"\n        [minViewedMonth]=\"middleMonth\"\n        [maxViewedMonth]=\"middleMonth\"\n        [(hoveredItem)]=\"hoveredItem\"\n        (monthChange)=\"onMonthChangeMiddle($event)\"\n        (dayClick)=\"onDayClick($event)\"\n    ></tui-calendar>\n    <tui-calendar\n        [value]=\"value\"\n        [showAdjacent]=\"false\"\n        [minViewedMonth]=\"lastMonth\"\n        [month]=\"lastMonth\"\n        [(hoveredItem)]=\"hoveredItem\"\n        (monthChange)=\"onMonthChangeLast($event)\"\n        (dayClick)=\"onDayClick($event)\"\n    ></tui-calendar>\n</div>\n<div\n    *ngIf=\"value\"\n    i18n\n>\n    Chosen dates: {{ value }}\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-card\n    size=\"s\"\n    cardNumber=\"1234\"\n    paymentSystem=\"visa\"\n    class=\"logo\"\n></tui-card>\n<tui-card\n    cardNumber=\"1234\"\n    paymentSystem=\"visa\"\n    class=\"logo\"\n></tui-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/2/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/2/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-carousel\n    [draggable]=\"true\"\n    [itemsCount]=\"3\"\n    [(index)]=\"index\"\n>\n    <ng-container *ngFor=\"let item of items; let i = index\">\n        <img\n            *tuiItem\n            alt=\"\"\n            draggable=\"false\"\n            src=\"assets/images/{{ item }}\"\n            class=\"item\"\n            [class.item_active]=\"i === index + 1\"\n        />\n    </ng-container>\n</tui-carousel>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/2/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/2/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n    i18n\n    class=\"title\"\n>\n    Horizontal group\n</h3>\n<form\n    class=\"group\"\n    [formGroup]=\"testForm\"\n>\n    <div\n        tuiGroup\n        class=\"group\"\n        [collapsed]=\"true\"\n    >\n        <tui-checkbox-block\n            i18n\n            contentAlign=\"right\"\n            formControlName=\"testValue1\"\n            size=\"l\"\n        >\n            Title\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign=\"right\"\n            formControlName=\"testValue2\"\n            size=\"l\"\n        >\n            Title\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign=\"right\"\n            formControlName=\"testValue3\"\n            size=\"l\"\n        >\n            Title\n        </tui-checkbox-block>\n    </div>\n</form>\n<h3\n    i18n\n    class=\"title\"\n>\n    Vertical group\n</h3>\n<form [formGroup]=\"testForm\">\n    <div\n        tuiGroup\n        orientation=\"vertical\"\n        class=\"group\"\n        [collapsed]=\"true\"\n    >\n        <tui-checkbox-block\n            contentAlign=\"right\"\n            formControlName=\"testValue1\"\n            size=\"l\"\n        >\n            Title\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign=\"right\"\n            formControlName=\"testValue2\"\n            size=\"l\"\n        >\n            Title\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign=\"right\"\n            formControlName=\"testValue3\"\n            size=\"l\"\n        >\n            Title\n        </tui-checkbox-block>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/2/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/2/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-checkbox-labeled\n        i18n\n        formControlName=\"testValue1\"\n        size=\"l\"\n    >\n        An option\n    </tui-checkbox-labeled>\n    <tui-checkbox-labeled\n        i18n\n        formControlName=\"testValue2\"\n        size=\"l\"\n        class=\"tui-space_top-5\"\n    >\n        An alternative one\n    </tui-checkbox-labeled>\n    <tui-checkbox-labeled\n        i18n\n        formControlName=\"testValue3\"\n        size=\"l\"\n        class=\"tui-space_top-5\"\n    >\n        Other\n    </tui-checkbox-labeled>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/2/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/2/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-checkbox\n        formControlName=\"testValue1\"\n        size=\"l\"\n        class=\"tui-space_bottom-3\"\n    ></tui-checkbox>\n\n    <tui-checkbox\n        formControlName=\"testValue2\"\n        size=\"l\"\n        class=\"tui-space_bottom-3\"\n    ></tui-checkbox>\n\n    <tui-checkbox\n        formControlName=\"testValue3\"\n        size=\"l\"\n        class=\"tui-space_bottom-3\"\n    ></tui-checkbox>\n\n    <tui-checkbox\n        formControlName=\"testValue4\"\n        size=\"l\"\n    ></tui-checkbox>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/color-picker/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/color-picker/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    tuiDropdownAlign=\"left\"\n    [content]=\"picker\"\n    [tuiDropdownMaxHeight]=\"999\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n        appearance=\"\"\n        automation-id=\"color-picker__button\"\n        [style.background]=\"background\"\n        [style.color]=\"background\"\n    >\n        <span class=\"invert\">Color me Kubrick</span>\n    </button>\n</tui-hosted-dropdown>\n<ng-template\n    #picker\n    let-activeZone\n>\n    <tui-color-selector\n        [tuiActiveZoneParent]=\"activeZone\"\n        [(color)]=\"color\"\n    ></tui-color-selector>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/2/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-combo-box\n    *tuiLet=\"service.request(search) | async as filtered\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [valueContent]=\"value\"\n    [(search)]=\"search\"\n>\n    Find the best employees\n    <input\n        tuiTextfield\n        placeholder=\"Type a name\"\n    />\n    <ng-template\n        #value\n        let-item\n    >\n        <tui-avatar\n            size=\"xs\"\n            class=\"avatar\"\n            [avatarUrl]=\"item.avatarUrl || null\"\n            [text]=\"item.toString()\"\n        ></tui-avatar>\n        <span class=\"name\">{{ item }}</span>\n    </ng-template>\n    <ng-template tuiDataList>\n        <tui-data-list *ngIf=\"filtered; else loading\">\n            <button\n                *ngFor=\"let item of filtered\"\n                tuiOption\n                [value]=\"item\"\n                [disabled]=\"item.disabled\"\n            >\n                <tui-avatar\n                    size=\"xs\"\n                    class=\"avatar\"\n                    [avatarUrl]=\"item.avatarUrl || null\"\n                    [text]=\"item.toString()\"\n                ></tui-avatar>\n                <span class=\"name\">{{ item }}</span>\n            </button>\n        </tui-data-list>\n        <ng-template #loading>\n            <tui-loader class=\"tui-space_vertical-4\"></tui-loader>\n        </ng-template>\n    </ng-template>\n</tui-combo-box>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/2/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/2/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    #dropdown\n    [content]=\"content\"\n    [(open)]=\"dropdownOpen\"\n>\n    <button\n        tuiIconButton\n        appearance=\"flat\"\n        icon=\"tuiIconMoreVer\"\n        type=\"button\"\n        [pseudoHovered]=\"dropdown.open || null\"\n    ></button>\n</tui-hosted-dropdown>\n<ng-template\n    #content\n    let-activeZone\n>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [tuiActiveZoneParent]=\"activeZone\"\n    >\n        <button\n            *tuiLet=\"'French Fries' as item\"\n            tuiOption\n            [size]=\"size\"\n            (click)=\"selectOption(item)\"\n        >\n            {{ item }}\n        </button>\n        <button\n            tuiOption\n            tuiDropdownAlign=\"right\"\n            [size]=\"size\"\n            [tuiDropdown]=\"false\"\n            [tuiDropdownContent]=\"burgersTmp\"\n            [tuiDropdownSided]=\"true\"\n        >\n            Burgers\n        </button>\n        <button\n            tuiOption\n            tuiDropdownAlign=\"right\"\n            [size]=\"size\"\n            [tuiDropdown]=\"false\"\n            [tuiDropdownContent]=\"drinksTmp\"\n            [tuiDropdownSided]=\"true\"\n        >\n            Drinks\n        </button>\n        <button\n            *tuiLet=\"'Ice Cream' as item\"\n            tuiOption\n            [size]=\"size\"\n            (click)=\"selectOption(item)\"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n    <ng-template #burgersTmp>\n        <tui-data-list\n            tuiDataListDropdownManager\n            [tuiActiveZoneParent]=\"activeZone\"\n        >\n            <button\n                *ngFor=\"let burger of burgers\"\n                tuiOption\n                [size]=\"size\"\n                (click)=\"selectOption(burger)\"\n            >\n                {{ burger }}\n            </button>\n            <button\n                tuiOption\n                tuiDropdownAlign=\"right\"\n                [size]=\"size\"\n                [tuiDropdown]=\"false\"\n                [tuiDropdownContent]=\"drinksTmp\"\n                [tuiDropdownSided]=\"true\"\n            >\n                Nested menu\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #drinksTmp>\n        <tui-data-list>\n            <button\n                *ngFor=\"let drink of drinks\"\n                tuiOption\n                [size]=\"size\"\n                (click)=\"selectOption(drink)\"\n            >\n                {{ drink }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showDialog()\"\n>\n    Show\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-editor\n    new\n    class=\"editor\"\n    [formControl]=\"control\"\n    [tools]=\"builtInTools\"\n></tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]=\"control.value\"></tui-editor-socket>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        label=\"Secret number\"\n    >\n        <tui-input\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        ></tui-input>\n\n        <ng-template #errorContent>\n            Secret number must contain\n            <strong>10 or 12 digits</strong>\n            .\n        </ng-template>\n\n        <tui-field-error\n            formControlName=\"testValue1\"\n            [order]=\"['required', 'inn']\"\n        ></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Enter company name\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-input\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        ></tui-input>\n\n        <ng-template #bigErrorContent>\n            This company is already registered\n            <button\n                tuiButton\n                type=\"button\"\n                class=\"tui-space_top-2\"\n            >\n                It is mine\n            </button>\n        </ng-template>\n\n        <tui-field-error formControlName=\"testValue2\"></tui-field-error>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    <tui-filter\n        formControlName=\"filters\"\n        [identityMatcher]=\"identityMatcher\"\n        [content]=\"content\"\n        [badgeHandler]=\"badgeHandler\"\n        [items]=\"items\"\n    ></tui-filter>\n</form>\n<ng-template\n    #content\n    let-item\n>\n    {{ item.title }}\n</ng-template>\n<div>\n    <pre>Form value: {{ form.value | json }}</pre>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    tuiGroup\n    class=\"group\"\n    [collapsed]=\"true\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n        appearance=\"outline\"\n        size=\"l\"\n    >\n        Button 1\n    </button>\n    <button\n        tuiButton\n        type=\"button\"\n        appearance=\"outline\"\n        size=\"l\"\n    >\n        Button 2\n    </button>\n    <button\n        tuiIconButton\n        type=\"button\"\n        appearance=\"outline\"\n        size=\"l\"\n        title=\"A sample of icon-button in a group\"\n        icon=\"tuiIconChevronDownLarge\"\n        class=\"tui-group__auto-width-item\"\n    ></button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/2/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/2/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    [content]=\"dropdown\"\n    [(open)]=\"open\"\n>\n    <div tuiGroup>\n        <button\n            tuiButton\n            type=\"button\"\n            size=\"l\"\n            class=\"tui-group__auto-width-item\"\n        >\n            Button\n        </button>\n        <button\n            tuiIconButton\n            type=\"button\"\n            tuiHostedDropdownHost\n            title=\"Menu\"\n            size=\"l\"\n            class=\"tui-group__auto-width-item\"\n            [iconRight]=\"icon\"\n        ></button>\n        <ng-template #icon>\n            <tui-svg\n                src=\"tuiIconChevronDown\"\n                class=\"icon\"\n                [class.icon_rotated]=\"open\"\n            ></tui-svg>\n        </ng-template>\n    </div>\n</tui-hosted-dropdown>\n<ng-template\n    #dropdown\n    let-activeZone\n>\n    <p class=\"margin\">\n        There is\n        <code>let-activeZone</code>\n        in dropdown template context to work with nested dropdowns\n    </p>\n    <tui-select\n        class=\"margin\"\n        [tuiActiveZoneParent]=\"activeZone\"\n        [(ngModel)]=\"selected\"\n    >\n        Nested Select\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"selectItems\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-data-list>\n        <button\n            *ngFor=\"let item of items\"\n            tuiOption\n            (click)=\"onClick()\"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/2/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"card\">\n    <tui-input-card-grouped\n        #component\n        formControlName=\"meta\"\n    >\n        <tui-data-list\n            *tuiDataList\n            (keydown.escape)=\"onEsc(component)\"\n        >\n            <button\n                tuiOption\n                size=\"l\"\n                (click)=\"onClick(component)\"\n            >\n                <tui-svg\n                    src=\"tuiIconPlus\"\n                    class=\"new\"\n                ></tui-svg>\n                <span class=\"label\">New card</span>\n            </button>\n            <button\n                *ngFor=\"let item of items; let index = index\"\n                tuiOption\n                size=\"l\"\n                [value]=\"item\"\n            >\n                <tui-card\n                    size=\"s\"\n                    class=\"card\"\n                    [cardNumber]=\"item.card.slice(-4)\"\n                ></tui-card>\n                <label\n                    tuiLabel\n                    class=\"label\"\n                    [label]=\"item.bank\"\n                >\n                    {{ item.name }}\n                </label>\n                <span>{{ item.card.slice(-5) }}</span>\n            </button>\n        </tui-data-list>\n    </tui-input-card-grouped>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Step is 1 by default\"\n    >\n        <tui-input-count\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n            [max]=\"999999\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Step is 100\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-input-count\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [step]=\"100\"\n            [max]=\"999999\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        ></tui-input-count>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/2/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/2/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-date-range\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Choose dates\n</tui-input-date-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/2/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/2/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <p i18n>Default:</p>\n\n    <tui-input-date-time\n        formControlName=\"testValue\"\n        timeMode=\"HH:MM\"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>With seconds:</p>\n\n    <tui-input-date-time\n        formControlName=\"testValue\"\n        timeMode=\"HH:MM:SS\"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>With SS and MS:</p>\n\n    <tui-input-date-time\n        formControlName=\"testValue\"\n        timeMode=\"HH:MM:SS.MSS\"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>Form value:</p>\n\n    <pre><code>{{testForm.value | json}}</code></pre>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-date\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-input-date\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_vertical-4\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-input-date\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"l\"\n    >\n        Choose a date\n    </tui-input-date>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"container\"\n    [formGroup]=\"form\"\n>\n    <div\n        i18n\n        class=\"tui-space_bottom-1\"\n    >\n        With a custom accept format and async loading\n    </div>\n    <tui-input-file\n        link=\"Choose images\"\n        accept=\"image/*\"\n        formControlName=\"files\"\n        [multiple]=\"true\"\n        [loadingFiles]=\"(loading$ | async) || []\"\n        [rejectedFiles]=\"(rejected$ | async) || []\"\n        (rejectedFilesChange)=\"onRejectedFilesChange($event)\"\n    ></tui-input-file>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-files\n    accept=\"image/*\"\n    [multiple]=\"true\"\n    [formControl]=\"control\"\n    (reject)=\"onReject($event)\"\n></tui-input-files>\n\n<tui-files class=\"tui-space_top-1\">\n    <tui-file\n        *ngFor=\"let file of control.valueChanges | async\"\n        [file]=\"file\"\n        (removed)=\"removeFile(file)\"\n    ></tui-file>\n\n    <tui-file\n        *ngFor=\"let file of rejectedFiles\"\n        state=\"error\"\n        [file]=\"file\"\n        (removed)=\"clearRejected(file)\"\n    ></tui-file>\n</tui-files>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month-range/examples/2/index.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month-range/examples/2/index.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-month-range\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n        class=\"tui-space_bottom-2\"\n    >\n        Choose a range of months\n    </tui-input-month-range>\n    <tui-input-month-range\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_vertical-4\"\n    >\n        Choose a range of months\n    </tui-input-month-range>\n    <tui-input-month-range formControlName=\"testValue\">Choose a range of months</tui-input-month-range>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-month\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n        class=\"tui-space_bottom-2\"\n    >\n        Choose a month\n    </tui-input-month>\n    <tui-input-month\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_bottom-2\"\n    >\n        Choose a month\n    </tui-input-month>\n    <tui-input-month formControlName=\"testValue\">Choose a month</tui-input-month>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-number\n        formControlName=\"testValue\"\n        tuiTextfieldSize=\"s\"\n        postfix=\"kg\"\n    >\n        Potatos\n        <input\n            tuiTextfield\n            name=\"potato\"\n        />\n    </tui-input-number>\n\n    <tui-input-number\n        formControlName=\"testValue\"\n        postfix=\"L\"\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_top-2\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Milk\n        <input\n            id=\"milk\"\n            tuiTextfield\n        />\n    </tui-input-number>\n\n    <tui-input-number\n        postfix=\"cm\"\n        formControlName=\"testValue\"\n        class=\"tui-space_top-2\"\n    >\n        Carrot\n        <input\n            tuiTextfield\n            style=\"color: orange\"\n        />\n    </tui-input-number>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-password/examples/2/index.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-password/examples/2/index.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-password\n        formControlName=\"testValue\"\n        tuiHintContent\n        tuiHintDirection=\"right\"\n        tuiHintMode=\"onDark\"\n    >\n        Type a password\n    </tui-input-password>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone-international/examples/2/index.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone-international/examples/2/index.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-input-phone-international\n        formControlName=\"testValue\"\n        class=\"input\"\n        [countries]=\"countries\"\n        [(countryIsoCode)]=\"countryIsoCode\"\n    >\n        Type your number\n    </tui-input-phone-international>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-phone\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Type phone number\n</tui-input-phone>\n<pre>Form value: {{ control.value | json }}</pre>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-range\n    new\n    [min]=\"min\"\n    [max]=\"max\"\n    [formControl]=\"control\"\n    [tuiTextfieldLabelOutside]=\"true\"\n></tui-input-range>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-input-slider\n        new\n        [min]=\"min\"\n        [max]=\"max\"\n        [segments]=\"5\"\n        [formControl]=\"control\"\n    >\n        Rate your mind\n    </tui-input-slider>\n\n    <div class=\"slider-ticks-labels\">\n        <span>\n            <button\n                tuiIconButton\n                type=\"button\"\n                size=\"xs\"\n                icon=\"tuiIconDislikeLarge\"\n                appearance=\"icon\"\n                (click)=\"decrease()\"\n            ></button>\n        </span>\n        <span>20%</span>\n        <span>40%</span>\n        <span>60%</span>\n        <span>80%</span>\n        <span>\n            <button\n                tuiIconButton\n                type=\"button\"\n                size=\"xs\"\n                icon=\"tuiIconLikeLarge\"\n                appearance=\"icon\"\n                (click)=\"increase()\"\n            ></button>\n        </span>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/2/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/2/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-tag\n    class=\"b-form\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n    (searchChange)=\"onSearchChange($event)\"\n>\n    Choose your Pythons'\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items$ | async\"\n    ></tui-data-list-wrapper>\n</tui-input-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-time\n        formControlName=\"testValue\"\n        [items]=\"items1\"\n    >\n        Input time\n    </tui-input-time>\n    <tui-input-time\n        formControlName=\"testValue\"\n        class=\"tui-space_top-4\"\n        [items]=\"items2\"\n        [strict]=\"true\"\n    >\n        Input time\n    </tui-input-time>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <p>\n        <tui-input\n            tuiTextfieldSize=\"s\"\n            formControlName=\"testValue\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input\n            tuiTextfieldSize=\"m\"\n            formControlName=\"testValue\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input\n            formControlName=\"testValue\"\n            tuiHintContent=\"It will be used for sending documents\"\n            [tuiTextfieldCleaner]=\"true\"\n        >\n            Type an email&nbsp;\n            <span class=\"tui-required\"></span>\n            <input\n                tuiTextfield\n                placeholder=\"mail@mail.ru\"\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"tui-row\">\n        <div class=\"tui-col_md-4\">\n            <tui-island size=\"l\">\n                <div class=\"tui-island__content\">\n                    <div class=\"tui-island__figure\">\n                        <form [formGroup]=\"testForm\">\n                            <tui-toggle\n                                size=\"l\"\n                                formControlName=\"testValue\"\n                            ></tui-toggle>\n                        </form>\n                    </div>\n                    <div>\n                        <p class=\"tui-island__category\">Section</p>\n                        <h3 class=\"tui-island__title\">Title</h3>\n                        <p class=\"tui-island__paragraph\">\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                        </p>\n                        <p class=\"tui-island__paragraph tui-island__paragraph_link\">\n                            <a\n                                href=\"/\"\n                                tuiLink\n                            >\n                                Link\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n        <div class=\"tui-col_md-4\">\n            <a\n                size=\"l\"\n                href=\"http://ng-web-apis.github.io/\"\n                tuiIsland\n                target=\"_blank\"\n                [hoverable]=\"true\"\n            >\n                <div class=\"tui-island__content\">\n                    <figure class=\"tui-island__figure\">\n                        <div class=\"some-figure\"></div>\n                    </figure>\n                    <div>\n                        <h3 class=\"tui-island__title\">Credit card</h3>\n                        <p class=\"tui-island__paragraph\">\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"tui-col_md-4\">\n            <tui-island\n                size=\"l\"\n                textAlign=\"center\"\n            >\n                <div class=\"tui-island__content\">\n                    <figure class=\"tui-island__figure\">\n                        <div class=\"some-figure\"></div>\n                    </figure>\n                    <div>\n                        <h3 class=\"tui-island__title\">Debit card</h3>\n                        <p class=\"tui-island__paragraph\">\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                        </p>\n                        <button\n                            tuiButton\n                            type=\"button\"\n                            appearance=\"flat\"\n                            size=\"m\"\n                            class=\"tui-island__footer-button\"\n                        >\n                            Button\n                        </button>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/label/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/label/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        label=\"Some long content about money and incoice sums to make a multiline label and to show how it works with line breaks\"\n    >\n        <tui-input\n            formControlName=\"testValue\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            0,00\n        </tui-input>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island\n    size=\"l\"\n    class=\"island\"\n>\n    <tui-line-clamp\n        content=\"Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons\"\n        class=\"clamp\"\n        [linesLimit]=\"linesLimit\"\n    ></tui-line-clamp>\n    <button\n        tuiButton\n        class=\"tui-space_top-4\"\n        (click)=\"toggle()\"\n    >\n        Toggle\n    </button>\n</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n    tuiLink\n    icon=\"tuiIconSettings\"\n>\n    Link with icon right\n</a>\n<p class=\"tui-space_bottom-1\">\n    <a\n        tuiLink\n        icon=\"tuiIconSettings\"\n        iconAlign=\"left\"\n    >\n        Link with icon left\n    </a>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-loader [inheritColor]=\"true\">\n    I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have\n    money. But what I do have are a very particular set of skills; skills I have acquired over a very long career.\n    Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will\n    not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill\n    you.\n</tui-loader>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-marker-icon\n    mode=\"primary\"\n    src=\"tuiIconBellLarge\"\n    class=\"tui-space_right-2\"\n></tui-marker-icon>\n<tui-marker-icon\n    mode=\"link\"\n    src=\"tuiIconBellLarge\"\n    class=\"tui-space_right-2\"\n></tui-marker-icon>\n<tui-marker-icon\n    mode=\"success\"\n    src=\"tuiIconBellLarge\"\n    class=\"tui-space_right-2\"\n></tui-marker-icon>\n<tui-marker-icon\n    mode=\"error\"\n    src=\"tuiIconBellLarge\"\n    class=\"tui-space_right-2\"\n></tui-marker-icon>\n<tui-marker-icon\n    mode=\"secondary\"\n    src=\"tuiIconBellLarge\"\n    class=\"tui-space_right-2\"\n></tui-marker-icon>\n<tui-marker-icon\n    mode=\"warning\"\n    src=\"tuiIconBellLarge\"\n    class=\"tui-space_right-2\"\n></tui-marker-icon>\n<div class=\"white\">\n    <tui-marker-icon\n        mode=\"white\"\n        src=\"tuiIconBellLarge\"\n    ></tui-marker-icon>\n</div>\n<tui-marker-icon\n    src=\"tuiIconBellLarge\"\n    class=\"custom tui-space_left-2\"\n></tui-marker-icon>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/2/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-calendar/examples/2/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <tui-mobile-calendar\n        [min]=\"min\"\n        [max]=\"max\"\n        [single]=\"false\"\n    ></tui-mobile-calendar>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/2/index.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-themes/examples/2/index.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-theme-ios></tui-theme-ios>\n\n<p>Button:</p>\n\n<button\n    tuiButton\n    tuiTouchable\n    size=\"m\"\n>\n    Hello\n</button>\n\n<p>Link:</p>\n\n<a\n    tuiLink\n    href=\"http://ng-web-apis.github.io/\"\n    tuiTouchable\n    target=\"_blank\"\n>\n    Let's check it\n</a>\n\n<p>Island:</p>\n\n<tui-island tuiTouchable>Wow!</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol>\n    <li>\n        <tui-money\n            [value]=\"150.5\"\n            [colored]=\"true\"\n        ></tui-money>\n    </li>\n    <li>\n        <tui-money\n            [value]=\"-150.5\"\n            [colored]=\"true\"\n        ></tui-money>\n    </li>\n    <li>\n        <tui-money\n            [value]=\"0\"\n            [colored]=\"true\"\n        ></tui-money>\n    </li>\n</ol>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-multi-select\n    *tuiLet=\"items$ | async as items\"\n    #component\n    tuiTextfieldExampleText=\"Find by ...\"\n    class=\"control\"\n    [formControl]=\"testValue\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [expandable]=\"false\"\n    (searchChange)=\"onSearchChange($event)\"\n>\n    Rock Star Frontend Developers\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items | tuiHideSelected: component\"\n        [itemContent]=\"itemContent\"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n\n<ng-template\n    #itemContent\n    let-data\n>\n    <div class=\"template\">\n        <tui-avatar\n            size=\"xs\"\n            class=\"avatar\"\n            [avatarUrl]=\"data.avatarUrl\"\n            [text]=\"data.toString()\"\n        ></tui-avatar>\n        {{ data }}\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/notification/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/notification/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-notification>A short simple informative message. Works with token options</tui-notification>\n    <tui-notification\n        status=\"success\"\n        class=\"tui-space_top-4\"\n    >\n        A short simple informative message. Works with token options\n    </tui-notification>\n    <tui-notification\n        status=\"error\"\n        class=\"tui-space_top-4\"\n    >\n        A short simple informative message. Works with token options\n    </tui-notification>\n    <tui-notification\n        status=\"warning\"\n        class=\"tui-space_top-4\"\n    >\n        A short simple informative message. Works with token options\n    </tui-notification>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-slider\n    secondary=\"activePadding\"\n    size=\"m\"\n    class=\"slider\"\n    [max]=\"6\"\n    [quantum]=\"1\"\n    [(ngModel)]=\"activePadding\"\n></tui-input-slider>\n\n<tui-pagination\n    [activePadding]=\"activePadding\"\n    [length]=\"64\"\n    [index]=\"10\"\n></tui-pagination>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"show()\"\n>\n    Taiga\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/2/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    size=\"m\"\n    type=\"button\"\n    class=\"tui-space_bottom-4\"\n    (click)=\"show()\"\n>\n    Show simple preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]=\"false\"\n        [zoomable]=\"false\"\n    >\n        <iframe\n            src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1\"\n            frameborder=\"0\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n            allowfullscreen\n            class=\"content\"\n        ></iframe>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon=\"tuiIconCloseLarge\"\n            title=\"Close\"\n            (click)=\"preview.complete()\"\n        ></button>\n    </tui-preview>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/2/index.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-textfield/examples/2/index.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    tuiTextfieldSize=\"m\"\n    class=\"b-form\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Modified cleaner icon\"\n    >\n        <tui-primitive-textfield\n            [value]=\"value\"\n            (valueChange)=\"onValueChange($event)\"\n            (focusedChange)=\"onFocused($event)\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-primitive-textfield>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label=\"Override modified cleaner icon\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-primitive-textfield\n            [value]=\"value\"\n            [iconCleaner]=\"iconCleaner\"\n            (valueChange)=\"onValueChange($event)\"\n            (focusedChange)=\"onFocused($event)\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-primitive-textfield>\n    </label>\n</form>\n\n<ng-template #iconCleaner>\n    <tui-svg src=\"tuiIconDraft\"></tui-svg>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h6\n    i18n\n    class=\"description\"\n>\n    Single color\n</h6>\n<p>\n    Use\n    <code>&lt;progress /&gt;</code>\n    's CSS-property\n    <code>color</code>\n    to set solid color of progress indicator.\n</p>\n\n<progress\n    tuiProgressBar\n    max=\"100\"\n    class=\"progress\"\n    [value]=\"fastValue$ | async\"\n></progress>\n\n<h6\n    i18n\n    class=\"description\"\n>\n    With fancy color gradient\n</h6>\n<p>\n    Set component's input property\n    <code>color</code>\n    to get more complex color combinations.\n</p>\n\n<progress\n    tuiProgressBar\n    max=\"100\"\n    color=\"linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))\"\n    class=\"progress\"\n    [value]=\"fastValue$ | async\"\n></progress>\n\n<h6\n    i18n\n    class=\"description\"\n>\n    Multicolor segments\n</h6>\n<p>\n    Use\n    <code>tuiProgressColorSegments</code>\n    directive to to get multicolor segments.\n</p>\n\n<progress\n    tuiProgressBar\n    max=\"100\"\n    class=\"progress\"\n    [value]=\"fastValue$ | async\"\n    [tuiProgressColorSegments]=\"colors\"\n></progress>\n\n<progress\n    tuiProgressBar\n    class=\"progress\"\n    [value]=\"slowValue$ | async\"\n    [max]=\"colors.length\"\n    [tuiProgressColorSegments]=\"colors\"\n></progress>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/2/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-progress-circle\n    size=\"xl\"\n    [max]=\"100\"\n    [value]=\"60\"\n></tui-progress-circle>\n\n<tui-progress-circle\n    size=\"l\"\n    [max]=\"100\"\n    [value]=\"60\"\n></tui-progress-circle>\n\n<tui-progress-circle\n    size=\"m\"\n    [max]=\"100\"\n    [value]=\"60\"\n></tui-progress-circle>\n\n<tui-progress-circle\n    size=\"s\"\n    [max]=\"100\"\n    [value]=\"60\"\n></tui-progress-circle>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/2/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/2/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-progress-segmented\n    size=\"s\"\n    class=\"progress\"\n    [max]=\"7\"\n    [value]=\"3\"\n></tui-progress-segmented>\n\n<tui-progress-segmented\n    size=\"m\"\n    class=\"progress\"\n    [max]=\"10\"\n    [value]=\"6\"\n></tui-progress-segmented>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/2/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pull-to-refresh/examples/2/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-pull-to-refresh (pulled)=\"onPull()\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n    <button\n        tuiButton\n        type=\"button\"\n        class=\"tui-space_top-8 tui-space_bottom-8\"\n        (click)=\"finishLoading()\"\n    >\n        Finish loading\n    </button>\n</tui-pull-to-refresh>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/push/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/push/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"onClick()\"\n>\n    Show push\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-block/examples/2/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-block/examples/2/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\n    i18n\n    class=\"title\"\n>\n    Horizontal group\n</h3>\n<form\n    class=\"group\"\n    [formGroup]=\"testForm\"\n>\n    <div\n        tuiGroup\n        class=\"group\"\n        [collapsed]=\"true\"\n    >\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"orange\"\n            size=\"l\"\n        >\n            Oranges\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"apple\"\n            size=\"l\"\n        >\n            Apples\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"pineapple\"\n            size=\"l\"\n        >\n            Pineapple\n        </tui-radio-block>\n    </div>\n</form>\n<h3\n    i18n\n    class=\"title\"\n>\n    Vertical group\n</h3>\n<form [formGroup]=\"testForm\">\n    <div\n        tuiGroup\n        orientation=\"vertical\"\n        class=\"group\"\n        [collapsed]=\"true\"\n    >\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"orange\"\n            size=\"l\"\n        >\n            Oranges\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"apple\"\n            size=\"l\"\n        >\n            Apples\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign=\"right\"\n            formControlName=\"testValue\"\n            item=\"pineapple\"\n            size=\"l\"\n        >\n            Pinapples\n        </tui-radio-block>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/2/index.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/2/index.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-radio-labeled\n        formControlName=\"testValue1\"\n        class=\"tui-space_bottom-3\"\n        [item]=\"items[0]\"\n    >\n        <div>A simple option</div>\n        <div class=\"description\">It is real simple option, take a look</div>\n    </tui-radio-labeled>\n    <tui-radio-labeled\n        formControlName=\"testValue1\"\n        class=\"tui-space_bottom-3\"\n        [item]=\"items[1]\"\n    >\n        <div>Advanced</div>\n        <div class=\"description\">\n            It can also be with a\n            <a\n                tuiLink\n                href=\"#\"\n                onclick=\"return false;\"\n            >\n                link\n            </a>\n        </div>\n    </tui-radio-labeled>\n    <tui-radio-labeled\n        formControlName=\"testValue1\"\n        [item]=\"items[2]\"\n    >\n        <div>PRO</div>\n        <div class=\"description\">For true cool ultimate clients</div>\n    </tui-radio-labeled>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-list/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tui-row\">\n    <div class=\"tui-col_md-4\">\n        <form [formGroup]=\"testForm\">\n            <tui-radio-list\n                formControlName=\"tariff\"\n                size=\"l\"\n                [items]=\"items\"\n                [itemContent]=\"tariff1ItemContent\"\n            ></tui-radio-list>\n            <ng-template\n                #tariff1ItemContent\n                let-data\n            >\n                <div>Option &laquo;{{ data.name }}&raquo;.</div>\n                <div class=\"description\">{{ data.description }}</div>\n            </ng-template>\n        </form>\n    </div>\n    <div class=\"tui-col_md-4\">\n        <form [formGroup]=\"testForm\">\n            <tui-radio-list\n                formControlName=\"tariff\"\n                orientation=\"horizontal\"\n                size=\"l\"\n                [items]=\"items\"\n                [itemContent]=\"tariff2ItemContent\"\n            ></tui-radio-list>\n            <ng-template\n                #tariff2ItemContent\n                let-data\n            >\n                &laquo;{{ data.name }}&raquo;\n            </ng-template>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-radio\n        formControlName=\"testValue1\"\n        size=\"l\"\n        item=\"One\"\n        class=\"tui-space_bottom-3\"\n    ></tui-radio>\n\n    <tui-radio\n        formControlName=\"testValue1\"\n        size=\"l\"\n        item=\"Two\"\n        class=\"tui-space_bottom-3\"\n    ></tui-radio>\n\n    <tui-radio\n        formControlName=\"testValue2\"\n        size=\"l\"\n        item=\"One\"\n        class=\"tui-space_bottom-3\"\n    ></tui-radio>\n\n    <tui-radio\n        formControlName=\"testValue2\"\n        size=\"l\"\n        item=\"Two\"\n    ></tui-radio>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-island class=\"island\">\n    <h3 class=\"tui-island__title\">S-size</h3>\n\n    <tui-range\n        id=\"s-size-range\"\n        size=\"s\"\n        class=\"range\"\n        [max]=\"100\"\n        [(ngModel)]=\"smallRangeValue\"\n    ></tui-range>\n\n    <p class=\"tui-island__paragraph\">\n        Control value:\n        <output for=\"s-size-range\">\n            <code>{{ smallRangeValue | json }}</code>\n        </output>\n    </p>\n</tui-island>\n\n<tui-island class=\"island\">\n    <h3 class=\"tui-island__title\">M-size</h3>\n\n    <tui-range\n        id=\"m-size-range\"\n        size=\"m\"\n        class=\"range\"\n        [formControl]=\"bigRangeControl\"\n        [max]=\"100\"\n    ></tui-range>\n\n    <p class=\"tui-island__paragraph\">\n        Control value:\n        <output for=\"m-size-range\">\n            <code>{{ bigRangeControl.value | json }}</code>\n        </output>\n    </p>\n</tui-island>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <h2>Custom colors</h2>\n\n    <p>\n        <b>Yellow / value = {{ firstRate }}</b>\n    </p>\n    <tui-rating\n        class=\"yellow\"\n        [(ngModel)]=\"firstRate\"\n    ></tui-rating>\n\n    <p>\n        <b>10 stars / value = {{ secondRate }}</b>\n    </p>\n    <tui-rating\n        class=\"pink\"\n        [max]=\"10\"\n        [(ngModel)]=\"secondRate\"\n    ></tui-rating>\n</div>\n\n<div class=\"example\">\n    <h2>Custom icons</h2>\n\n    <p>\n        <b>Controlled / value = {{ thirdRate }}</b>\n    </p>\n    <tui-rating\n        iconNormal=\"tuiIconHeart\"\n        iconFilled=\"tuiIconHeartFilledLarge\"\n        class=\"red\"\n        [(ngModel)]=\"thirdRate\"\n    ></tui-rating>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-select\n        formControlName=\"testValue\"\n        [valueContent]=\"cardContent\"\n    >\n        Choose a card\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"cards\"\n            [itemContent]=\"cardContent\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        formControlName=\"testValue\"\n        class=\"tui-space_vertical-5\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [valueContent]=\"cardContent\"\n    >\n        Choose a card\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"cards\"\n            [itemContent]=\"cardContent\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        formControlName=\"accounts\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [valueContent]=\"accountContent\"\n    >\n        Choose an account\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"accounts\"\n            [itemContent]=\"accountContent\"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <ng-template\n        #cardContent\n        let-item\n    >\n        <div class=\"card-item\">\n            <tui-card\n                size=\"s\"\n                paymentSystem=\"mastercard\"\n                class=\"card\"\n                [cardNumber]=\"item.cardNumber.slice(1)\"\n            ></tui-card>\n            <span class=\"card-name\">{{ item.cardName }}</span>\n            <span class=\"card-number\">{{ item.cardNumber }}</span>\n        </div>\n    </ng-template>\n    <ng-template\n        #accountContent\n        let-account\n    >\n        <div class=\"account\">\n            {{ account.name }}\n            <tui-money [value]=\"account.amount\"></tui-money>\n        </div>\n    </ng-template>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"toggle()\"\n>\n    Show/Hide\n</button>\n<ng-template\n    [tuiSheetOptions]=\"options\"\n    [(tuiSheet)]=\"open\"\n>\n    <h2 tuiSheetHeading>Alexander Inkin</h2>\n    <div class=\"tui-space_top-4\">\n        <a\n            tuiIconButton\n            size=\"m\"\n            appearance=\"secondary\"\n            icon=\"tuiIconMailLarge\"\n            title=\"Email\"\n            href=\"mailto:alexander@inkin.ru\"\n            class=\"tui-space_right-2\"\n        ></a>\n        <a\n            tuiIconButton\n            size=\"m\"\n            appearance=\"secondary\"\n            icon=\"tuiIconCallTransferLarge\"\n            title=\"Telegram\"\n            href=\"https://t.me/waterplea\"\n            class=\"tui-space_right-2\"\n        ></a>\n        <a\n            tuiIconButton\n            size=\"m\"\n            appearance=\"secondary\"\n            icon=\"tuiIconMusicLarge\"\n            title=\"Music\"\n            href=\"https://waterplea.bandcamp.com/\"\n        ></a>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider-old/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-slider\n    [formControl]=\"testValue\"\n    [keySteps]=\"keySteps\"\n    [min]=\"5000\"\n    [max]=\"1000000\"\n    [segments]=\"3\"\n    [steps]=\"3\"\n></tui-slider>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n    tuiSlider\n    type=\"range\"\n    value=\"65\"\n    class=\"first\"\n/>\n<input\n    tuiSlider\n    type=\"range\"\n    value=\"80\"\n    class=\"second\"\n/>\n<input\n    tuiSlider\n    type=\"range\"\n    value=\"40\"\n    class=\"third\"\n/>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/2/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/2/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-stepper\n    orientation=\"vertical\"\n    [activeItemIndex]=\"1\"\n>\n    <button\n        *ngFor=\"let step of steps\"\n        tuiStep\n    >\n        {{ step }}\n    </button>\n</tui-stepper>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/svg/examples/2/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/svg/examples/2/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <tui-svg\n        src=\"tuiIconAlertCircleLarge\"\n        class=\"primary\"\n    ></tui-svg>\n</p>\n<p>\n    <tui-svg\n        src=\"tuiIconDeleteLarge\"\n        class=\"retrowave\"\n    ></tui-svg>\n</p>\n<p>\n    <tui-svg\n        src=\"tuiIconTooltipLarge\"\n        class=\"question\"\n    ></tui-svg>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tabs\n    tuiMobileTabs\n    [(activeItemIndex)]=\"activeItemIndex\"\n>\n    <button\n        *ngFor=\"let item of items\"\n        tuiTab\n        (click)=\"onClick(item.text)\"\n    >\n        <tui-svg\n            class=\"tui-space_right-2\"\n            [src]=\"item.icon\"\n        ></tui-svg>\n        {{ item.text }}\n    </button>\n</tui-tabs>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"2\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/2/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    Base colors\n    <tui-tag\n        class=\"tag\"\n        [hoverable]=\"true\"\n        [value]=\"tag\"\n    ></tui-tag>\n    <tui-tag\n        status=\"primary\"\n        class=\"tag\"\n        [hoverable]=\"true\"\n        [value]=\"tag\"\n    ></tui-tag>\n    <div\n        tuiMode=\"onDark\"\n        class=\"light-mode\"\n    >\n        <tui-tag\n            class=\"tag\"\n            [hoverable]=\"true\"\n            [value]=\"tag\"\n        ></tui-tag>\n    </div>\n    <div\n        tuiMode=\"onLight\"\n        class=\"dark-mode\"\n    >\n        <tui-tag\n            class=\"tag\"\n            [hoverable]=\"true\"\n            [value]=\"tag\"\n        ></tui-tag>\n    </div>\n</div>\n<div class=\"tui-space_top-3\">\n    Support color with CSS and\n    <code>status=\"custom\"</code>\n    <tui-tag\n        *tuiRepeatTimes=\"let index of 20\"\n        status=\"custom\"\n        class=\"tag support-{{ index + 1 }}\"\n        [hoverable]=\"true\"\n        [value]=\"tag\"\n    ></tui-tag>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/2/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/2/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>You can set a custom min-height for component</p>\n\n<form [formGroup]=\"testForm\">\n    <div class=\"tui-row\">\n        <div class=\"tui-col_md-6\">\n            <tui-text-area\n                formControlName=\"testValue1\"\n                class=\"tui-space_bottom-4 field-large\"\n            >\n                Type a text\n            </tui-text-area>\n            <tui-text-area\n                formControlName=\"testValue1\"\n                class=\"field-small\"\n                [expandable]=\"true\"\n            >\n                Type a text\n            </tui-text-area>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toggle/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/toggle/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <div>\n        <tui-toggle formControlName=\"testValue1\"></tui-toggle>\n        <tui-toggle\n            formControlName=\"testValue2\"\n            size=\"l\"\n            class=\"tui-space_left-1\"\n        ></tui-toggle>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/2/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/2/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Custom host can be set with\n    <a\n        tuiLink\n        tuiMode=\"onDark\"\n        [routerLink]=\"['/tui-hint']\"\n    >\n        <code>tuiHint</code>\n    </a>\n    directive\n</p>\n<tui-avatar\n    tabindex=\"0\"\n    size=\"l\"\n    text=\"❤\"\n    tuiDescribedBy=\"love\"\n    tuiHintId=\"love\"\n    tuiHintMode=\"onDark\"\n    tuiHintDirection=\"right\"\n    [tuiHint]=\"tooltip\"\n    [autoColor]=\"true\"\n    [rounded]=\"true\"\n></tui-avatar>\n<ng-template #tooltip>\n    <div>\n        What is\n        <strong>love</strong>\n        ?\n    </div>\n    <div>Baby don't hurt me</div>\n    <div>Don't hurt me</div>\n    <div>No more...</div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tree [value]=\"data\"></tui-tree>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/2/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Make right click on any table's row.</p>\n\n<table class=\"tui-table\">\n    <tbody>\n        <tr class=\"tui-table__tr tui-table__tr_hover_disabled\">\n            <th\n                *ngFor=\"let column of tableColumns\"\n                class=\"tui-table__th\"\n            >\n                {{ column }}\n            </th>\n        </tr>\n        <tr\n            *ngFor=\"let rowInfo of tableData\"\n            class=\"tui-table__tr\"\n            [tuiDropdownContext]=\"contextMenu\"\n        >\n            <td\n                *ngFor=\"let value of getObjectValues(rowInfo)\"\n                class=\"tui-table__td\"\n            >\n                {{ value }}\n            </td>\n\n            <ng-template\n                #contextMenu\n                let-close=\"close\"\n                let-activeZone=\"activeZone\"\n            >\n                <tui-data-list\n                    role=\"menu\"\n                    tuiDataListDropdownManager\n                    class=\"context-menu\"\n                    [tuiActiveZoneParent]=\"activeZone\"\n                >\n                    <button\n                        *ngFor=\"let item of menuItems\"\n                        tuiOption\n                        (click)=\"printToConsole(item.title, rowInfo); close()\"\n                    >\n                        {{ item.title }}\n                        <tui-svg\n                            class=\"icon\"\n                            [src]=\"item.iconName\"\n                        ></tui-svg>\n                    </button>\n\n                    <button\n                        tuiOption\n                        tuiDropdownAlign=\"right\"\n                        [tuiDropdown]=\"false\"\n                        [tuiDropdownContent]=\"nestedMenu\"\n                        [tuiDropdownSided]=\"true\"\n                    >\n                        More\n                    </button>\n                </tui-data-list>\n\n                <ng-template #nestedMenu>\n                    <tui-data-list\n                        tuiDataListDropdownManager\n                        [tuiActiveZoneParent]=\"activeZone\"\n                    >\n                        <button\n                            *ngFor=\"let option of moreOptions\"\n                            tuiOption\n                        >\n                            {{ option }}\n                        </button>\n                    </tui-data-list>\n                </ng-template>\n            </ng-template>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-text-area\n    #textarea\n    tuiDropdownSelectionPosition=\"word\"\n    [tuiDropdownContent]=\"dropdown\"\n    [tuiDropdownSelection]=\"predicate\"\n    [pseudoFocused]=\"focused\"\n    [(ngModel)]=\"value\"\n    (keydown.arrowUp)=\"onArrow($event, 'last')\"\n    (keydown.arrowDown)=\"onArrow($event, 'first')\"\n>\n    Type a message\n</tui-text-area>\n<ng-template #dropdown>\n    <tui-data-list\n        *ngIf=\"textarea.nativeFocusableElement\"\n        class=\"menu\"\n        (keydown.escape)=\"textarea.nativeFocusableElement.focus()\"\n    >\n        <button\n            *ngFor=\"let item of filterItems(textarea.nativeFocusableElement)\"\n            tuiOption\n            (click)=\"onClick(item.login, textarea.nativeFocusableElement)\"\n        >\n            {{ item.name }}\n            <tui-avatar\n                size=\"s\"\n                [rounded]=\"true\"\n                [avatarUrl]=\"item.avatar\"\n                [text]=\"item.name\"\n            ></tui-avatar>\n        </button>\n    </tui-data-list>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/2/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/2/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("You can ask any questions about\n<code>tuiDropdown</code>\nand\n<button\n    tuiLink\n    tuiDropdownAlign=\"right\"\n    tuiDropdownDirection=\"top\"\n    [tuiDropdownContent]=\"dropdownContent\"\n    [tuiDropdown]=\"open\"\n    (mouseenter)=\"onMouseEnter()\"\n    (mouseleave)=\"onMouseLeave()\"\n>\n    Alex\n</button>\nwill answer you with joy!\n\n<ng-template #dropdownContent>\n    <div class=\"dropdown\">\n        <tui-avatar\n            size=\"l\"\n            [rounded]=\"true\"\n            [avatarUrl]=\"avatarUrl\"\n        ></tui-avatar>\n        <div class=\"text\">\n            <div class=\"label\">Taiga UI developer</div>\n            <div class=\"name\">Alex Inkin</div>\n            <div class=\"account\">a.inkin</div>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/let/examples/2/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/let/examples/2/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *tuiLet=\"getter as value\">\n    <p>Calculated with getter value: {{ value }}</p>\n    <p>\n        That can be used many times:\n        <tui-badge [value]=\"value\"></tui-badge>\n    </p>\n    <p>And getter is called only once.</p>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player\">\n    <video\n        #video\n        tuiMedia\n        width=\"320\"\n        class=\"video\"\n        [(currentTime)]=\"currentTime\"\n        [(paused)]=\"paused\"\n        (click)=\"toggleState()\"\n    >\n        <source\n            src=\"/assets/media/bbb.mp4\"\n            type=\"video/mp4\"\n        />\n    </video>\n    <div\n        tuiMode=\"onDark\"\n        class=\"controls\"\n    >\n        <button\n            tuiIconButton\n            type=\"button\"\n            title=\"Play/Pause\"\n            size=\"s\"\n            shape=\"rounded\"\n            appearance=\"flat\"\n            [icon]=\"icon\"\n            (click)=\"toggleState()\"\n        ></button>\n        <input\n            tuiSlider\n            type=\"range\"\n            step=\"any\"\n            class=\"slider\"\n            [max]=\"video.duration\"\n            [(ngModel)]=\"currentTime\"\n        />\n        <div class=\"time\">\n            <time [attr.datetime]=\"getTime(currentTime)\">\n                {{ getTime(currentTime) }}\n            </time>\n            /\n            <time [attr.datetime]=\"getTime(video.duration)\">\n                {{ getTime(video.duration) }}\n            </time>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    tuiOverscroll=\"all\"\n    class=\"box\"\n>\n    Lorem ipsum dolor sit amt, consectetur adipiscing elit. Phasellus et orci enim. Nam luctus mattis nisi. In congue\n    vitae arcu a volutpat. Nunc lacinia nulla quis eros facilisis convallis.\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/swipe/examples/2/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/swipe/examples/2/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    class=\"container tui-text_body-l\"\n    (tuiSwipe)=\"onSwipe($event)\"\n>\n    Swipe left to open\n    <div\n        *tuiSidebar=\"!!(open$ | async); direction: 'right'\"\n        class=\"sidebar tui-text_body-l\"\n        (tuiSwipe)=\"onSwipe($event)\"\n    >\n        Swipe right to close\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/grid/examples/2/index.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/grid/examples/2/index.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tui-container tui-container_adaptive\">\n    <div class=\"tui-row tui-row_adaptive\">\n        <div class=\"tui-col_xs-12 tui-col_md-2 tui-col_lg-3\">\n            <div class=\"dummy\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores atque autem beatae debitis\n                eaque ipsa nemo non sequi ut? Aperiam beatae blanditiis distinctio, eius et excepturi illum nostrum vel.\n            </div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-2 tui-col_lg-3\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col-offset_md-7 tui-col_lg-1 tui-col-offset_lg-5\">\n            <div class=\"dummy\"></div>\n        </div>\n    </div>\n    <div class=\"tui-row tui-row_adaptive\">\n        <div class=\"tui-col_xs-12 tui-col_md-2 tui-col_lg-3 tui-col_stretch\">\n            <div class=\"dummy\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores atque autem beatae debitis\n                eaque ipsa nemo non sequi ut? Aperiam beatae blanditiis distinctio, eius et excepturi illum nostrum vel.\n            </div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-2 tui-col_lg-3 tui-col_stretch\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_xs-12 tui-col_md-1 tui-col-offset_md-7 tui-col_lg-1 tui-col-offset_lg-5 tui-col_stretch\">\n            <div class=\"dummy\"></div>\n        </div>\n    </div>\n    <div class=\"tui-row tui-row_adaptive tui-row_example tui-row_align_start\">\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n    </div>\n    <div class=\"tui-row tui-row_adaptive tui-row_example tui-row_align_center\">\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n    </div>\n    <div class=\"tui-row tui-row_adaptive tui-row_example tui-row_align_end\">\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n        <div class=\"tui-col_md-4 tui-col_lg-4\">\n            <div class=\"dummy\"></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/2/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/2/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"tui-list\">\n    <li class=\"tui-list__item\">Code Review ($ 10)</li>\n    <li class=\"tui-list__item\">\n        The whole project refactoring ($ 1000)\n        <ul class=\"tui-list tui-list_linear tui-list_nested\">\n            <li class=\"tui-list__item\">Add auto prettier and linters on precommit ($ 50)</li>\n            <li class=\"tui-list__item\">Rewrite to react and back ($ Infinity)</li>\n        </ul>\n    </li>\n    <li class=\"tui-list__item\">\n        Live workshop from\n        <a\n            tuiLink\n            href=\"https://angular.institute/corporate\"\n            target=\"_blank\"\n        >\n            angular.institute\n        </a>\n        ($ 3000)\n        <ol class=\"tui-list tui-list_ordered tui-list_nested\">\n            <li class=\"tui-list__item\">Interactive samples</li>\n            <li class=\"tui-list__item\">Case analysis</li>\n            <li class=\"tui-list__item\">Angular knowledge that keeps on growing</li>\n        </ol>\n    </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/skeleton/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"xs\"\n        class=\"tui-space_right-2\"\n        (click)=\"showSkelet()\"\n    >\n        Show/hide skeleton\n    </button>\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"xs\"\n        (click)=\"toggleLight()\"\n    >\n        Light mode\n    </button>\n</p>\n<div class=\"tui-container\">\n    <form [formGroup]=\"testForm\">\n        <div class=\"tui-row tui-row_sme\">\n            <div class=\"tui-col_8\">\n                <div\n                    class=\"container\"\n                    [class.container_dark]=\"lightMode\"\n                    [tuiMode]=\"lightMode ? 'onDark' : null\"\n                >\n                    <h3\n                        class=\"tui-form__header tui-form__header_margin-top_none\"\n                        [class.tui-skeleton]=\"skeletonVisible\"\n                        [class.tui-skeleton_short]=\"skeletonVisible\"\n                        [class.tui-skeleton_text]=\"skeletonVisible\"\n                        [class.tui-skeleton_light]=\"lightMode\"\n                    >\n                        A header\n                    </h3>\n                    <div class=\"tui-form__row\">\n                        <tui-input\n                            tuiTextfieldExampleText=\"Name Surname\"\n                            formControlName=\"nameValue\"\n                            tuiHintContent=\"With a hint\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Some input\n                        </tui-input>\n                    </div>\n                    <div class=\"tui-form__row tui-form__row_multi-fields\">\n                        <div class=\"tui-form__multi-field\">\n                            <tui-input-password\n                                formControlName=\"passwordValue\"\n                                [class.tui-skeleton]=\"skeletonVisible\"\n                                [class.tui-skeleton_light]=\"lightMode\"\n                            >\n                                Some password input\n                            </tui-input-password>\n                        </div>\n                        <div class=\"tui-form__multi-field\">\n                            <tui-input-number\n                                formControlName=\"moneyValue\"\n                                [class.tui-skeleton]=\"skeletonVisible\"\n                                [class.tui-skeleton_light]=\"lightMode\"\n                            >\n                                Some number input\n                            </tui-input-number>\n                        </div>\n                    </div>\n                    <div class=\"tui-form__row tui-form__row_half-width\">\n                        <tui-input-time\n                            formControlName=\"timeValue\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Some textfield\n                        </tui-input-time>\n                    </div>\n                    <div class=\"tui-form__row tui-form__row_checkboxes\">\n                        <tui-checkbox-labeled\n                            formControlName=\"osnoValue\"\n                            size=\"l\"\n                            class=\"tui-form__checkbox\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            First option\n                        </tui-checkbox-labeled>\n                        <tui-checkbox-labeled\n                            formControlName=\"usnValue\"\n                            size=\"l\"\n                            class=\"tui-form__checkbox\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Cool option\n                        </tui-checkbox-labeled>\n                        <tui-checkbox-labeled\n                            formControlName=\"eshnValue\"\n                            size=\"l\"\n                            class=\"tui-form__checkbox\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Boring option\n                        </tui-checkbox-labeled>\n                        <tui-checkbox-labeled\n                            formControlName=\"envdValue\"\n                            size=\"l\"\n                            class=\"tui-form__checkbox\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_short]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Interesting option\n                        </tui-checkbox-labeled>\n                    </div>\n                    <div class=\"tui-form__buttons\">\n                        <button\n                            tuiButton\n                            size=\"l\"\n                            type=\"submit\"\n                            class=\"tui-form__button\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Submit\n                        </button>\n                        <button\n                            tuiButton\n                            type=\"button\"\n                            appearance=\"flat\"\n                            size=\"l\"\n                            class=\"tui-form__button\"\n                            [class.tui-skeleton]=\"skeletonVisible\"\n                            [class.tui-skeleton_light]=\"lightMode\"\n                        >\n                            Cancel\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/2/index.html":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/spaces/examples/2/index.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2\n    i18n\n    class=\"title\"\n>\n    Margin top\n    <code>.tui-space(top, &lt;value&gt;);</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example example_top-1\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(top, 1);\">.tui-space(top, 1);</tui-doc-copy>\n    </div>\n    <div class=\"example example_top-2\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(top, 2);\">.tui-space(top, 2);</tui-doc-copy>\n    </div>\n    <div class=\"example example_top-3\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(top, 3);\">.tui-space(top, 3);</tui-doc-copy>\n    </div>\n    <div class=\"example example_top-4\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(top, 4);\">.tui-space(top, 4);</tui-doc-copy>\n    </div>\n    <div class=\"example example_top-5\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(top, 5);\">.tui-space(top, 5);</tui-doc-copy>\n    </div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Margin bottom\n    <code>.tui-space(bottom, &lt;value&gt;);</code>\n</h2>\n<div class=\"row row_align-items_bottom\">\n    <div class=\"example example_bottom-1\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(bottom, 1);\">.tui-space(bottom, 1);</tui-doc-copy>\n    </div>\n    <div class=\"example example_bottom-2\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(bottom, 2);\">.tui-space(bottom, 2);</tui-doc-copy>\n    </div>\n    <div class=\"example example_bottom-3\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(bottom, 3);\">.tui-space(bottom, 3);</tui-doc-copy>\n    </div>\n    <div class=\"example example_bottom-4\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(bottom, 4);\">.tui-space(bottom, 4);</tui-doc-copy>\n    </div>\n    <div class=\"example example_bottom-5\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(bottom, 5);\">.tui-space(bottom, 5);</tui-doc-copy>\n    </div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Margin right\n    <code>.tui-space(right, &lt;value&gt;);</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example example_right-1\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(right, 1);\">.tui-space(right, 1);</tui-doc-copy>\n    </div>\n    <div class=\"example example_right-2\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(right, 2);\">.tui-space(right, 2);</tui-doc-copy>\n    </div>\n    <div class=\"example example_right-3\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(right, 3);\">.tui-space(right, 3);</tui-doc-copy>\n    </div>\n    <div class=\"example example_right-4\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(right, 4);\">.tui-space(right, 4);</tui-doc-copy>\n    </div>\n    <div class=\"example example_right-5\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(right, 5);\">.tui-space(right, 5);</tui-doc-copy>\n    </div>\n    <div class=\"example\"></div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Margin left\n    <code>.tui-space(left, &lt;value&gt;);</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example\"></div>\n    <div class=\"example example_left-1\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(left, 1);\">.tui-space(left, 1);</tui-doc-copy>\n    </div>\n    <div class=\"example example_left-2\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(left, 2);\">.tui-space(left, 2);</tui-doc-copy>\n    </div>\n    <div class=\"example example_left-3\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(left, 3);\">.tui-space(left, 3);</tui-doc-copy>\n    </div>\n    <div class=\"example example_left-4\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(left, 4);\">.tui-space(left, 4);</tui-doc-copy>\n    </div>\n    <div class=\"example example_left-5\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(left, 5);\">.tui-space(left, 5);</tui-doc-copy>\n    </div>\n</div>\n<h2\n    i18n\n    class=\"title\"\n>\n    Vertical and horizontal margins\n    <code>.tui-space(vertical, &lt;value&gt;);</code>\n    and\n    <code>.tui-space(horizontal, &lt;value&gt;);</code>\n</h2>\n<div class=\"row\">\n    <div class=\"example example_vertical\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(vertical, 4);\">.tui-space(vertical, 4);</tui-doc-copy>\n    </div>\n    <div class=\"example example_horizontal\">\n        <tui-doc-copy cdkCopyToClipboard=\".tui-space(horizontal, 4);\">.tui-space(horizontal, 4);</tui-doc-copy>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/2/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/2/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        label=\"Enter an email\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            i18n\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Required\n        </tui-input>\n\n        <tui-error\n            formControlName=\"testValue2\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <label\n        tuiLabel\n        label=\"Minimum and maximum length\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n        >\n            4 letters word...\n        </tui-input>\n\n        <tui-error\n            formControlName=\"testValue1\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <label\n        tuiLabel\n        label=\"Minimum number\"\n    >\n        <tui-input-count\n            formControlName=\"testValue3\"\n            tuiTextfieldSize=\"m\"\n        >\n            number\n        </tui-input-count>\n\n        <tui-error\n            formControlName=\"testValue3\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter-by-input/examples/2/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter-by-input/examples/2/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"form\"\n>\n    <tui-combo-box formControlName=\"user\">\n        Search by last name\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items | tuiFilterByInput: matcher\"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/2/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/2/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Your balance:\n    <tui-money [value]=\"money\"></tui-money>\n</p>\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"showWithdrawAlert()\"\n>\n    Withdraw\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"showDepositAlert()\"\n>\n    Add\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"withdraw()\"\n>\n    Withdraw&nbsp;\n    <tui-money [value]=\"100\"></tui-money>\n</button>\n\n<ng-template #withdrawTemplate>\n    <p i18n>Notifications can be shown with template</p>\n    <p>\n        Your balance:\n        <tui-money [value]=\"money\"></tui-money>\n    </p>\n    <button\n        tuiButton\n        type=\"button\"\n        tuiMode=\"onLight\"\n        appearance=\"outline\"\n        size=\"m\"\n        (click)=\"withdraw()\"\n    >\n        Withdraw&nbsp;\n        <tui-money [value]=\"100\"></tui-money>\n    </button>\n</ng-template>\n\n<ng-template #depositTemplate>\n    <p i18n>\n        If there are many templates, you can use\n        <code>ViewChildren</code>\n        instead of\n        <code>ViewChild</code>\n        or set them IDs with \"#\" (see code of this sample)\n    </p>\n    <p>\n        Your balance:\n        <tui-money [value]=\"money\"></tui-money>\n    </p>\n    <button\n        tuiButton\n        type=\"button\"\n        tuiMode=\"onLight\"\n        appearance=\"outline\"\n        size=\"m\"\n        (click)=\"deposit()\"\n    >\n        Add&nbsp;\n        <tui-money [value]=\"100\"></tui-money>\n    </button>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/2/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table-pagination/examples/2/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-table-pagination\n    [total]=\"total\"\n    [items]=\"sizeOptions\"\n></tui-table-pagination>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/2/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table\n    tuiTable\n    [columns]=\"columns\"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                *tuiHead=\"'name'\"\n                tuiTh\n            >\n                Name\n            </th>\n            <th\n                *tuiHead=\"'email'\"\n                tuiTh\n            >\n                E-mail\n            </th>\n            <th\n                *tuiHead=\"'status'\"\n                tuiTh\n            >\n                Status\n            </th>\n            <th\n                *tuiHead=\"'tags'\"\n                tuiTh\n                [sorter]=\"null\"\n            >\n                Tags\n            </th>\n            <th\n                *tuiHead=\"'actions'\"\n                tuiTh\n                [sorter]=\"null\"\n            ></th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]=\"users\"\n    >\n        <tr\n            *tuiRow=\"let item of users; let index = index\"\n            tuiTr\n        >\n            <td\n                *tuiCell=\"'name'\"\n                tuiTd\n            >\n                {{ index + 1 }}. {{ item.name }}\n            </td>\n            <td\n                *tuiCell=\"'email'\"\n                tuiTd\n            >\n                <a\n                    *ngIf=\"item.email\"\n                    tuiLink\n                    [href]=\"'mailto:' + item.email\"\n                >\n                    {{ item.email }}\n                </a>\n            </td>\n            <td\n                *tuiCell=\"'status'\"\n                tuiTd\n            >\n                <div [class]=\"item.status\">{{ item.status }}</div>\n            </td>\n            <td\n                *tuiCell=\"'tags'\"\n                tuiTd\n            >\n                <tui-tag\n                    *ngFor=\"let tag of item.tags\"\n                    class=\"tui-space_right-1\"\n                    [value]=\"tag\"\n                    [autoColor]=\"true\"\n                ></tui-tag>\n            </td>\n            <td\n                *tuiCell=\"'actions'\"\n                tuiTd\n            >\n                <button\n                    tuiIconButton\n                    appearance=\"flat\"\n                    size=\"s\"\n                    icon=\"tuiIconTrash\"\n                    title=\"Remove\"\n                    shape=\"rounded\"\n                    class=\"remove\"\n                    (click)=\"remove(item)\"\n                ></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/2/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ paddedStart }} = padStart(sourceString, minResultLength, padString);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input\n            formControlName=\"sourceString\"\n            class=\"tui-space_top-2\"\n        >\n            sourceString\n        </tui-input>\n        <tui-input-number\n            formControlName=\"minResultLength\"\n            class=\"tui-space_top-2\"\n        >\n            minResultLength\n        </tui-input-number>\n        <tui-input\n            formControlName=\"padString\"\n            class=\"tui-space_top-2\"\n        >\n            padString\n        </tui-input>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/2/index.html":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/2/index.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ ranged }} = inRange(value, fromInclude, toExclude);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input-number\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number\n            formControlName=\"fromInclude\"\n            class=\"tui-space_top-2\"\n        >\n            fromInclude\n        </tui-input-number>\n        <tui-input-number\n            formControlName=\"toExclude\"\n            class=\"tui-space_top-2\"\n        >\n            toExclude\n        </tui-input-number>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/2/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/2/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ flatted }} = flatLength([[1, 2], [3, 4], [5, 6]]);</p>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-index-html.js.map