(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-7-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, Injector} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {SearchDialogExampleComponent} from './search-example/search-dialog-example.component';\n\n@Component({\n    selector: `tui-dialog-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent7 {\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {}\n\n    showDialog(): void {\n        this.dialogService\n            .open(\n                new PolymorpheusComponent(SearchDialogExampleComponent, this.injector),\n                {\n                    size: `page`,\n                    closeable: true,\n                    dismissible: true,\n                },\n            )\n            .subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_MAX_IMAGE_WIDTH,\n    TUI_EDITOR_MIN_IMAGE_WIDTH,\n    TUI_EDITOR_STYLES,\n    TUI_IMAGE_LOADER,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\nimport {imageLoader} from './image-loader';\nimport {ImgbbService} from './imgbb.service';\n\n@Component({\n    selector: `tui-editor-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(\n                    ({createImageEditorExtension}) =>\n                        createImageEditorExtension(injector),\n                ),\n            ],\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n        {\n            provide: TUI_EDITOR_MIN_IMAGE_WIDTH,\n            useValue: 150,\n        },\n        {\n            provide: TUI_EDITOR_MAX_IMAGE_WIDTH,\n            useValue: 400,\n        },\n        {\n            provide: TUI_IMAGE_LOADER,\n            useFactory: imageLoader,\n            deps: [ImgbbService],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample7 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<img data-type=\"image-editor\" src=\"/assets/images/lumberjack.png\" width=\"300\"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p>`,\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/7/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/7/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-tag-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample7 {\n    value = [`Use`, `space`, `button`];\n    customSeparator = /[\\s,]/; // Use space or comma to create new tag\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample7 {\n    readonly control = new FormControl(null, [\n        Validators.required,\n        Validators.minLength(5),\n    ]);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-multi-select-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample7 {\n    value: readonly string[] = [];\n\n    readonly countries = [\n        `Afghanistan`,\n        `Albania`,\n        `Algeria`,\n        `American Samoa`,\n        `Andorra`,\n        `Angola`,\n        `Anguilla`,\n        `Antarctica`,\n        `Antigua and Barbuda`,\n        `Argentina`,\n        `Armenia`,\n        `Aruba`,\n        `Australia`,\n        `Austria`,\n        `Azerbaijan`,\n        `Bahamas`,\n        `Bahrain`,\n        `Bangladesh`,\n        `Barbados`,\n        `Belarus`,\n        `Belgium`,\n        `Belize`,\n        `Benin`,\n        `Bermuda`,\n        `Bhutan`,\n        `Bolivia`,\n        `Bonaire, Sint Eustatius and Saba`,\n        `Bosnia and Herzegovina`,\n        `Botswana`,\n        `Bouvet Island`,\n        `Brazil`,\n        `British Indian Ocean Territory`,\n        `Brunei Darussalam`,\n        `Bulgaria`,\n        `Burkina Faso`,\n        `Burundi`,\n        `Cabo Verde`,\n        `Cambodia`,\n        `Cameroon`,\n        `Canada`,\n        `Cayman Islands`,\n        `Central African Republic`,\n        `Chad`,\n        `Chile`,\n        `China`,\n        `Christmas Island`,\n        `Cocos (Keeling) Islands`,\n        `Colombia`,\n        `Comoros`,\n        `Congo`,\n        `Cook Islands`,\n        `Costa Rica`,\n        `Croatia`,\n        `Cuba`,\n        `Curaçao`,\n        `Cyprus`,\n        `Czechia`,\n        `Côte d'Ivoire`,\n        `Denmark`,\n        `Djibouti`,\n        `Dominica`,\n        `Dominican Republic`,\n        `Ecuador`,\n        `Egypt`,\n        `El Salvador`,\n        `Equatorial Guinea`,\n        `Eritrea`,\n        `Estonia`,\n        `Eswatini`,\n        `Ethiopia`,\n        `Falkland Islands`,\n        `Faroe Islands`,\n        `Fiji`,\n        `Finland`,\n        `France`,\n        `French Guiana`,\n        `French Polynesia`,\n        `French Southern Territories`,\n        `Gabon`,\n        `Gambia`,\n        `Georgia`,\n        `Germany`,\n        `Ghana`,\n        `Gibraltar`,\n        `Greece`,\n        `Greenland`,\n        `Grenada`,\n        `Guadeloupe`,\n        `Guam`,\n        `Guatemala`,\n        `Guernsey`,\n        `Guinea`,\n        `Guinea-Bissau`,\n        `Guyana`,\n        `Haiti`,\n        `Heard Island and McDonald Islands`,\n        `Holy See`,\n        `Honduras`,\n        `Hong Kong`,\n        `Hungary`,\n        `Iceland`,\n        `India`,\n        `Indonesia`,\n        `Iran`,\n        `Iraq`,\n        `Ireland`,\n        `Isle of Man`,\n        `Israel`,\n        `Italy`,\n        `Jamaica`,\n        `Japan`,\n        `Jersey`,\n        `Jordan`,\n        `Kazakhstan`,\n        `Kenya`,\n        `Kiribati`,\n        `Korea`,\n        `Kuwait`,\n        `Kyrgyzstan`,\n        `Lao People's Democratic Republic`,\n        `Latvia`,\n        `Lebanon`,\n        `Lesotho`,\n        `Liberia`,\n        `Libya`,\n        `Liechtenstein`,\n        `Lithuania`,\n        `Luxembourg`,\n        `Macao`,\n        `Madagascar`,\n        `Malawi`,\n        `Malaysia`,\n        `Maldives`,\n        `Mali`,\n        `Malta`,\n        `Marshall Islands`,\n        `Martinique`,\n        `Mauritania`,\n        `Mauritius`,\n        `Mayotte`,\n        `Mexico`,\n        `Micronesia`,\n        `Moldova`,\n        `Monaco`,\n        `Mongolia`,\n        `Montenegro`,\n        `Montserrat`,\n        `Morocco`,\n        `Mozambique`,\n        `Myanmar`,\n        `Namibia`,\n        `Nauru`,\n        `Nepal`,\n        `Netherlands`,\n        `New Caledonia`,\n        `New Zealand`,\n        `Nicaragua`,\n        `Niger`,\n        `Nigeria`,\n        `Niue`,\n        `Norfolk Island`,\n        `Northern Mariana Islands`,\n        `Norway`,\n        `Oman`,\n        `Pakistan`,\n        `Palau`,\n        `Palestine, State of`,\n        `Panama`,\n        `Papua New Guinea`,\n        `Paraguay`,\n        `Peru`,\n        `Philippines`,\n        `Pitcairn`,\n        `Poland`,\n        `Portugal`,\n        `Puerto Rico`,\n        `Qatar`,\n        `Republic of North Macedonia`,\n        `Romania`,\n        `Russian Federation`,\n        `Rwanda`,\n        `Réunion`,\n        `Saint Barthélemy`,\n        `Saint Helena`,\n        `Saint Kitts and Nevis`,\n        `Saint Lucia`,\n        `Saint Martin`,\n        `Saint Pierre and Miquelon`,\n        `Saint Vincent and the Grenadines`,\n        `Samoa`,\n        `San Marino`,\n        `Sao Tome and Principe`,\n        `Saudi Arabia`,\n        `Senegal`,\n        `Serbia`,\n        `Seychelles`,\n        `Sierra Leone`,\n        `Singapore`,\n        `Sint Maarten (Dutch part)`,\n        `Slovakia`,\n        `Slovenia`,\n        `Solomon Islands`,\n        `Somalia`,\n        `South Africa`,\n        `South Georgia`,\n        `South Sudan`,\n        `Spain`,\n        `Sri Lanka`,\n        `Sudan`,\n        `Suriname`,\n        `Svalbard and Jan Mayen`,\n        `Sweden`,\n        `Switzerland`,\n        `Syrian Arab Republic`,\n        `Taiwan`,\n        `Tajikistan`,\n        `Tanzania, United Republic of`,\n        `Thailand`,\n        `Timor-Leste`,\n        `Togo`,\n        `Tokelau`,\n        `Tonga`,\n        `Trinidad and Tobago`,\n        `Tunisia`,\n        `Turkey`,\n        `Turkmenistan`,\n        `Turks and Caicos Islands`,\n        `Tuvalu`,\n        `Uganda`,\n        `Ukraine`,\n        `United Arab Emirates`,\n        `United Kingdom`,\n        `United States of America`,\n        `Uruguay`,\n        `Uzbekistan`,\n        `Vanuatu`,\n        `Venezuela`,\n        `Viet Nam`,\n        `Virgin Islands (British)`,\n        `Virgin Islands (U.S.)`,\n        `Wallis and Futuna`,\n        `Western Sahara`,\n        `Yemen`,\n        `Zambia`,\n        `Zimbabwe`,\n        `Åland Islands`,\n    ];\n\n    get content(): string {\n        return `Selected ${this.value.length} of ${this.countries.length}`;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/7/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/7/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiValueContentContext} from '@taiga-ui/core';\n\ninterface Account {\n    readonly name: string;\n    readonly account: string;\n}\n\nconst BANK: readonly Account[] = [\n    {\n        name: `Ruble`,\n        account: `1234567890987654321`,\n    },\n    {\n        name: `Dollar`,\n        account: `1234567890987654321`,\n    },\n];\n\nconst OTHERS: readonly Account[] = [\n    {\n        name: `Bank`,\n        account: `1234567890987654321`,\n    },\n    {\n        name: `Other bank`,\n        account: `1234567890987654321`,\n    },\n    {\n        name: `Bank of America`,\n        account: `1234567890987654321`,\n    },\n];\n\nconst CASH: Account = {\n    name: `Cash`,\n    account: ``,\n};\n\n@Component({\n    selector: `tui-select-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample7 {\n    value = EMPTY_ARRAY;\n\n    readonly all = EMPTY_ARRAY;\n    readonly cash = CASH;\n    readonly bank = BANK;\n    readonly others = OTHERS;\n\n    readonly content: TuiStringHandler<TuiValueContentContext<readonly unknown[]>> = ({\n        $implicit: {length},\n    }) => (length ? `${length} accounts` : `All`);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/7/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/7/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tabs-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample7 {\n    activeItemIndex = 0;\n\n    items = Array.from({length: 5}, (_, i) => `Item #${i}`);\n\n    add(): void {\n        this.items = this.items.concat(`Item #${Date.now()}`);\n    }\n\n    remove(removed: string): void {\n        const index = this.items.indexOf(removed);\n\n        this.items = this.items.filter(item => item !== removed);\n\n        if (index <= this.activeItemIndex) {\n            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);\n        }\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/7/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/7/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHandler} from '@taiga-ui/cdk';\nimport {\n    TUI_TREE_LOADER,\n    TUI_TREE_LOADING,\n    TUI_TREE_START,\n    TuiTreeService,\n} from '@taiga-ui/kit';\n\nimport {TreeLoader} from './service';\n\nexport interface Item {\n    readonly text: string;\n    readonly children?: boolean;\n}\n\n@Component({\n    selector: `tui-tree-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        TuiTreeService,\n        {\n            provide: TUI_TREE_START,\n            useValue: {text: `Topmost`},\n        },\n        {\n            provide: TUI_TREE_LOADER,\n            useClass: TreeLoader,\n        },\n    ],\n})\nexport class TuiTreeExample7 {\n    map = new Map<Item, boolean>();\n\n    constructor(\n        @Inject(TUI_TREE_LOADING) readonly loading: unknown,\n        @Inject(TuiTreeService) readonly service: TuiTreeService<Item>,\n    ) {}\n\n    childrenHandler: TuiHandler<Item, readonly Item[]> = item =>\n        this.service.getChildren(item);\n\n    onToggled(item: Item): void {\n        this.service.loadChildren(item);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/7/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/7/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\n\n@Component({\n    selector: `tui-token-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample7 {\n    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<string[]>) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-7-index-ts.js.map