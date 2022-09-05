(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-3-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/3/index.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/3/index.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-bar-set-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBarSetExample3 {\n    readonly value = [30, -15];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-line-chart-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample3 {\n    readonly dotted: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n    ];\n\n    readonly solid: readonly TuiPoint[] = [\n        [150, 50],\n        [200, 150],\n        [250, 155],\n    ];\n\n    readonly dashed: readonly TuiPoint[] = [\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/3/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/3/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-accordion-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAccordionExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAvatarOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-avatar-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiAvatarOptionsProvider({\n            size: `l`,\n            autoColor: true,\n            rounded: true,\n        }),\n    ],\n})\nexport class TuiAvatarExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-badge-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgeExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/3/index.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badged-content/examples/3/index.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-badged-content-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgedContentExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-button-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample3 {\n    readonly arrow = TUI_ARROW;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/3/index.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/3/index.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-range-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample3 {\n    items = tuiCreateDefaultDayRangePeriods();\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/3/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/3/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TuiBaseColor, TuiColor, TuiMarkerHandler} from '@taiga-ui/core';\n\nconst TWO_DOTS: [TuiColor, TuiColor] = [TuiBaseColor.Primary, TuiBaseColor.Secondary];\nconst ONE_DOT: [TuiColor] = [TuiBaseColor.Success];\n\n@Component({\n    selector: `tui-calendar-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarExample3 {\n    value: TuiDayRange | null = null;\n\n    firstMonth = TuiMonth.currentLocal();\n\n    middleMonth = TuiMonth.currentLocal().append({month: 1});\n\n    lastMonth = TuiMonth.currentLocal().append({month: 2});\n\n    hoveredItem: TuiDay | null = null;\n\n    readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>\n        // Attention: do not create new arrays in handler, use constants intead\n        day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;\n\n    onDayClick(day: TuiDay): void {\n        if (this.value === null || !this.value.isSingleDay) {\n            this.value = new TuiDayRange(day, day);\n        }\n\n        this.value = TuiDayRange.sort(this.value.from, day);\n    }\n\n    onMonthChangeFirst(month: TuiMonth): void {\n        this.firstMonth = month;\n        this.middleMonth = month.append({month: 1});\n        this.lastMonth = month.append({month: 2});\n    }\n\n    onMonthChangeMiddle(month: TuiMonth): void {\n        this.firstMonth = month.append({month: -1});\n        this.middleMonth = month;\n        this.lastMonth = month.append({month: 1});\n    }\n\n    onMonthChangeLast(month: TuiMonth): void {\n        this.firstMonth = month.append({month: -2});\n        this.middleMonth = month.append({month: -1});\n        this.lastMonth = month;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/3/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/3/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPaymentSystem} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-card-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCardExample3 {\n    readonly paymentSystem = TuiPaymentSystem.Mir;\n    readonly brandLogo = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/3/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/3/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-carousel-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCarouselExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/3/index.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/3/index.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-checkbox-block-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxBlockExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n        testValue4: new FormControl(false),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/3/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/3/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-combo-box-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiComboBoxExample3 {\n    readonly items = [\n        `John Cleese`,\n        `Eric Idle`,\n        `Graham Chapman`,\n        `Michael Palin`,\n        `Terry Gilliam`,\n        `Terry Jones`,\n    ];\n\n    value = ``;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/3/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/3/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-data-list-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample3 {\n    value = [];\n\n    readonly burgers = [`Hamburger`, `Cheeseburger`];\n\n    readonly drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];\n\n    readonly arrow = TUI_ARROW;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-dialog-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent3 {\n    money = 1000;\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    showDialog(content: PolymorpheusContent<TuiDialogContext>): void {\n        this.dialogService.open(content).subscribe();\n    }\n\n    withdraw(): void {\n        this.money -= 100;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(\n                    m => m.StarterKit,\n                ),\n                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(m =>\n                    m.createImageEditorExtension(injector),\n                ),\n            ],\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<p>Small image</p><img data-type=\"image-editor\" src=\"assets/images/lumberjack.png\" width=\"300\"><p>Big image</p><img data-type=\"image-editor\" src=\"assets/images/big-wallpaper.jpg\" width=\"500\">`,\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst getIcon: Record<string, string> = {\n    Calendar: `tuiIconCalendarLarge`,\n    Favorite: `tuiIconStarLarge`,\n    Messages: `tuiIconCommentLarge`,\n    FAQ: `tuiIconHelpCircleLarge`,\n    Settings: `tuiIconSettingsLarge`,\n};\n\n@Component({\n    selector: `tui-filter-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample3 {\n    items = [`Calendar`, `Favorite`, `Messages`, `FAQ`, `Settings`];\n\n    form = new FormGroup({\n        filters: new FormControl([]),\n    });\n\n    getItemIcon(title: string): string {\n        return getIcon[title];\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-group-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiGroupExample3 {\n    testForm = new FormGroup({\n        testValue: new FormControl(`orange`),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/3/index.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/3/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-hosted-dropdown-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample3 {\n    open = false;\n\n    readonly items = [\n        [`By interest`, `By genre`, `By release year`, `By subject`],\n        [`Ascending`, `Descending`],\n    ];\n\n    primary = `By genre`;\n\n    ascending = false;\n\n    onClick(item: string): void {\n        if (this.items[0].includes(item)) {\n            this.primary = item;\n\n            return;\n        }\n\n        this.ascending = item === this.items[1][0];\n    }\n\n    itemIsActive(item: string): boolean {\n        return (\n            item === this.primary ||\n            (this.ascending && item === this.items[1][0]) ||\n            (!this.ascending && item === this.items[1][1])\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/3/index.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-card-grouped/examples/3/index.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-input-card-grouped-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample3 {\n    readonly control = new FormControl(null, [\n        tuiCardNumberValidator,\n        tuiCardExpireValidator,\n    ]);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/3/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/3/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputCountOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-count-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputCountOptionsProvider({\n            icons: {\n                up: `tuiIconChevronUp`,\n                down: `tuiIconChevronDown`,\n            },\n            appearance: `secondary`,\n            step: 10,\n            min: 10,\n            max: 100,\n        }),\n    ],\n})\nexport class TuiInputCountExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/3/index.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/3/index.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-range-example-3`,\n    templateUrl: `./index.html`,\n    providers: [\n        {provide: TUI_DATE_FORMAT, useValue: `YMD`},\n        {provide: TUI_DATE_SEPARATOR, useValue: `/`},\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample3 {\n    readonly control = new FormControl(\n        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n    );\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/3/index.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/3/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay, TuiTime} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-time-example-3`,\n    templateUrl: `./index.html`,\n    providers: [\n        {provide: TUI_DATE_FORMAT, useValue: `YMD`},\n        {provide: TUI_DATE_SEPARATOR, useValue: `/`},\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateTimeExample3 {\n    readonly control = new FormControl([new TuiDay(2017, 2, 15), new TuiTime(12, 30)]);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';\nimport {TuiNamedDay} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-date-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample3 {\n    from: TuiDay | null = null;\n    to: TuiDay | null = null;\n    min = new TuiDay(2017, 9, 4);\n    max = TuiDay.currentLocal();\n    items = [\n        new TuiNamedDay(\n            TUI_LAST_DAY.append({year: -1}),\n            `Until today`,\n            TuiDay.currentLocal(),\n        ),\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {combineLatest, Observable, Subject, timer} from 'rxjs';\nimport {mapTo, startWith, switchMap, takeUntil} from 'rxjs/operators';\n\nclass RejectedFile {\n    constructor(readonly file: TuiFileLike, readonly reason: string) {}\n}\n\nfunction isRejectedFile(file: unknown): file is RejectedFile {\n    return file instanceof RejectedFile;\n}\n\nfunction getRemoved<T>(oldArray: readonly T[], newArray: readonly T[]): T | null {\n    const filtered = oldArray.filter(item => !newArray.includes(item));\n\n    return filtered.length === 1 ? filtered[0] : null;\n}\n\nfunction isNarrowed<T>(oldArray: readonly T[], newArray: readonly T[]): boolean {\n    return newArray.every(item => oldArray.includes(item));\n}\n\nfunction convertRejected({file, reason}: RejectedFile): TuiFileLike {\n    return {\n        name: file.name,\n        size: file.size,\n        type: file.type,\n        content: reason,\n    };\n}\n\n@Component({\n    selector: `tui-input-file-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFileExample3 {\n    private readonly files$ = new Subject<readonly TuiFileLike[]>();\n\n    files: readonly TuiFileLike[] = [\n        {\n            name: `Loading file.txt`,\n        },\n        {\n            name: `A file with a very very long title to check that it can be cut correctly.txt`,\n            src: `https://tools.ietf.org/html/rfc675`,\n        },\n    ];\n\n    loadingFiles: readonly TuiFileLike[] = [this.files[0]];\n    rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: `File with an error.txt`,\n            content: `Something went wrong this time`,\n        },\n    ];\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {\n        this.files$\n            .pipe(\n                switchMap(files =>\n                    combineLatest(\n                        files.map(file => this.serverRequest(file).pipe(startWith(file))),\n                    ),\n                ),\n                watch(changeDetectorRef),\n                takeUntil(destroy$),\n            )\n            .subscribe(response => {\n                this.processResponse(response);\n            });\n    }\n\n    onModelChange(files: readonly TuiFileLike[]): void {\n        this.processNotification(files);\n\n        if (isNarrowed(this.files, files)) {\n            this.files = files;\n            this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));\n\n            return;\n        }\n\n        this.files = files;\n        this.loadingFiles = this.files;\n        this.files$.next(this.files);\n    }\n\n    private processNotification(files: readonly TuiFileLike[]): void {\n        const removed = getRemoved(this.files, files);\n\n        if (removed) {\n            this.alertService.open(`\"${removed.name}\" was removed`).subscribe();\n        }\n    }\n\n    private processResponse(\n        files: ReadonlyArray<RejectedFile | TuiFileLike | null>,\n    ): void {\n        this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));\n\n        const newRejectedFiles = files\n            .filter(isRejectedFile)\n            .filter(({file}) => this.files.includes(file));\n\n        if (newRejectedFiles.length === 0) {\n            return;\n        }\n\n        this.rejectedFiles = [\n            ...this.rejectedFiles,\n            ...newRejectedFiles.map(convertRejected),\n        ];\n        this.files = this.files.filter(file =>\n            newRejectedFiles.every(rejectedFile => rejectedFile.file !== file),\n        );\n    }\n\n    private serverRequest(file: TuiFileLike): Observable<RejectedFile | File | null> {\n        const delay = Math.round(Math.random() * 5000 + 500);\n        const result =\n            delay % 2\n                ? null\n                : new RejectedFile(file, `Server responded for odd number of time`);\n\n        return timer(delay).pipe(mapTo(result));\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/3/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/3/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-files-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample3 {\n    readonly control = new FormControl();\n\n    readonly files: readonly TuiFileLike[] = [\n        {\n            name: `Loaded.txt`,\n        },\n        {\n            name: `A file with a very very long title to check that it can be cut correctly.txt`,\n        },\n    ];\n\n    loadingFile: TuiFileLike | null = {\n        name: `Loading file.txt`,\n    };\n\n    readonly rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: `File with an error.txt`,\n            content: `Something went wrong this time`,\n        },\n    ];\n\n    readonly fileWithLink: TuiFileLike = {\n        name: `with link.txt`,\n        src: `https://tools.ietf.org/html/rfc675`,\n    };\n\n    removedFiles = [this.loadingFile as TuiFileLike];\n    restoredFiles: TuiFileLike[] = [];\n\n    constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) {}\n\n    removeLoading(): void {\n        this.loadingFile = null;\n    }\n\n    restore(file: TuiFileLike | null): void {\n        if (!file) {\n            return;\n        }\n\n        this.restoredFiles = [...this.restoredFiles, file];\n        this.removedFiles = this.removedFiles.filter(\n            removed => file.name !== removed?.name,\n        );\n    }\n\n    remove(file: TuiFileLike): void {\n        this.removedFiles = [...this.removedFiles, file];\n        this.restoredFiles = this.restoredFiles.filter(\n            restored => file.name !== restored?.name,\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month-range/examples/3/index.ts":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-month-range/examples/3/index.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\nimport {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-month-range-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputMonthRangeExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    readonly disabledItemHandler: TuiBooleanHandlerWithContext<\n        TuiMonth,\n        TuiMonthContext\n    > = (item: TuiMonth, context?: TuiMonthContext) => {\n        return (\n            !!context &&\n            !!context.value &&\n            context.value instanceof TuiMonthRange &&\n            !!context.value.isSingleMonth &&\n            item.month < context.value.from.month + 2\n        );\n    };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/3/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/3/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-number-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputNumberExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(Math.PI),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone/examples/3/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-phone/examples/3/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';\nimport {combineLatest, merge, Observable, of, Subject} from 'rxjs';\nimport {map, share, startWith, switchMap, tap} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly phone: string,\n        readonly avatarUrl: string | null = null,\n        readonly disabled: boolean = false,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: readonly User[] = [\n    new User(\n        `Roman`,\n        `Sedov`,\n        `+75678901234`,\n        `http://marsibarsi.me/images/1x1small.jpg`,\n    ),\n    new User(`Alex`, `Inkin`, `+75678901234`, avatar),\n];\n\n@Component({\n    selector: `tui-input-phone-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample3 {\n    private readonly search$ = new Subject<string>();\n\n    private readonly selected$ = new Subject<User>();\n\n    value = ``;\n\n    readonly user$ = merge(\n        this.selected$,\n        this.search$.pipe(\n            switchMap(value =>\n                this.request(value).pipe(\n                    map(response =>\n                        this.isFullMatch(response, value) ? response[0] : null,\n                    ),\n                ),\n            ),\n        ),\n    ).pipe(\n        tap(user => {\n            if (user) {\n                this.value = user.phone;\n            }\n        }),\n    );\n\n    readonly items$ = this.search$.pipe(\n        startWith(``),\n        switchMap(value =>\n            this.request(value).pipe(\n                map(response => (this.isFullMatch(response, value) ? [] : response)),\n            ),\n        ),\n    );\n\n    readonly placeholder$ = combineLatest(this.user$, this.search$).pipe(\n        map(([user, search]) => user || this.getPlaceholder(search)),\n        startWith(`Phone number or name`),\n    );\n\n    onSearch(search: string): void {\n        this.search$.next(search);\n    }\n\n    onClick(user: User): void {\n        this.selected$.next(user);\n    }\n\n    // Request imitation\n    @tuiPure\n    private request(query: string): Observable<readonly User[]> {\n        return of(\n            DATA.filter(\n                item =>\n                    TUI_DEFAULT_MATCHER(item, query) ||\n                    TUI_DEFAULT_MATCHER(item.phone, query),\n            ),\n        ).pipe(share());\n    }\n\n    private getPlaceholder(search: string): string {\n        if (!search) {\n            return `Phone number or name`;\n        }\n\n        if (search.startsWith(`+`)) {\n            return `Phone number`;\n        }\n\n        return `Name`;\n    }\n\n    private isFullMatch(response: readonly User[], value: string): boolean {\n        return (\n            response.length === 1 &&\n            (String(response[0]) === value || response[0].phone === value)\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/3/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/3/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-range-example-3`,\n    templateUrl: `./index.html`,\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputRangeExample3 {\n    readonly control = new FormControl([0, 7]);\n\n    // See https://angular.io/api/common/I18nPluralPipe\n    readonly pluralize = {\n        '=0': `days later`,\n        '=1': `day later`,\n        other: `days later`,\n    };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/3/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/3/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-tag-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl([`I`, `love`, `Angular`]),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-time-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            icon: `tuiIconCheckCircleLarge`,\n            mode: `HH:MM:SS`,\n            itemSize: `s`,\n        }),\n    ],\n})\nexport class TuiInputTimeExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    items1 = tuiCreateTimePeriods();\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample3 {\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(``),\n        testValue2: new FormControl(``),\n    });\n\n    readonly textMaskOptions1 = {\n        guide: false,\n        mask: [/\\d/, /\\d/, /\\d/, /\\d/, ` `, /\\d/, /\\d/, /\\d/, /\\d/, /\\d/, /\\d/],\n    };\n\n    readonly textMaskOptions2 = {\n        guide: false,\n        mask: [\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            `-`,\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            `-`,\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            `-`,\n            /\\d/,\n            /\\d/,\n        ],\n    };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/island/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-island-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiIslandExample3 {\n    bannerImage = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;\n    expanded = false;\n    index = 1;\n    testForm = new FormGroup({\n        testValue: new FormControl(``, Validators.required),\n    });\n\n    collapsingText =\n        `Lorem ipsum dolor sit amet, consectetur adipiscing elit ` +\n        `sed do eiusmod tempor incididunt ut labore et dolore ` +\n        `magna aliqua.`;\n\n    get linesLimit(): number {\n        return this.expanded ? 10 : 3;\n    }\n\n    expandText(): void {\n        this.expanded = !this.expanded;\n    }\n\n    onIndexChange(index: number): void {\n        this.index = index;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/line-clamp/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {WINDOW} from '@ng-web-apis/common';\n\n@Component({\n    selector: `tui-line-clamp-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineClampExample3 {\n    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}\n\n    getDynamicLineHeight(element: HTMLDivElement): number {\n        return parseInt(this.windowRef.getComputedStyle(element).lineHeight);\n    }\n\n    getDynamicLineLimit(element: HTMLDivElement): number {\n        return Math.floor(element.offsetHeight / 24);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/3/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/3/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-link-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLinkExample3 {\n    onClick(event: MouseEvent): void {\n        console.info(`click`, event);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-loader-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLoaderExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/3/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/marker-icon/examples/3/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-marker-icon-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMarkerIconExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-money-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMoneyExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/3/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/3/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiContextWithImplicit,\n    TuiIdentityMatcher,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\n\ninterface Hero {\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    selector: `tui-multi-select-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample3 {\n    readonly items: readonly Hero[] = [\n        {id: 1, name: `Luke Skywalker`},\n        {id: 2, name: `Leia Organa Solo`},\n        {id: 3, name: `Darth Vader`},\n        {id: 4, name: `Han Solo`},\n        {id: 5, name: `Obi-Wan Kenobi`},\n        {id: 6, name: `Yoda`},\n    ];\n\n    readonly control = new FormControl([this.items[3], this.items[4]]);\n\n    readonly stringify: TuiStringHandler<Hero | TuiContextWithImplicit<Hero>> = item =>\n        `name` in item ? item.name : item.$implicit.name;\n\n    readonly identityMatcher: TuiIdentityMatcher<Hero> = (hero1, hero2) =>\n        hero1.id === hero2.id;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-pagination-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample3 {\n    sidePadding = 3;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-pdf-viewer-example-3`,\n    templateUrl: `index.html`,\n    styleUrls: [`index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPdfViewerExample3 {\n    open = false;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/3/index.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/3/index.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {isPresent} from '@taiga-ui/cdk';\nimport {TuiDialogContext} from '@taiga-ui/core';\nimport {BehaviorSubject, Observable, of, timer} from 'rxjs';\nimport {filter, map, mapTo, startWith, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-preview-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample3 {\n    @ViewChild(`preview`)\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    readonly items = [\n        {\n            title: `some table.xlsx`,\n            hasPreview: false,\n        },\n        {\n            title: `Content #2`,\n            hasPreview: true,\n        },\n    ];\n\n    readonly index$$ = new BehaviorSubject<number>(0);\n\n    readonly item$ = this.index$$.pipe(\n        map(index => this.items[index]),\n        filter(isPresent),\n    );\n\n    readonly title$ = this.item$.pipe(map(item => item.title));\n\n    readonly contentUnavailable$ = this.item$.pipe(map(item => !item.hasPreview));\n\n    readonly imageSrc$ = this.item$.pipe(\n        switchMap(item =>\n            item.hasPreview ? this.emulateBackendRequest().pipe(startWith(``)) : of(null),\n        ),\n    );\n\n    readonly loading$ = this.imageSrc$.pipe(map(src => src === ``));\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewDialogService: PreviewDialogService,\n    ) {}\n\n    show(): void {\n        this.previewDialogService.open(this.preview || ``).subscribe();\n    }\n\n    download(): void {\n        console.info(`downloading...`);\n    }\n\n    emulateBackendRequest(): Observable<string> {\n        return timer(1500).pipe(\n            mapTo(`https://ng-web-apis.github.io/dist/assets/images/web-api.svg`),\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/3/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/3/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-progress-bar-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/3/index.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/3/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith, takeWhile} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-progress-circle-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressCircleExample3 {\n    readonly max = 100;\n    readonly value$ = this.isCypress\n        ? of(30)\n        : timer(300, 200).pipe(\n              map(i => i + 30),\n              startWith(30),\n              takeWhile(value => value <= this.max),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/3/index.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/3/index.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-progress-segmented-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressSegmentedExample3 {\n    arrayColors = [\n        `#39b54a`,\n        `#ffd450`,\n        `#ffd450`,\n        `#fcc521`,\n        `#fab619`,\n        `#f8a34d`,\n        `#e01f19`,\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/push/examples/3/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/push/examples/3/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-push-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPushExample3 {\n    open = false;\n\n    toggle(open: boolean): void {\n        this.open = open;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-block/examples/3/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-block/examples/3/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-radio-block-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioBlockExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(`example1`),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/3/index.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio-labeled/examples/3/index.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-radio-labeled-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioLabeledExample3 {\n    items = [{name: `ownership`}, {name: `lease`}, {name: `sublease`}];\n\n    testForm = new FormGroup({\n        testValue1: new FormControl(this.items[0]),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-select-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample3 {\n    readonly items = [`https://twitter.com/marsibarsi`, `https://twitter.com/waterplea`];\n\n    readonly testForm = new FormGroup({\n        email: new FormControl(null),\n        signature: new FormControl(``),\n    });\n\n    signatureVisible = false;\n\n    toggle(): void {\n        this.signatureVisible = !this.signatureVisible;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: `tui-sheet-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample3 {\n    open = false;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        stops: [`calc(5rem + 74vw)`, `calc(9rem + 74vw)`],\n        image: `https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg`,\n    };\n\n    toggle(): void {\n        this.open = !this.open;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/3/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/3/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-tabs-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample3 {\n    activeItemIndex = 0;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.alertService.open(item).subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/3/index.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/3/index.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tag-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTagExample3 {\n    tag = `Hey there`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/3/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/3/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-text-area-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(`A field`, Validators.required),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/3/index.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/3/index.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tooltip-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTooltipExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/3/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/3/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly icon?: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: `tui-tree-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample3 {\n    readonly data: TreeNode = {\n        text: `Topmost`,\n        children: [\n            {\n                text: `Top level 1`,\n                icon: `tuiIconHeart`,\n                children: [\n                    {\n                        text: `Another item`,\n                        children: [\n                            {text: `Next level 1`, icon: `tuiIconHeart`},\n                            {text: `Next level 2`, icon: `tuiIconHeart`},\n                            {text: `Next level 3`},\n                        ],\n                    },\n                ],\n            },\n            {text: `Top level 2`},\n            {\n                text: `Top level 3`,\n                children: [{text: `Test 1`}, {text: `Test 2`, icon: `tuiIconHeart`}],\n            },\n        ],\n    };\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/3/index.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-context/examples/3/index.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-dropdown-context-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownContextExample3 {\n    testForm = new FormGroup({\n        reportText: new FormControl(`Misspell HERE!`),\n    });\n\n    report(): void {\n        console.info(this.testForm.value);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/3/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/3/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {interval} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-dropdown-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample3 {\n    open = false;\n\n    value = `some data`;\n\n    showBigText = false;\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        interval(3000)\n            .pipe(watch(changeDetectorRef), takeUntil(destroy$))\n            .subscribe(() => {\n                this.showBigText = !this.showBigText;\n            });\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/media/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-media-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiMediaExample3 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;\n    }\n\n    toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/overscroll/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-overscroll-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiOverscrollExample3 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, OnInit, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nconst secretRegexTen = /^\\d{10}$/;\nconst secretRegexTwelve = /^\\d{12}$/;\n\nexport function innValidator(field: AbstractControl): unknown {\n    return field.value &&\n        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n        ? null\n        : {\n              inn: new TuiValidationError(`Secret number contains 10 or 12 digits`),\n          };\n}\n\n@Component({\n    selector: `tui-field-error-pipe-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorPipeExample3 implements OnInit {\n    @ViewChild(`errorContent`)\n    errorContent: PolymorpheusContent = ``;\n\n    @ViewChild(`bigErrorContent`)\n    bigErrorContent: PolymorpheusContent = ``;\n\n    readonly testValue2 = new FormControl(``);\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(``, [Validators.required, this.getSecretValidator()]),\n        testValue2: this.testValue2,\n    });\n\n    ngOnInit(): void {\n        this.testValue2.setValidators([Validators.required, this.companyValidator]);\n    }\n\n    private readonly companyValidator = (\n        field: AbstractControl,\n    ): ValidationErrors | null =>\n        field.value\n            ? {\n                  inn: new TuiValidationError(this.bigErrorContent),\n              }\n            : null;\n\n    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value &&\n            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n                ? null\n                : {\n                      secret: new TuiValidationError(this.errorContent),\n                  };\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter-by-input/examples/3/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter-by-input/examples/3/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-filter-by-input-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample3 {\n    readonly items = [\n        {name: `John Cleese`},\n        {name: `Eric Idle`},\n        {name: `Graham Chapman`},\n        {name: `Michael Palin`},\n        {name: `Terry Gilliam`},\n        {name: `Terry Jones`},\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly stringify = ({name}: {name: string}): string => name;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiNotification} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleComponent} from './alert-example/alert-example.component';\n\n@Component({\n    selector: `tui-alerts-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent3 {\n    readonly notification: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alertService: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alertService\n            .open<boolean>(\n                new PolymorpheusComponent(AlertExampleComponent, this.injector),\n                {\n                    label: `Question`,\n                    status: TuiNotification.Error,\n                    autoClose: false,\n                },\n            )\n            .pipe(\n                switchMap(response =>\n                    alertService.open(`Got a value — ${response}`, {\n                        label: `Information`,\n                    }),\n                ),\n                takeUntil(router.events),\n            );\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/3/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/3/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {ValidatorFn} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {defaultSort, TuiComparator} from '@taiga-ui/addon-table';\nimport {TuiDay} from '@taiga-ui/cdk';\n\ninterface Item {\n    readonly name: string;\n    readonly price: number;\n    readonly quantity: number;\n    readonly unit: string;\n    readonly date: TuiDay;\n}\n\n@Component({\n    selector: `tui-table-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample3 {\n    readonly options = {updateOn: `blur`} as const;\n\n    readonly units = [`items`, `kg`, `m`];\n\n    pythons: readonly Item[] = [\n        {\n            name: `Holy Grail`,\n            price: 999999,\n            quantity: 1,\n            unit: this.units[0],\n            date: TuiDay.currentLocal(),\n        },\n        {\n            name: `Foot`,\n            price: 29.95,\n            quantity: 5,\n            unit: this.units[2],\n            date: TuiDay.currentLocal().append({day: -42}),\n        },\n        {\n            name: `Shed`,\n            price: 499,\n            quantity: 2,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -237}),\n        },\n    ];\n\n    starwars: readonly Item[] = [\n        {\n            name: `Lightsaber`,\n            price: 4999,\n            quantity: 3,\n            unit: this.units[0],\n            date: TuiDay.currentLocal(),\n        },\n        {\n            name: `Spaceship`,\n            price: 19999,\n            quantity: 1,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -237}),\n        },\n        {\n            name: `Stormtrooper helmet`,\n            price: 14.95,\n            quantity: 5,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -42}),\n        },\n    ];\n\n    readonly columns = [`name`, `price`, `quantity`, `unit`, `total`] as const;\n\n    readonly minPrice: ValidatorFn = ({value}) =>\n        value > 400 ? null : {minPrice: `Price must be above $400`};\n\n    readonly totalSorter: TuiComparator<Item> = (a, b) =>\n        defaultSort(a.price * a.quantity, b.price * b.quantity);\n\n    getTotal({price, quantity}: Item): number {\n        return price * quantity;\n    }\n\n    onValueChange<K extends keyof Item>(\n        value: Item[K],\n        key: K,\n        current: Item,\n        data: readonly Item[],\n    ): void {\n        const updated = {...current, [key]: value};\n\n        this.pythons =\n            data === this.pythons\n                ? this.pythons.map(item => (item === current ? updated : item))\n                : this.pythons;\n\n        this.starwars =\n            data === this.starwars\n                ? this.starwars.map(item => (item === current ? updated : item))\n                : this.starwars;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/3/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/3/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {getCurrencySymbol} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-format-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = [`USD`, `RUB`, `643`, `KZT`, `051`, `KRW`, `CHF`, `EUR`, `GBP`];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return getCurrencySymbol(currency);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/3/index.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/3/index.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {normalizeToIntNumber} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample3 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get normalized(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return normalizeToIntNumber(value, min, max);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/3/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/3/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, Optional} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_FOCUSABLE_ITEM_ACCESSOR, TuiFocusableElementAccessor} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-token-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample3 {\n    constructor(\n        @Optional()\n        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)\n        readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,\n    ) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-3-index-ts.js.map