(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/5/index.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/5/index.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-bar-set-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBarSetExample5 {\n    readonly value = [45, 30, 20, 12, 6];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-line-chart-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample5 {\n    readonly values: TuiPoint[][] = [\n        [\n            [50, 50],\n            [100, 75],\n            [150, 50],\n            [200, 150],\n            [250, 155],\n            [300, 190],\n            [350, 90],\n        ],\n        [\n            [50, 40],\n            [100, 60],\n            [150, 90],\n            [200, 120],\n            [250, 150],\n            [300, 110],\n            [350, 130],\n        ],\n        [\n            [50, 30],\n            [100, 90],\n            [150, 80],\n            [200, 50],\n            [250, 130],\n            [300, 190],\n            [350, 150],\n        ],\n    ];\n\n    readonly hint: TuiStringHandler<TuiContextWithImplicit<readonly TuiPoint[]>> = ({\n        $implicit,\n    }) => `${$implicit[0][0]} items:\\n\\n${$implicit.map(([_, y]) => y).join(`$\\n`)}$`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/5/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/5/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiAppearance, tuiButtonOptionsProvider} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-button-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    providers: [\n        tuiButtonOptionsProvider({\n            shape: `rounded`,\n            appearance: TuiAppearance.Outline,\n            size: `m`,\n        }),\n    ],\n})\nexport class TuiButtonExample5 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-combo-box-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiComboBoxExample5 {\n    value = null;\n\n    readonly countries = [\n        `Afghanistan`,\n        `Albania`,\n        `Algeria`,\n        `American Samoa`,\n        `Andorra`,\n        `Angola`,\n        `Anguilla`,\n        `Antarctica`,\n        `Antigua and Barbuda`,\n        `Argentina`,\n        `Armenia`,\n        `Aruba`,\n        `Australia`,\n        `Austria`,\n        `Azerbaijan`,\n        `Bahamas`,\n        `Bahrain`,\n        `Bangladesh`,\n        `Barbados`,\n        `Belarus`,\n        `Belgium`,\n        `Belize`,\n        `Benin`,\n        `Bermuda`,\n        `Bhutan`,\n        `Bolivia`,\n        `Bonaire, Sint Eustatius and Saba`,\n        `Bosnia and Herzegovina`,\n        `Botswana`,\n        `Bouvet Island`,\n        `Brazil`,\n        `British Indian Ocean Territory`,\n        `Brunei Darussalam`,\n        `Bulgaria`,\n        `Burkina Faso`,\n        `Burundi`,\n        `Cabo Verde`,\n        `Cambodia`,\n        `Cameroon`,\n        `Canada`,\n        `Cayman Islands`,\n        `Central African Republic`,\n        `Chad`,\n        `Chile`,\n        `China`,\n        `Christmas Island`,\n        `Cocos (Keeling) Islands`,\n        `Colombia`,\n        `Comoros`,\n        `Congo`,\n        `Cook Islands`,\n        `Costa Rica`,\n        `Croatia`,\n        `Cuba`,\n        `Curaçao`,\n        `Cyprus`,\n        `Czechia`,\n        `Côte d'Ivoire`,\n        `Denmark`,\n        `Djibouti`,\n        `Dominica`,\n        `Dominican Republic`,\n        `Ecuador`,\n        `Egypt`,\n        `El Salvador`,\n        `Equatorial Guinea`,\n        `Eritrea`,\n        `Estonia`,\n        `Eswatini`,\n        `Ethiopia`,\n        `Falkland Islands`,\n        `Faroe Islands`,\n        `Fiji`,\n        `Finland`,\n        `France`,\n        `French Guiana`,\n        `French Polynesia`,\n        `French Southern Territories`,\n        `Gabon`,\n        `Gambia`,\n        `Georgia`,\n        `Germany`,\n        `Ghana`,\n        `Gibraltar`,\n        `Greece`,\n        `Greenland`,\n        `Grenada`,\n        `Guadeloupe`,\n        `Guam`,\n        `Guatemala`,\n        `Guernsey`,\n        `Guinea`,\n        `Guinea-Bissau`,\n        `Guyana`,\n        `Haiti`,\n        `Heard Island and McDonald Islands`,\n        `Holy See`,\n        `Honduras`,\n        `Hong Kong`,\n        `Hungary`,\n        `Iceland`,\n        `India`,\n        `Indonesia`,\n        `Iran`,\n        `Iraq`,\n        `Ireland`,\n        `Isle of Man`,\n        `Israel`,\n        `Italy`,\n        `Jamaica`,\n        `Japan`,\n        `Jersey`,\n        `Jordan`,\n        `Kazakhstan`,\n        `Kenya`,\n        `Kiribati`,\n        `Korea`,\n        `Kuwait`,\n        `Kyrgyzstan`,\n        `Lao People's Democratic Republic`,\n        `Latvia`,\n        `Lebanon`,\n        `Lesotho`,\n        `Liberia`,\n        `Libya`,\n        `Liechtenstein`,\n        `Lithuania`,\n        `Luxembourg`,\n        `Macao`,\n        `Madagascar`,\n        `Malawi`,\n        `Malaysia`,\n        `Maldives`,\n        `Mali`,\n        `Malta`,\n        `Marshall Islands`,\n        `Martinique`,\n        `Mauritania`,\n        `Mauritius`,\n        `Mayotte`,\n        `Mexico`,\n        `Micronesia`,\n        `Moldova`,\n        `Monaco`,\n        `Mongolia`,\n        `Montenegro`,\n        `Montserrat`,\n        `Morocco`,\n        `Mozambique`,\n        `Myanmar`,\n        `Namibia`,\n        `Nauru`,\n        `Nepal`,\n        `Netherlands`,\n        `New Caledonia`,\n        `New Zealand`,\n        `Nicaragua`,\n        `Niger`,\n        `Nigeria`,\n        `Niue`,\n        `Norfolk Island`,\n        `Northern Mariana Islands`,\n        `Norway`,\n        `Oman`,\n        `Pakistan`,\n        `Palau`,\n        `Palestine, State of`,\n        `Panama`,\n        `Papua New Guinea`,\n        `Paraguay`,\n        `Peru`,\n        `Philippines`,\n        `Pitcairn`,\n        `Poland`,\n        `Portugal`,\n        `Puerto Rico`,\n        `Qatar`,\n        `Republic of North Macedonia`,\n        `Romania`,\n        `Russian Federation`,\n        `Rwanda`,\n        `Réunion`,\n        `Saint Barthélemy`,\n        `Saint Helena`,\n        `Saint Kitts and Nevis`,\n        `Saint Lucia`,\n        `Saint Martin`,\n        `Saint Pierre and Miquelon`,\n        `Saint Vincent and the Grenadines`,\n        `Samoa`,\n        `San Marino`,\n        `Sao Tome and Principe`,\n        `Saudi Arabia`,\n        `Senegal`,\n        `Serbia`,\n        `Seychelles`,\n        `Sierra Leone`,\n        `Singapore`,\n        `Sint Maarten (Dutch part)`,\n        `Slovakia`,\n        `Slovenia`,\n        `Solomon Islands`,\n        `Somalia`,\n        `South Africa`,\n        `South Georgia`,\n        `South Sudan`,\n        `Spain`,\n        `Sri Lanka`,\n        `Sudan`,\n        `Suriname`,\n        `Svalbard and Jan Mayen`,\n        `Sweden`,\n        `Switzerland`,\n        `Syrian Arab Republic`,\n        `Taiwan`,\n        `Tajikistan`,\n        `Tanzania, United Republic of`,\n        `Thailand`,\n        `Timor-Leste`,\n        `Togo`,\n        `Tokelau`,\n        `Tonga`,\n        `Trinidad and Tobago`,\n        `Tunisia`,\n        `Turkey`,\n        `Turkmenistan`,\n        `Turks and Caicos Islands`,\n        `Tuvalu`,\n        `Uganda`,\n        `Ukraine`,\n        `United Arab Emirates`,\n        `United Kingdom`,\n        `United States of America`,\n        `Uruguay`,\n        `Uzbekistan`,\n        `Vanuatu`,\n        `Venezuela`,\n        `Viet Nam`,\n        `Virgin Islands (British)`,\n        `Virgin Islands (U.S.)`,\n        `Wallis and Futuna`,\n        `Western Sahara`,\n        `Yemen`,\n        `Zambia`,\n        `Zimbabwe`,\n        `Åland Islands`,\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/5/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/5/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk/date-time';\n\n@Component({\n    selector: `tui-data-list-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample5 {\n    dropdownOpen = false;\n    dateValue: TuiDay = new TuiDay(2020, 0, 1);\n    euro = 87; // 1 euro = 87 rub\n    dollar = 75; // 1 dollar = 75 rub\n\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(`mail@mail.ru`),\n    });\n\n    readonly moneyForm = new FormGroup({\n        moneyValue: new FormControl(1000),\n    });\n\n    rangeValue = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    get testValue(): string {\n        return this.testForm.get(`testValue`)?.value;\n    }\n\n    get moneyValue(): number {\n        return Number(this.moneyForm.get(`moneyValue`)?.value) || 0;\n    }\n\n    onDayClick(day: TuiDay): void {\n        this.dateValue = day;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-dialog-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent5 {\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    onClick(\n        content: PolymorpheusContent<TuiDialogContext>,\n        header: PolymorpheusContent,\n        size: TuiDialogSize,\n    ): void {\n        this.dialogService\n            .open(content, {\n                label: `What a cool library set`,\n                header,\n                size,\n            })\n            .subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/5/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/5/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-5`,\n    templateUrl: `./index.html`,\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(`@tiptap/starter-kit`).then(({default: module}) => module),\n                import(`@tiptap/extension-placeholder`).then(({Placeholder}) =>\n                    Placeholder.configure({\n                        emptyNodeClass: `t-editor-placeholder`,\n                        placeholder: `Type '/' for command`, // Notion like\n                        includeChildren: true,\n                    }),\n                ),\n                import(`@taiga-ui/addon-editor/extensions/group`).then(\n                    ({createGroupExtension}) =>\n                        createGroupExtension({nested: false, createOnEnter: true}),\n                ),\n            ],\n        },\n    ],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiEditorNewExample5 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<div data-type=\"group\"><p>This is a boring paragraph.</p></div><div data-type=\"group\"><p>And another draggable paragraph.</p></div><div data-type=\"group\"><p>Let’s finish with a boring paragraph.</p></div>`,\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/5/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/5/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\nimport {interval} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\nexport function maxLengthValidator(context: {requiredLength: string}): string {\n    return `Maximum length — ${context.requiredLength}`;\n}\n\nexport function minLengthValidator(context: {requiredLength: string}): string {\n    return `Minimum length — ${context.requiredLength}`;\n}\n\n@Component({\n    selector: `tui-field-error-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: `Enter this!`,\n                email: `Enter a valid email`,\n                maxlength: maxLengthValidator,\n                minlength: minLengthValidator,\n                min: interval(2000).pipe(\n                    scan(acc => !acc, false),\n                    map(val => (val ? `Fix please` : `Min number 3`)),\n                    startWith(`Min number 3`),\n                ),\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorExample5 {\n    readonly testValue1 = new FormControl(``, [\n        Validators.minLength(4),\n        Validators.maxLength(4),\n    ]);\n\n    readonly testValue2 = new FormControl(``, [Validators.required, Validators.email]);\n\n    readonly testValue3 = new FormControl(2, [Validators.min(3)]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: this.testValue2,\n        testValue3: this.testValue3,\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample5 {\n    readonly nativeDateControl = new FormControl(new Date(2022, 0, 26));\n    readonly defaultControl = new FormControl(new TuiDay(2022, 0, 26));\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-files-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample5 {\n    readonly control = new FormControl();\n\n    readonly file: TuiFileLike = {\n        name: `custom.txt`,\n    };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/5/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/5/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-input-number-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {decimalSeparator: `,`, thousandSeparator: `.`},\n        },\n    ],\n})\nexport class TuiInputNumberExample5 {\n    value = 123.56;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-range-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputRangeExample5 {\n    readonly control = new FormControl([100_000, 500_000]);\n    readonly max = 1_000_000;\n    readonly min = 0;\n    readonly totalSteps = 100;\n    readonly ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];\n    readonly segments = this.ticksLabels.length - 1;\n\n    readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [0, this.min],\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n        [100, this.max],\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-tag-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample5 {\n    value = [`گراهام چپمن`, `جان کلیز`];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/5/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/5/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-time-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: `HH:MM`,\n            maxValues: {HH: 11, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport class TuiInputTimeExample5 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n        isPm: new FormControl(false),\n    });\n\n    get postfix(): string {\n        return this.testForm.value?.isPm ? `PM` : `AM`;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample5 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(`mail@mail.ru`),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/5/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/5/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-money-example-5`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {\n                decimalSeparator: `.`,\n                thousandSeparator: `,`,\n                zeroPadding: true,\n            },\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMoneyExample5 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/5/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/5/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-multi-select-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample5 {\n    readonly jedi: readonly string[] = [\n        `Luke Skywalker`,\n        `Princess Leia`,\n        `Han Solo`,\n        `Obi-Wan Kenobi`,\n        `Yoda`,\n    ];\n\n    readonly sith: readonly string[] = [`Emperor`, `Darth Vader`, `Darth Maul`];\n\n    value: readonly string[] = [this.jedi[0]];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-progress-bar-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample5 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/5/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/5/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit, tuiPure, TuiStringHandler} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\ninterface Python {\n    readonly id: number;\n    readonly name: string;\n}\n\nconst ITEMS: readonly Python[] = [\n    {id: 42, name: `John Cleese`},\n    {id: 237, name: `Eric Idle`},\n    {id: 666, name: `Michael Palin`},\n    {id: 123, name: `Terry Gilliam`},\n    {id: 777, name: `Terry Jones`},\n    {id: 999, name: `Graham Chapman`},\n];\n\n@Component({\n    selector: `tui-select-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample5 {\n    value = 42;\n\n    // Server request for items imitation\n    readonly items$ = of(ITEMS).pipe(delay(3000));\n\n    @tuiPure\n    stringify(\n        items: readonly Python[],\n    ): TuiStringHandler<TuiContextWithImplicit<number>> {\n        const map = new Map(items.map(({id, name}) => [id, name] as [number, string]));\n\n        return ({$implicit}: TuiContextWithImplicit<number>) => map.get($implicit) || ``;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/5/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/5/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\nconst FRAMES = 166;\n\n@Component({\n    selector: `tui-sheet-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample5 {\n    open = false;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        stops: [`4.5rem`],\n    };\n\n    toggle(): void {\n        this.open = !this.open;\n    }\n\n    getTransform(y: number | null): string {\n        const frame = Math.round((y || 0) / 2);\n        const looped = frame % FRAMES;\n        const percent = (100 / FRAMES) * looped;\n\n        return `translate3d(0, -${percent}%, 0)`;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/5/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/5/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tabs-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample5 {\n    readonly collaborators = [`Carol Cleveland`, `Neil Innes`];\n\n    readonly tabs = [\n        `John Cleese`,\n        `Eric Idle`,\n        this.collaborators,\n        `Michael Palin`,\n        `Terry Jones`,\n        `Terry Gilliam`,\n        `Graham Chapman`,\n    ];\n\n    activeElement = String(this.tabs[0]);\n\n    open = false;\n\n    get activeItemIndex(): number {\n        if (this.collaborators.includes(this.activeElement)) {\n            return this.tabs.indexOf(this.collaborators);\n        }\n\n        return this.tabs.indexOf(this.activeElement);\n    }\n\n    stop(event: Event): void {\n        // We need to stop tab custom event so parent component does not think its active\n        event.stopPropagation();\n    }\n\n    onClick(activeElement: string): void {\n        this.activeElement = activeElement;\n        this.open = false;\n    }\n\n    isString(tab: unknown): tab is string {\n        return typeof tab === `string`;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/5/index.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/5/index.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiTagOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-tag-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiTagOptionsProvider({\n            size: `l`,\n            status: `success`,\n        }),\n    ],\n})\nexport class TuiTagExample5 {\n    tag = `Hello`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/5/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/5/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-text-area-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextAreaExample5 {\n    value = ``;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/5/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/5/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\nimport {TUI_TREE_CONTENT} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {FoldersComponent} from './content';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: `tui-tree-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`index.less`],\n    providers: [\n        {\n            provide: TUI_TREE_CONTENT,\n            useValue: new PolymorpheusComponent(FoldersComponent),\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample5 {\n    readonly data: TreeNode = {\n        text: `Topmost`,\n        children: [\n            {\n                text: `Top level 1`,\n                children: [\n                    {\n                        text: `Another item`,\n                        children: [\n                            {text: `Next level 1`},\n                            {text: `Next level 2`},\n                            {text: `Next level 3`},\n                        ],\n                    },\n                ],\n            },\n            {text: `Top level 2`},\n            {\n                text: `Top level 3`,\n                children: [{text: `Test 1`}, {text: `Test 2`}],\n            },\n        ],\n    };\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {\n    AbstractControl,\n    AsyncValidatorFn,\n    FormBuilder,\n    FormGroup,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS, TuiValidationError} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(isCypress: boolean): AsyncValidatorFn {\n    return (field: AbstractControl) => {\n        return field.value && latinChars.test(field.value)\n            ? of(null)\n            : of({\n                  error: new TuiValidationError(`Only latin letters allowed`),\n              }).pipe(isCypress ? delay(0) : delay(5000));\n    };\n}\n\n@Component({\n    selector: `tui-field-error-pipe-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorPipeExample5 {\n    readonly form: FormGroup;\n\n    constructor(\n        @Inject(FormBuilder) private readonly fb: FormBuilder,\n        @Inject(TUI_IS_CYPRESS) isCypress: boolean,\n    ) {\n        this.form = this.fb.group({\n            text: [`русский текст`, Validators.required],\n        });\n\n        this.form.controls[`text`].setAsyncValidators(asyncValidatorFn(isCypress));\n        this.form.controls[`text`].markAsTouched();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiNotification} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';\nimport {CustomLabelComponent} from './custom-label/custom-label.component';\n\n@Component({\n    selector: `tui-alerts-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent5 {\n    readonly notification: Observable<void>;\n    readonly notificationWithCustomLabel: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alertService: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alertService\n            .open(\n                new PolymorpheusComponent(\n                    AlertExampleWithCustomLabelComponent,\n                    this.injector,\n                ),\n                {\n                    label: ({$implicit}: TuiContextWithImplicit<TuiNotification>) =>\n                        $implicit === TuiNotification.Error\n                            ? `Error label from function`\n                            : `Info label from function`,\n                    status: TuiNotification.Info,\n                    autoClose: false,\n                },\n            )\n            .pipe(takeUntil(router.events));\n\n        this.notificationWithCustomLabel = alertService\n            .open(\n                new PolymorpheusComponent(\n                    AlertExampleWithCustomLabelComponent,\n                    this.injector,\n                ),\n                {\n                    label: new PolymorpheusComponent(CustomLabelComponent, this.injector),\n                    status: TuiNotification.Warning,\n                    autoClose: false,\n                },\n            )\n            .pipe(takeUntil(router.events));\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n\n    showNotificationWithCustomLabel(): void {\n        this.notificationWithCustomLabel.subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiComparator} from '@taiga-ui/addon-table';\nimport {toInt, TuiDay} from '@taiga-ui/cdk';\n\ninterface User {\n    readonly name: string;\n    readonly dob: TuiDay;\n}\n\nconst TODAY = TuiDay.currentLocal();\nconst FIRST = [\n    `John`,\n    `Jane`,\n    `Jack`,\n    `Jill`,\n    `James`,\n    `Joan`,\n    `Jim`,\n    `Julia`,\n    `Joe`,\n    `Julia`,\n];\n\nconst LAST = [\n    `Smith`,\n    `West`,\n    `Brown`,\n    `Jones`,\n    `Davis`,\n    `Miller`,\n    `Johnson`,\n    `Jackson`,\n    `Williams`,\n    `Wilson`,\n];\n\nconst DATA: readonly User[] = Array.from({length: 300}, () => ({\n    name: `${LAST[Math.floor(Math.random() * 10)]}, ${\n        FIRST[Math.floor(Math.random() * 10)]\n    }`,\n    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),\n}));\n\n@Component({\n    selector: `tui-table-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample5 {\n    readonly data = DATA;\n\n    readonly columns = [`name`, `dob`, `age`];\n\n    readonly ageSorter: TuiComparator<User> = (a: User, b: User) => getAge(a) - getAge(b);\n\n    getAge(user: User): number {\n        return getAge(user);\n    }\n}\n\nfunction getAge({dob}: User): number {\n    const years = TODAY.year - dob.year;\n    const months = TODAY.month - dob.month;\n    const days = TODAY.day - dob.day;\n    const offset = toInt(months > 0 || (!months && days > 9));\n\n    return years + offset;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatPhone} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-format-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(`+79991234567`),\n        countryCode: new FormControl(`+7`),\n        phoneMask: new FormControl(`### ###-##-##`),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/5/index.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/5/index.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get clamped(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return clamp(value, min, max);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {isPresent} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-miscellaneous-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample5 {\n    readonly items = [`String`, `null`, `undefined`];\n\n    parametersForm = new FormGroup({\n        value: new FormControl(null),\n    });\n\n    get isPresent(): boolean {\n        const {value} = this.parametersForm.value;\n        const objectedValue = this.objectifyValue(value);\n\n        return isPresent(objectedValue);\n    }\n\n    private objectifyValue(value: string): string | null | undefined {\n        if (value === `null`) {\n            return null;\n        }\n\n        if (value === `undefined`) {\n            return undefined;\n        }\n\n        return value;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/5/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/5/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';\n\n@Component({\n    selector: `tui-token-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample5 {\n    constructor(@Inject(TUI_IS_IOS) readonly isIos: boolean) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-index-ts.js.map