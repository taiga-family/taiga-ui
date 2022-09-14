(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-6-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/6/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/6/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"b-form\">\n    <tui-combo-box\n        tuiTextfieldSize=\"m\"\n        [formControl]=\"testValue\"\n        [tuiTextfieldLabelOutside]=\"true\"\n    >\n        Employee\n        <input\n            tuiTextfield\n            placeholder=\"Type a name\"\n        />\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/6/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/6/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    tuiDropdownAlign=\"left\"\n    [tuiDropdownLimitWidth]=\"isMobile ? 'fixed' : 'min'\"\n    [tuiDropdownMaxHeight]=\"700\"\n    [content]=\"content\"\n    [(open)]=\"open\"\n>\n    <button\n        tuiButton\n        appearance=\"flat\"\n        type=\"button\"\n        [iconRight]=\"arrow\"\n    >\n        Select why you use Taiga UI\n    </button>\n</tui-hosted-dropdown>\n\n<ng-template #content>\n    <tui-data-list>\n        <tui-opt-group\n            *ngFor=\"let group of groups\"\n            [label]=\"group.label\"\n        >\n            <button\n                *ngFor=\"let item of group.items\"\n                tuiOption\n                class=\"option\"\n                (click)=\"open = false\"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/6/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/6/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showDialog()\"\n>\n    Show\n</button>\n<!-- TODO: 3.0 need remove $any later -->\n<ng-template\n    let-observer\n    [tuiDialogOptions]=\"$any({label: 'Declarative directive', size: 's'})\"\n    [(tuiDialog)]=\"open\"\n>\n    <form\n        [formGroup]=\"exampleForm\"\n        (ngSubmit)=\"observer.complete()\"\n    >\n        <p>This abstracts away service and subscription</p>\n        <tui-input\n            tuiAutoFocus\n            formControlName=\"exampleControl\"\n        >\n            Some value\n        </tui-input>\n        <p>\n            <button\n                tuiButton\n                type=\"submit\"\n            >\n                Ok\n            </button>\n        </p>\n    </form>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/6/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-editor\n    new\n    class=\"editor\"\n    [formControl]=\"control\"\n    [tools]=\"builtInTools\"\n></tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]=\"control.value\"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/6/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-tag\n    icon=\"tuiIconSearchLarge\"\n    iconAlign=\"left\"\n    class=\"input\"\n    [uniqueTags]=\"false\"\n    [separator]=\"customSeparator\"\n    [tuiTextfieldCleaner]=\"true\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n></tui-input-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>\n    <code>tuiTable</code>\n    directive from\n    <code>@taiga-ui/addon-table</code>\n</p>\n\n<form\n    tuiTextfieldSize=\"m\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [formGroup]=\"form\"\n>\n    <table\n        tuiTable\n        class=\"table\"\n    >\n        <thead>\n            <tr>\n                <th\n                    tuiTh\n                    class=\"name\"\n                >\n                    Name\n                </th>\n                <th tuiTh>Date</th>\n                <th tuiTh>Gender</th>\n                <th tuiTh>Quantity</th>\n                <th tuiTh>Sum, $</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td tuiTd>\n                    <tui-input formControlName=\"name\">\n                        Name\n                        <input\n                            tuiTextfield\n                            placeholder=\"Ivan Ivanov\"\n                        />\n                    </tui-input>\n                </td>\n                <td tuiTd>\n                    <tui-input-date formControlName=\"date\">Date</tui-input-date>\n                </td>\n                <td tuiTd>\n                    <tui-select formControlName=\"color\">\n                        Color\n                        <tui-data-list-wrapper\n                            *tuiDataList\n                            [items]=\"items\"\n                        ></tui-data-list-wrapper>\n                    </tui-select>\n                </td>\n                <td tuiTd>\n                    <tui-input-count formControlName=\"quantity\">Quantity</tui-input-count>\n                </td>\n                <td tuiTd>\n                    <tui-input-number\n                        formControlName=\"sum\"\n                        [readOnly]=\"true\"\n                    >\n                        Sum\n                    </tui-input-number>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-multi-select\n    class=\"input\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [tuiTextfieldCleaner]=\"true\"\n    [(ngModel)]=\"value\"\n>\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items\"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/6/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/6/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Select user\n    <tui-data-list-wrapper\n        *tuiDataList\n        size=\"l\"\n        [items]=\"items\"\n        [itemContent]=\"content\"\n        [disabledItemHandler]=\"disabledItemHandler\"\n    ></tui-data-list-wrapper>\n</tui-select>\n\n<ng-template\n    #content\n    let-data\n>\n    <div class=\"template\">\n        <tui-avatar\n            size=\"xs\"\n            class=\"avatar\"\n            [avatarUrl]=\"data.avatarUrl || null\"\n            [text]=\"data.toString()\"\n        ></tui-avatar>\n        <div class=\"name\">{{ data }}</div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/6/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/6/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"toggle()\"\n>\n    Show/Hide\n</button>\n<ng-template\n    [tuiSheetOptions]=\"options\"\n    [(tuiSheet)]=\"open\"\n>\n    <ng-container waIntersectionObserver>\n        <h2 tuiSheetHeading>\n            <label\n                tuiLabel\n                label=\"Monty Python\"\n            >\n                And the Holy Grail\n            </label>\n        </h2>\n        <img\n            *ngFor=\"let image of images\"\n            #img\n            alt=\"\"\n            class=\"image\"\n            [src]=\"image\"\n            (waIntersectionObservee)=\"onIntersection($event, img)\"\n        />\n    </ng-container>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"zoom-controller\">\n    <button\n        tuiIconButton\n        appearance=\"flat\"\n        tuiMode=\"onDark\"\n        size=\"s\"\n        icon=\"tuiIconMinus\"\n        class=\"minus\"\n        (click)=\"change(-0.25)\"\n    ></button>\n    <label\n        tuiSliderThumbLabel\n        class=\"slider-wrapper\"\n    >\n        <div\n            tuiHintMode=\"onDark\"\n            tuiHintDirection=\"top-middle\"\n            [tuiManualHint]=\"hint\"\n            [tuiManualHintShow]=\"!!(showHint$ | async)\"\n        ></div>\n\n        <ng-template #hint>\n            {{ value | percent }}\n        </ng-template>\n\n        <input\n            tuiSlider\n            type=\"range\"\n            step=\"any\"\n            [min]=\"min\"\n            [max]=\"max\"\n            [(ngModel)]=\"value\"\n        />\n    </label>\n    <button\n        tuiIconButton\n        appearance=\"flat\"\n        tuiMode=\"onDark\"\n        size=\"s\"\n        icon=\"tuiIconPlus\"\n        class=\"plus\"\n        (click)=\"change(+0.25)\"\n    ></button>\n</article>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/6/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/6/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tabs [(activeItemIndex)]=\"activeItemIndex\">\n    <ng-container *ngFor=\"let step of steps; let last = last\">\n        <button\n            tuiTab\n            class=\"step\"\n            [disabled]=\"last\"\n            (click)=\"onClick(step)\"\n        >\n            {{ step }}\n        </button>\n        <tui-svg\n            *ngIf=\"!last\"\n            src=\"tuiIconChevronRight\"\n            class=\"separator\"\n        ></tui-svg>\n    </ng-container>\n</tui-tabs>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"2\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/6/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/6/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-text-area\n    tuiHintContent=\"معلومات شخصيه\"\n    tuiHintDirection=\"bottom-right\"\n    class=\"input\"\n    [tuiTextfieldCleaner]=\"true\"\n    [tuiTextfieldMaxLength]=\"100\"\n    [(ngModel)]=\"value\"\n>\n    مونتى بايثون\n</tui-text-area>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/6/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/6/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tree\n    *ngFor=\"let item of data.children\"\n    [tuiTreeController]=\"true\"\n    [value]=\"item\"\n    [content]=\"content\"\n    [childrenHandler]=\"handler\"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    <tui-checkbox-labeled\n        class=\"tui-space_vertical-2 tui-space_left-1\"\n        [ngModel]=\"item | tuiMapper: getValue:map\"\n        (ngModelChange)=\"onChecked(item, $event)\"\n    >\n        {{ item.text }}\n    </tui-checkbox-labeled>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/6/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/6/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"tui-list tui-list_small\">\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Live workshop</div>\n        <div class=\"tui-list__description\">\n            For any number of employees with advanced Angular knowledge that keeps on growing\n        </div>\n    </li>\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Interactive examples</div>\n        <div class=\"tui-list__description\">All our chapters for your employees with lifetime access</div>\n    </li>\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Case analysis</div>\n        <div class=\"tui-list__description\">\n            We can take a look at your projects to define problems and explain how to fix them\n        </div>\n    </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table\n    tuiTable\n    class=\"table\"\n    [columns]=\"columns\"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                tuiTh\n                [resizable]=\"true\"\n            >\n                Name\n            </th>\n            <th tuiTh>Price</th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]=\"data\"\n    >\n        <tr\n            *tuiRow=\"let item of data; let i = index\"\n            tuiTr\n        >\n            <td\n                *tuiCell=\"'name'\"\n                tuiTd\n            >\n                {{ item.name }}\n            </td>\n            <td\n                *tuiCell=\"'price'\"\n                tuiTd\n            >\n                <tui-input-number\n                    tuiHintDirection=\"right\"\n                    [postfix]=\"'UGX' | tuiCurrency\"\n                    [formControl]=\"controls[i]\"\n                    [tuiHint]=\"[] | tuiFieldErrorContent\"\n                >\n                    Price\n                </tui-input-number>\n            </td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/6/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/6/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    size=\"s\"\n    (click)=\"addColumn()\"\n>\n    Add column\n</button>\n<button\n    tuiButton\n    size=\"s\"\n    class=\"tui-space_left-2\"\n    (click)=\"addRows()\"\n>\n    Add row\n</button>\n\n<table\n    tuiTable\n    class=\"table tui-space_top-3\"\n    [columns]=\"columns\"\n>\n    <thead>\n        <tr tuiThGroup>\n            <ng-container *ngFor=\"let col of columns\">\n                <th\n                    *tuiHead=\"col\"\n                    tuiTh\n                >\n                    {{ col }}\n                </th>\n            </ng-container>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]=\"data\"\n    >\n        <tr\n            *tuiRow=\"let item of data\"\n            tuiTr\n        >\n            <ng-container *ngFor=\"let col of columns\">\n                <td\n                    *tuiCell=\"col\"\n                    tuiTd\n                >\n                    {{ item[col] }}\n                </td>\n            </ng-container>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/6/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("'{{ formattedNumber }}' = formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input>\n        <tui-input\n            formControlName=\"decimalLimit\"\n            class=\"tui-space_top-2\"\n        >\n            decimalLimit\n        </tui-input>\n        <tui-input\n            formControlName=\"decimalSeparator\"\n            class=\"tui-space_top-2\"\n        >\n            decimalSeparator\n        </tui-input>\n        <tui-input\n            formControlName=\"thousandSeparator\"\n            class=\"tui-space_top-2\"\n        >\n            thousandSeparator\n        </tui-input>\n    </div>\n</form>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-6-index-html.js.map