(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-bar-set\n        class=\"bars\"\n        [value]=\"value\"\n    ></tui-bar-set>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    class=\"axes\"\n    [verticalLines]=\"4\"\n    [horizontalLines]=\"2\"\n>\n    <tui-line-chart\n        [x]=\"0\"\n        [y]=\"0\"\n        [width]=\"400\"\n        [height]=\"200\"\n        [value]=\"value\"\n        [hintContent]=\"hint\"\n    ></tui-line-chart>\n</tui-axes>\n\n<tui-axes\n    class=\"axes tui-space_top-10\"\n    [verticalLines]=\"4\"\n    [horizontalLines]=\"2\"\n>\n    <tui-line-chart\n        [x]=\"0\"\n        [y]=\"0\"\n        [width]=\"400\"\n        [height]=\"200\"\n        [value]=\"singleValue\"\n        [dots]=\"true\"\n        [hintContent]=\"hintContent\"\n    ></tui-line-chart>\n</tui-axes>\n\n<ng-template\n    #hintContent\n    let-value\n    let-index=\"index\"\n>\n    <div>Vertical: {{ value[0] }}</div>\n    <div>Horizontal: {{ value[1] }}</div>\n    <div>index: {{ index }}</div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-accordion-item class=\"container\">\n    Taiga UI lazy\n    <ng-template tuiAccordionItemContent>I'm lazy content</ng-template>\n</tui-accordion-item>\n\n<tui-accordion-item class=\"container\">\n    Taiga UI eager\n    <div tuiAccordionItemContent>I'm eager content</div>\n</tui-accordion-item>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/4/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/4/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-badge\n    status=\"success\"\n    value=\"Taiga\"\n    class=\"tui-space_right-2\"\n>\n    <tui-svg src=\"tuiIconTooltip\"></tui-svg>\n</tui-badge>\n\n<tui-badge\n    status=\"error\"\n    value=\"Taiga\"\n    class=\"tui-space_right-2\"\n>\n    <tui-svg src=\"tuiIconTooltip\"></tui-svg>\n</tui-badge>\n\n<tui-badge\n    status=\"default\"\n    class=\"tui-space_right-2\"\n>\n    <tui-svg src=\"tuiIconTooltip\"></tui-svg>\n</tui-badge>\n\n<tui-badge\n    status=\"error\"\n    value=\"Custom template\"\n    class=\"tui-space_right-2\"\n>\n    <span class=\"custom-content\"></span>\n</tui-badge>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    appearance=\"custom\"\n>\n    See LESS tab\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    size=\"m\"\n    (click)=\"onClick()\"\n>\n    Show dialog with carousel\n</button>\n\n<ng-template #header>\n    <div\n        class=\"header\"\n        [style.backgroundImage]=\"background\"\n    ></div>\n</ng-template>\n<!-- TODO: 3.0 need remove $any later -->\n<ng-template\n    [tuiDialogOptions]=\"$any({size: 's', header: header})\"\n    [(tuiDialog)]=\"open\"\n>\n    <div\n        tuiCarouselButtons\n        class=\"wrapper\"\n        (touchstart.passive.stop)=\"(0)\"\n    >\n        <button\n            tuiIconButton\n            tuiMode=\"onDark\"\n            icon=\"tuiIconChevronLeftLarge\"\n            class=\"tui-space_right-4\"\n            (click)=\"navigate(-1)\"\n        ></button>\n        <tui-carousel [(index)]=\"index\">\n            <div *tuiItem>\n                <h2>Carousel is awesome</h2>\n                <p>It can show arbitrary content and it's very easy to control</p>\n            </div>\n            <div *tuiItem>\n                <h2>Pagination</h2>\n                <p>\n                    You can use\n                    <a\n                        tuiLink\n                        routerLink=\"/components/pagination\"\n                    >\n                        Pagination\n                    </a>\n                    component with size 's' together with it\n                </p>\n            </div>\n            <div *tuiItem>\n                <h2>Buttons</h2>\n                <p>\n                    Use\n                    <code>tuiCarouselButtons</code>\n                    directive to setup navigation buttons\n                </p>\n            </div>\n        </tui-carousel>\n        <button\n            tuiIconButton\n            tuiMode=\"onDark\"\n            icon=\"tuiIconChevronRightLarge\"\n            class=\"tui-space_left-4\"\n            (click)=\"navigate(1)\"\n        ></button>\n    </div>\n    <tui-pagination\n        size=\"s\"\n        class=\"tui-space_top-4\"\n        [length]=\"3\"\n        [(index)]=\"index\"\n    ></tui-pagination>\n    <div class=\"tui-space_top-4\">\n        <button\n            tuiButton\n            appearance=\"primary\"\n            (click)=\"open = false\"\n        >\n            Got it!\n        </button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/4/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/4/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-combo-box\n    class=\"b-form\"\n    [stringify]=\"stringify\"\n    [(ngModel)]=\"value\"\n>\n    Find the best employees\n    <input\n        tuiTextfield\n        placeholder=\"Type a name\"\n    />\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items | tuiFilterByInputWith: stringify\"\n        [itemContent]=\"stringify | tuiStringifyContent\"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select\n    class=\"control\"\n    [identityMatcher]=\"identityMatcher\"\n    [valueContent]=\"valueContent\"\n    [(ngModel)]=\"value\"\n>\n    Open-source budget\n    <custom-list\n        *tuiDataList\n        [items]=\"items\"\n    ></custom-list>\n</tui-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    i18n\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3 tui-space_bottom-2\"\n    (click)=\"showDialog(long, button)\"\n>\n    Show long mobile dialog with filters\n</button>\n\n<ng-template #button>\n    <button\n        *ngIf=\"!filters\"\n        i18n\n        tuiButton\n        type=\"button\"\n        tuiPreventDefault=\"touchmove\"\n        class=\"portal\"\n        (click)=\"onFilterClick()\"\n    >\n        Filters\n    </button>\n</ng-template>\n\n<ng-template #long>\n    <div class=\"background\"></div>\n    <header\n        class=\"header\"\n        [style.transform]=\"transform\"\n        [style.width]=\"width\"\n        (tuiElasticSticky)=\"onElastic($event)\"\n    >\n        <section class=\"logo\">\n            <label class=\"date\">8 March, 23:51</label>\n            <tui-marker-icon\n                src=\"tuiIconChevronDownLarge\"\n                class=\"icon\"\n            ></tui-marker-icon>\n        </section>\n        <div class=\"wrapper\">\n            <p class=\"description\">Card payment</p>\n            <h3 class=\"title\">Sushi</h3>\n            <tui-money\n                decimal=\"always\"\n                class=\"money\"\n                [value]=\"300\"\n            ></tui-money>\n        </div>\n    </header>\n    <blockquote i18n>\n        <h1>Additional information</h1>\n        <p>\n            In user interface design for computer applications, a modal window is a graphical control element\n            subordinate to an application's main window. A modal window creates a mode that disables the main window but\n            keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal\n            window before they can return to the parent application. This avoids interrupting the workflow on the main\n            window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a\n            dialog box.\n        </p>\n    </blockquote>\n    <blockquote i18n>\n        <h1>Additional information</h1>\n        <p>\n            In user interface design for computer applications, a modal window is a graphical control element\n            subordinate to an application's main window. A modal window creates a mode that disables the main window but\n            keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal\n            window before they can return to the parent application. This avoids interrupting the workflow on the main\n            window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a\n            dialog box.\n        </p>\n    </blockquote>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-editor\n    new\n    class=\"editor\"\n    [formControl]=\"control\"\n>\n    Placeholder\n</tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket\n    class=\"socket\"\n    [content]=\"control.value\"\n></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    <div class=\"tui-form__row\">\n        <tui-input\n            formControlName=\"text\"\n            class=\"input\"\n        >\n            Enter some text\n        </tui-input>\n        <tui-field-error formControlName=\"text\"></tui-field-error>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tui-space_bottom-4\">Choose a department:</div>\n\n<div class=\"filters-with-all\">\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"m\"\n        class=\"tui-space_right-1\"\n        [appearance]=\"(buttonAppearance$ | async) || ''\"\n        (click)=\"toggleAll()\"\n    >\n        All\n    </button>\n\n    <tui-filter\n        [items]=\"items\"\n        [ngModel]=\"model$ | async\"\n        (ngModelChange)=\"onModelChange($event)\"\n    ></tui-filter>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/4/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/4/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>Directive helps to avoid extra layers of HTML</p>\n\n<form\n    tuiGroup\n    [collapsed]=\"true\"\n    [formGroup]=\"testForm\"\n>\n    <tui-radio-block\n        size=\"l\"\n        contentAlign=\"right\"\n        formControlName=\"testValue\"\n        item=\"orange\"\n    >\n        Oranges\n    </tui-radio-block>\n    <tui-radio-block\n        size=\"l\"\n        contentAlign=\"right\"\n        formControlName=\"testValue\"\n        item=\"apple\"\n    >\n        Apples\n    </tui-radio-block>\n    <tui-radio-block\n        size=\"l\"\n        contentAlign=\"right\"\n        formControlName=\"testValue\"\n        item=\"pineapple\"\n    >\n        Pineapples\n    </tui-radio-block>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/4/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/4/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n    tuiTabs\n    [(activeItemIndex)]=\"index\"\n>\n    <button tuiTab>Just a tab</button>\n    <tui-hosted-dropdown\n        tuiDropdownHover\n        [content]=\"content\"\n        [(open)]=\"open\"\n    >\n        <button\n            tuiTab\n            (tui-tab-activate.stop)=\"(0)\"\n        >\n            Hoverable/Clickable\n        </button>\n        <ng-template #content>\n            <tui-data-list (click)=\"onClick()\">\n                <button tuiOption>Option 1</button>\n                <button tuiOption>Option 2</button>\n                <button tuiOption>Option 3</button>\n            </tui-data-list>\n        </ng-template>\n    </tui-hosted-dropdown>\n    <button tuiTab>Another tab</button>\n    <button tuiTab>\n        <tui-hosted-dropdown\n            tuiDropdownAlign=\"right\"\n            tuiDropdownHover\n            [content]=\"settings\"\n            [(open)]=\"openSettings\"\n        >\n            <button\n                tuiIconButton\n                size=\"m\"\n                appearance=\"icon\"\n                icon=\"tuiIconSettingsLarge\"\n            ></button>\n        </tui-hosted-dropdown>\n\n        <ng-template #settings>\n            <div\n                class=\"settings\"\n                [formGroup]=\"testForm\"\n            >\n                <tui-toggle\n                    formControlName=\"option\"\n                    size=\"l\"\n                ></tui-toggle>\n                Turn option\n            </div>\n        </ng-template>\n    </button>\n</nav>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/index.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/index.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-date-range\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Choose dates\n</tui-input-date-range>\n\n<p>Stringified control value:</p>\n<p>\n    <code>{{ control.value }}</code>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-date-time\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Choose date and time\n</tui-input-date-time>\n\n<p>Stringified control value:</p>\n<p>\n    <code>{{ control.value }}</code>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/4/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/4/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-notification class=\"tui-space_bottom-4 b-form\">\n    If you need to set some attributes or listen to events on native\n    <code>input</code>\n    , you can put it inside with\n    <code>Textfield</code>\n    directive as shown below\n</tui-notification>\n<tui-input-date\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Choose a date\n    <input\n        tuiTextfield\n        autocomplete=\"bday\"\n    />\n</tui-input-date>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/4/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/4/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div\n        i18n\n        class=\"tui-space_bottom-1\"\n    >\n        Sync working with files, no loading state\n    </div>\n    <tui-input-file\n        size=\"l\"\n        [multiple]=\"true\"\n        [(ngModel)]=\"files\"\n    ></tui-input-file>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/4/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/4/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-files [max]=\"3\">\n    <ng-container *ngFor=\"let file of files\">\n        <tui-file\n            *tuiItem\n            state=\"normal\"\n            [file]=\"file\"\n        ></tui-file>\n    </ng-container>\n\n    <ng-container *ngFor=\"let file of rejectedFiles\">\n        <tui-file\n            *tuiItem\n            state=\"error\"\n            [file]=\"file\"\n        ></tui-file>\n    </ng-container>\n</tui-files>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/4/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/4/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-number\n    prefix=\"$\"\n    tuiHintContent=\"Using cleaner is not recommended ;)\"\n    class=\"input\"\n    [(ngModel)]=\"value\"\n>\n    Type a sum\n</tui-input-number>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-input-range\n        new\n        [min]=\"0\"\n        [max]=\"100\"\n        [segments]=\"5\"\n        [steps]=\"5\"\n        [pluralize]=\"pluralize\"\n        [formControl]=\"control\"\n    >\n        Select volume range\n    </tui-input-range>\n\n    <div class=\"ticks-labels\">\n        <span>\n            <tui-svg src=\"tuiIconSoundOff\"></tui-svg>\n        </span>\n        <span>20%</span>\n        <span>40%</span>\n        <span>60%</span>\n        <span>80%</span>\n        <span>\n            <tui-svg src=\"tuiIconSound\"></tui-svg>\n        </span>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-slider\n    tuiHintContent=\"Select the answer to see how the right custom content changes\"\n    class=\"control\"\n    [min]=\"0\"\n    [max]=\"10\"\n    [tuiTextfieldCustomContent]=\"userAnswer === 4 ? right : wrong\"\n    [(ngModel)]=\"userAnswer\"\n>\n    2+2=?\n</tui-input-slider>\n\n<ng-template #right>\n    <tui-svg\n        src=\"tuiIconCheckCircleLarge\"\n        class=\"success\"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #wrong>\n    <tui-svg\n        src=\"tuiIconCloseCircleLarge\"\n        class=\"error\"\n    ></tui-svg>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/4/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/4/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>In this sample, tags with digits are invalid</p>\n\n<tui-input-tag\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [tagValidator]=\"tagValidator\"\n    [(search)]=\"search\"\n>\n    Try it\n    <ng-container *ngIf=\"filtered.length\">\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor=\"let item of filtered\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input-tag>\n\n<tui-error\n    [formControl]=\"control\"\n    [error]=\"[] | tuiFieldError | async\"\n></tui-error>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/4/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/4/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-time formControlName=\"testValue\">Max: 47h 59m</tui-input-time>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"container\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input\n        *tuiLet=\"users$ | async as users\"\n        formControlName=\"user\"\n        [tuiTextfieldCustomContent]=\"content\"\n    >\n        User\n        <input\n            tuiTextfield\n            placeholder=\"Type your name or surname\"\n        />\n        <ng-container *ngIf=\"users.length\">\n            <tui-data-list *tuiDataList>\n                <button\n                    *ngFor=\"let user of users\"\n                    tuiOption\n                    [value]=\"user.toString()\"\n                    (click)=\"onSelected(user)\"\n                >\n                    {{ user }}\n                    <tui-avatar\n                        size=\"xs\"\n                        [avatarUrl]=\"user.avatarUrl || null\"\n                        [text]=\"user.toString()\"\n                    ></tui-avatar>\n                </button>\n            </tui-data-list>\n        </ng-container>\n    </tui-input>\n    <ng-template #avatar>\n        <tui-avatar\n            *ngIf=\"lastUser\"\n            size=\"s\"\n            [rounded]=\"true\"\n            [avatarUrl]=\"lastUser.avatarUrl || null\"\n            [text]=\"lastUser.toString()\"\n        ></tui-avatar>\n    </ng-template>\n    <tui-input\n        formControlName=\"account\"\n        class=\"tui-space_vertical-5\"\n    >\n        Account\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]=\"accounts\"\n            [itemContent]=\"accountContent\"\n        ></tui-data-list-wrapper>\n        <ng-template\n            #accountContent\n            let-account\n        >\n            <div>\n                {{ account.name }}\n                <tui-money [value]=\"account.amount\"></tui-money>\n            </div>\n        </ng-template>\n    </tui-input>\n    <tui-input-card\n        formControlName=\"card\"\n        [tuiTextfieldCleaner]=\"true\"\n        [cardSrc]=\"card\"\n    >\n        Card number\n    </tui-input-card>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/4/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/4/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    It is a long established fact that a reader\n    <a href=\"https://www.lipsum.com/\">will be distracted by the readable</a>\n    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal\n    <a tuiLink>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n        standard dummy text ever since the 1500s, when an unknown printer to\n    </a>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-loader class=\"inline-flex\">\n    <button\n        tuiButton\n        type=\"button\"\n    >\n        Loading button\n    </button>\n</tui-loader>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/4/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/4/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("You can use it inline =\n<tui-money\n    [value]=\"-12345.1\"\n    [singleColor]=\"true\"\n></tui-money>\ninto your text that is cool!\n\n<div class=\"tui-space_bottom-2\">\n    Deposit\n    <tui-money\n        [value]=\"7\"\n        [singleColor]=\"true\"\n    ></tui-money>\n    <span>,</span>\n    and continue shopping.\n</div>\n\n<div class=\"tui-space_bottom-2\">\n    (8918 + 10333.6 + 3527.78 + 805.62 + 140) =\n    <tui-money [value]=\"8918 + 10333.6 + 3527.78 + 805.62 + 140\"></tui-money>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/4/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/4/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-multi-select\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [stringify]=\"(stringify$ | async)!\"\n    (searchChange)=\"onSearch($event)\"\n>\n    <tui-data-list-wrapper\n        *tuiDataList\n        tuiMultiSelectGroup\n        [items]=\"items\"\n        [itemContent]=\"(stringify$ | async)!\"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/4/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/4/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-pagination\n    [length]=\"7\"\n    [content]=\"test\"\n></tui-pagination>\n<ng-template\n    #test\n    let-index\n>\n    {{ days[index] }}\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label\n    *ngIf=\"value$ | async as value\"\n    tuiProgressLabel\n    class=\"label-wrapper\"\n>\n    {{ value }}%\n    <progress\n        tuiProgressBar\n        [max]=\"max\"\n        [value]=\"value\"\n    ></progress>\n</label>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-progress-circle\n    size=\"xl\"\n    color=\"url(#gradient)\"\n    [max]=\"4\"\n    [value]=\"3\"\n></tui-progress-circle>\n\n<tui-progress-circle\n    size=\"l\"\n    class=\"progress\"\n    [max]=\"4\"\n    [value]=\"3\"\n></tui-progress-circle>\n\n<tui-progress-circle\n    size=\"m\"\n    class=\"progress\"\n    [max]=\"4\"\n    [value]=\"3\"\n></tui-progress-circle>\n\n<tui-progress-circle\n    size=\"s\"\n    class=\"progress\"\n    [max]=\"4\"\n    [value]=\"3\"\n></tui-progress-circle>\n\n<svg\n    width=\"0\"\n    height=\"0\"\n>\n    <defs>\n        <linearGradient\n            id=\"gradient\"\n            gradientTransform=\"rotate(95)\"\n        >\n            <stop\n                offset=\"0%\"\n                stop-color=\"var(--tui-support-02)\"\n            ></stop>\n            <stop\n                offset=\"45%\"\n                stop-color=\"var(--tui-support-14)\"\n            ></stop>\n            <stop\n                offset=\"100%\"\n                stop-color=\"var(--tui-support-12)\"\n            ></stop>\n        </linearGradient>\n    </defs>\n</svg>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/4/index.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/4/index.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-progress-segmented\n    [max]=\"5\"\n    [value]=\"3\"\n></tui-progress-segmented>\n\n<div class=\"description tui-space_top-2\">\n    <label\n        tuiLabel\n        label=\"Step\"\n    >\n        <tui-money [value]=\"100500\"></tui-money>\n    </label>\n    <label\n        tuiLabel\n        label=\"New apartment\"\n    >\n        2 times left\n    </label>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-range\n    id=\"range-with-key-steps\"\n    new\n    size=\"m\"\n    class=\"range\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [keySteps]=\"keySteps\"\n    [steps]=\"2 * segments\"\n    [segments]=\"segments\"\n    [(ngModel)]=\"value\"\n></tui-range>\n\n<div class=\"ticks-labels\">\n    <span *ngFor=\"let label of ticksLabels\">{{ label }}</span>\n</div>\n\n<p class=\"tui-space_top-12 tui-space_bottom-0\">\n    Control value:\n    <output for=\"range-with-key-steps\">\n        <code>{{ value | json }}</code>\n    </output>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select\n    #select\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Select user\n    <tui-data-list *tuiDataList>\n        <tui-opt-group label=\"Monty Python\">\n            <button\n                *ngFor=\"let python of pythons\"\n                tuiOption\n                [value]=\"python\"\n            >\n                {{ python }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group label=\"Open-source squad\">\n            <button\n                tuiOption\n                value=\"Alexander Inkin\"\n            >\n                Alexander Inkin\n            </button>\n            <button\n                tuiOption\n                value=\"Roman Sedov\"\n            >\n                Roman Sedov\n            </button>\n        </tui-opt-group>\n        <button\n            tuiOption\n            class=\"more\"\n            (click)=\"addMore(select)\"\n        >\n            <tui-svg\n                src=\"tuiIconPlusCircleLarge\"\n                class=\"tui-space_right-2\"\n            ></tui-svg>\n            Add more\n        </button>\n    </tui-data-list>\n</tui-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/4/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/4/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"toggle()\"\n>\n    Show/Hide\n</button>\n<ng-template\n    [tuiSheetOptions]=\"options\"\n    [(tuiSheet)]=\"open\"\n>\n    <h2\n        tuiSheetHeading\n        class=\"heading\"\n        (tuiElasticSticky)=\"onElastic($event)\"\n    >\n        <img\n            src=\"assets/images/angular.svg\"\n            alt=\"Angular logo\"\n            class=\"image\"\n            [style.opacity]=\"elastic * elastic * elastic\"\n            [style.transform]=\"transform\"\n        />\n        Web APIs for Angular\n    </h2>\n    <p>Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular.</p>\n    <h3>Our libraries</h3>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/common\"\n        >\n            Common\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/universal\"\n        >\n            Universal\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/audio\"\n        >\n            Audio\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/canvas\"\n        >\n            Canvas\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/geolocation\"\n        >\n            Geolocation\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/intersection-observer\"\n        >\n            Intersection Observer\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/midi\"\n        >\n            MIDI\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/mutation-observer\"\n        >\n            Mutation Observer\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/payment-request\"\n        >\n            Payment Request\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/permissions\"\n        >\n            Permissions\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/resize-observer\"\n        >\n            Resize Observer\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/speech\"\n        >\n            Speech\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/storage\"\n        >\n            Storage\n        </a>\n    </p>\n    <p>\n        <a\n            tuiLink\n            href=\"https://github.com/ng-web-apis/workers\"\n        >\n            Workers\n        </a>\n    </p>\n    <h3>Sponsor</h3>\n    <p>\n        <a\n            tuiLink\n            href=\"https://opencollective.com/ng-web-apis\"\n        >\n            Open Collective\n        </a>\n    </p>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n    tuiSlider\n    type=\"range\"\n    disabled\n    value=\"80\"\n/>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/4/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/4/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tabs-with-more\n    [itemsLimit]=\"3\"\n    [(activeItemIndex)]=\"activeItemIndex\"\n>\n    <button\n        *tuiTab\n        tuiTab\n        (click)=\"onClick('Maps')\"\n    >\n        <tui-svg\n            src=\"tuiIconCard\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Maps\n    </button>\n    <button\n        *tuiTab\n        tuiTab\n        disabled\n        (click)=\"onClick('Calls')\"\n    >\n        <tui-svg\n            src=\"tuiIconCall\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Calls\n    </button>\n    <button\n        *tuiTab\n        tuiTab\n        (click)=\"onClick('Settings')\"\n    >\n        <tui-svg\n            src=\"tuiIconSettings\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Settings\n    </button>\n    <button\n        *tuiTab\n        tuiTab\n        (click)=\"onClick('Favorite')\"\n    >\n        <tui-svg\n            src=\"tuiIconHeart\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Favorite\n    </button>\n    <button\n        *tuiTab\n        tuiTab\n        (click)=\"onClick('Trash')\"\n    >\n        <tui-svg\n            src=\"tuiIconTrash\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Trash\n    </button>\n</tui-tabs-with-more>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"4\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tags\">\n    <tui-tag\n        *ngFor=\"let tag of tags; let index = index; empty: emptyTags\"\n        size=\"l\"\n        status=\"custom\"\n        class=\"tag\"\n        [value]=\"tag\"\n        [hoverable]=\"true\"\n        [editable]=\"true\"\n        [removable]=\"true\"\n        (edited)=\"handleTagEdited($event, index)\"\n    ></tui-tag>\n</div>\n\n<ng-template #emptyTags>All tags were removed. But Taiga UI is still an awesome UI-kit library ;)</ng-template>\n\n<tui-notification\n    status=\"info\"\n    class=\"tui-space_top-2\"\n>\n    Import\n    <code>TuiForModule</code>\n    if you want to be able to pass empty list template to\n    <code>ngFor</code>\n</tui-notification>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/4/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/4/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    i18n\n    class=\"description\"\n>\n    To highlight extra characters:\n    <ul class=\"steps\">\n        <li>\n            Set\n            <code>tuiTextfieldMaxLength</code>\n        </li>\n        <li class=\"steps_optional\">\n            (Optional) Dont forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters limit\n        </li>\n    </ul>\n</div>\n\n<form\n    class=\"form tui-col_md-6\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        label=\"Write a wise thought\"\n        class=\"tui-row\"\n    >\n        <tui-text-area\n            formControlName=\"testValue1\"\n            tuiHintContent=\"it's just a joke\"\n            [expandable]=\"true\"\n            [tuiTextfieldMaxLength]=\"maxLength\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Type it\n        </tui-text-area>\n        <tui-error\n            formControlName=\"testValue1\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/4/index.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/4/index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p i18n>Modified icon</p>\n<tui-tooltip content=\"Oh, snap!\"></tui-tooltip>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/4/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/4/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tree\n    [tuiTreeController]=\"false\"\n    [map]=\"map\"\n    [value]=\"data\"\n    [content]=\"content\"\n    [childrenHandler]=\"handler\"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    {{ item.text }}\n</ng-template>\n\n<p>\n    <button\n        tuiButton\n        size=\"s\"\n        class=\"tui-space_right-2\"\n        (click)=\"toggleTopmost()\"\n    >\n        Toggle Topmost\n    </button>\n    <button\n        tuiButton\n        size=\"s\"\n        (click)=\"toggleLevel()\"\n    >\n        Toggle Top level 1\n    </button>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/4/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/4/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"tui-list tui-list_large\">\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Live workshop</div>\n        <div class=\"tui-list__description\">\n            For any number of employees with advanced Angular knowledge that keeps on growing\n        </div>\n    </li>\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Interactive examples</div>\n        <div class=\"tui-list__description\">All our chapters for your employees with lifetime access</div>\n    </li>\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Case analysis</div>\n        <div class=\"tui-list__description\">\n            We can take a look at your projects to define problems and explain how to fix them\n        </div>\n    </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <label\n        *ngFor=\"let phone of formData.controls; let i = index\"\n        tuiLabel\n        label=\"Phone number {{ i + 1 }}\"\n        formArrayName=\"phones\"\n        class=\"tui-space_bottom-4\"\n    >\n        <span class=\"row\">\n            <tui-input-phone\n                formControlName=\"{{ i }}\"\n                tuiTextfieldAutocomplete=\"off\"\n                tuiTextfieldSize=\"m\"\n                class=\"input\"\n                [tuiTextfieldLabelOutside]=\"true\"\n            ></tui-input-phone>\n            <button\n                tuiIconButton\n                type=\"button\"\n                size=\"m\"\n                title=\"Delete phone number\"\n                appearance=\"icon\"\n                icon=\"tuiIconTrash\"\n                class=\"tui-space_left-2 icon\"\n                (click)=\"removePhone(i)\"\n            ></button>\n        </span>\n        <ng-template #phoneErrorContent>Invalid phone number length</ng-template>\n        <tui-error\n            formControlName=\"{{ i }}\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <tui-error\n        formArrayName=\"phones\"\n        class=\"form-array-error\"\n        [error]=\"[] | tuiFieldError | async\"\n    ></tui-error>\n\n    <button\n        tuiButton\n        type=\"button\"\n        size=\"s\"\n        class=\"tui-space_top-4\"\n        (click)=\"addPhone()\"\n    >\n        Add a phone number\n    </button>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showNotification()\"\n>\n    Show\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p\n    tuiTextfieldSize=\"m\"\n    class=\"filters\"\n>\n    <tui-input\n        class=\"input\"\n        [tuiTextfieldCleaner]=\"true\"\n        [(ngModel)]=\"search\"\n    >\n        Find on page\n    </tui-input>\n    <tui-input-count\n        class=\"tui-space_horizontal-3\"\n        [formControl]=\"minAge\"\n    >\n        Minimum age\n    </tui-input-count>\n    <tui-hosted-dropdown [content]=\"dropdown\">\n        <button\n            tuiButton\n            size=\"m\"\n            [iconRight]=\"arrow\"\n        >\n            Columns\n        </button>\n        <ng-template #dropdown>\n            <tui-reorder\n                class=\"columns\"\n                [enabled]=\"enabled\"\n                [(items)]=\"initial\"\n                (enabledChange)=\"onEnabled($event)\"\n            ></tui-reorder>\n        </ng-template>\n    </tui-hosted-dropdown>\n</p>\n<tui-loader\n    [overlay]=\"true\"\n    [showLoader]=\"!!(loading$ | async)\"\n>\n    <table\n        *tuiLet=\"data$ | async as data\"\n        tuiTable\n        class=\"table\"\n        [columns]=\"columns\"\n        [direction]=\"(direction$ | async) || 1\"\n        [tuiSortBy]=\"sorter$ | async\"\n        (tuiSortByChange)=\"sorter$.next($event!)\"\n        (directionChange)=\"direction$.next($event)\"\n    >\n        <thead>\n            <tr tuiThGroup>\n                <th\n                    *tuiHead=\"'name'\"\n                    tuiTh\n                    tuiSortable\n                >\n                    Name\n                </th>\n                <th\n                    *tuiHead=\"'dob'\"\n                    tuiTh\n                    tuiSortable\n                >\n                    Date of Birth\n                </th>\n                <th\n                    *tuiHead=\"'age'\"\n                    tuiTh\n                    tuiSortable\n                >\n                    Age\n                </th>\n            </tr>\n        </thead>\n        <tbody\n            tuiTbody\n            [data]=\"data\"\n        >\n            <tr\n                *tuiRow=\"let item of data\"\n                tuiTr\n            >\n                <td\n                    *tuiCell=\"'name'\"\n                    tuiTd\n                    [class.match]=\"isMatch(item.name)\"\n                >\n                    {{ item.name }}\n                </td>\n                <td\n                    *tuiCell=\"'dob'\"\n                    tuiTd\n                    [class.match]=\"isMatch(item.dob)\"\n                >\n                    {{ item.dob }}\n                </td>\n                <td\n                    *tuiCell=\"'age'\"\n                    tuiTd\n                    [class.match]=\"isMatch(getAge(item))\"\n                >\n                    {{ getAge(item) }}\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td [colSpan]=\"columns.length\">\n                    <tui-table-pagination\n                        class=\"tui-space_top-2\"\n                        [total]=\"(total$ | async) || 0\"\n                        (pageChange)=\"onPage($event)\"\n                        (sizeChange)=\"onSize($event)\"\n                    ></tui-table-pagination>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</tui-loader>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("'{{ capitalized }}' = capitalize(value);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/4/index.html":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/4/index.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ quantized }} = quantize(value, quantum);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input-number\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number\n            formControlName=\"quantum\"\n            class=\"tui-space_top-2\"\n        >\n            quantum\n        </tui-input-number>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("'{{ paymentSystem }}' = getPaymentSystem(cardNumber);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-select\n            formControlName=\"cardNumber\"\n            class=\"tui-space_top-2\"\n        >\n            Choose card number\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]=\"items\"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-index-html.js.map