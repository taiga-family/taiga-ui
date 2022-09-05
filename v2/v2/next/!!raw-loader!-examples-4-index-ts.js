(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-bar-set-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBarSetExample4 {\n    readonly value = [30, 45, 12, 6, 20];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-line-chart-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample4 {\n    readonly value: TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n\n    readonly singleValue: TuiPoint[] = [[200, 150]];\n\n    readonly hint: TuiStringHandler<TuiContextWithImplicit<TuiPoint>> = ({$implicit}) =>\n        `Vertical: ${$implicit[1]}\\nHorizontal: ${$implicit[0]}`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-accordion-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAccordionExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/4/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/4/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-badge-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgeExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-button-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiButtonExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/carousel/examples/4/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-carousel-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCarouselExample4 {\n    open = false;\n\n    index = 0;\n\n    get background(): string {\n        switch (this.index) {\n            case 0:\n                return `url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)`;\n            case 1:\n                return `url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)`;\n            default:\n                return `url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)`;\n        }\n    }\n\n    onClick(): void {\n        this.index = 0;\n        this.open = true;\n    }\n\n    navigate(delta: number): void {\n        this.index = (this.index + delta) % 3;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/4/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/4/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-combo-box-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiComboBoxExample4 {\n    value = null;\n\n    readonly items = [\n        {name: `John`, surname: `Cleese`},\n        {name: `Eric`, surname: `Idle`},\n        {name: `Graham`, surname: `Chapman`},\n        {name: `Michael`, surname: `Palin`},\n        {name: `Terry`, surname: `Gilliam`},\n        {name: `Terry`, surname: `Jones`},\n    ];\n\n    readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiContextWithImplicit,\n    TuiIdentityMatcher,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\n\nconst INCOME = {\n    name: `Income`,\n    items: [\n        `Donations`,\n        `Product placement`,\n        `Sponsorship`,\n        `Found on the street`,\n        `Unexpected inheritance`,\n        `Investments`,\n        `Color copier`,\n    ],\n};\n\nconst EXPENSES = {\n    name: `Expenses`,\n    items: [\n        `Energy drinks`,\n        `Coffee`,\n        `Ramen`,\n        `Bills`,\n        `Back medicine`,\n        `Warhammer 40000 figurines`,\n    ],\n};\n\n@Component({\n    selector: `tui-data-list-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    styles: [\n        `\n            .control {\n                width: 320px;\n            }\n        `,\n    ],\n})\nexport class TuiDataListExample4 {\n    value = [];\n\n    readonly items = [INCOME, EXPENSES];\n\n    readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (items1, items2) =>\n        items1.length === items2.length && items1.every(item => items2.includes(item));\n\n    readonly valueContent: TuiStringHandler<TuiContextWithImplicit<readonly string[]>> =\n        ({$implicit}) => {\n            if (!$implicit.length) {\n                return `All`;\n            }\n\n            const selected = this.items.find(({items}) =>\n                this.identityMatcher($implicit, items),\n            );\n\n            return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;\n        };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, TemplateRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp, TuiPortalService} from '@taiga-ui/cdk';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-dialog-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent4 {\n    filters = false;\n\n    scale = 1;\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n        @Inject(TuiPortalService)\n        private readonly portalService: TuiPortalService,\n    ) {}\n\n    get transform(): string {\n        return `scale(${this.scale})`;\n    }\n\n    get width(): string {\n        return `calc((100% + 4rem) * ${1 / this.scale})`;\n    }\n\n    onElastic(value: number): void {\n        this.scale = clamp(value, 0.5, 1);\n    }\n\n    onFilterClick(): void {\n        this.filters = true;\n        this.dialogService.open(`Dialog with filters`).subscribe({\n            complete: () => {\n                this.filters = false;\n            },\n        });\n    }\n\n    showDialog(\n        content: PolymorpheusContent<any>,\n        button: TemplateRef<Record<string, unknown>>,\n    ): void {\n        const templateRef = this.portalService.addTemplate(button);\n\n        this.dialogService.open(content).subscribe({\n            complete: () => {\n                this.portalService.removeTemplate(templateRef);\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/4/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    defaultEditorExtensions,\n    tiptapEditorStyles,\n    TUI_EDITOR_CONTENT_PROCESSOR,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    tuiLegacyEditorConverter,\n} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: `tui-editor-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: defaultEditorExtensions,\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n        {\n            provide: TUI_EDITOR_CONTENT_PROCESSOR,\n            useValue: tuiLegacyEditorConverter,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample4 {\n    control = new FormControl(\n        // Legacy HTML markup from DB\n        `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.<p><font size=\"6\">Heading</font></p><font size=\"4\">Lorem ipsum dolor sit amet <font color=\"#ff78a7\">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style=\"background-color: rgb(163, 129, 255);\">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style=\"text-align: right;\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,\n        Validators.required,\n    );\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {\n    AbstractControl,\n    AsyncValidatorFn,\n    FormBuilder,\n    FormGroup,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS, TuiValidationError} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay, finalize} from 'rxjs/operators';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(isCypress: boolean, cd: ChangeDetectorRef): AsyncValidatorFn {\n    return (field: AbstractControl) => {\n        return field.value && latinChars.test(field.value)\n            ? of(null)\n            : of({\n                  error: new TuiValidationError(`Only latin letters allowed`),\n              }).pipe(\n                  isCypress ? delay(0) : delay(5000),\n                  finalize(() => cd.markForCheck()),\n              );\n    };\n}\n\n@Component({\n    selector: `tui-field-error-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample4 {\n    readonly form: FormGroup;\n\n    constructor(\n        @Inject(FormBuilder) private readonly fb: FormBuilder,\n        @Inject(TUI_IS_CYPRESS) isCypress: boolean,\n        @Inject(ChangeDetectorRef) cd: ChangeDetectorRef,\n    ) {\n        this.form = this.fb.group({\n            text: [`русский текст`, Validators.required],\n        });\n\n        this.form.controls[`text`].setAsyncValidators(asyncValidatorFn(isCypress, cd));\n        this.form.controls[`text`].markAsTouched();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/filter/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiAppearance} from '@taiga-ui/core';\nimport {BehaviorSubject, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nenum Department {\n    IT = `IT`,\n    HR = `HR`,\n    HeadOffice = `Heads`,\n    Delivery = `Delivery`,\n}\n\n@Component({\n    selector: `tui-filter-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample4 {\n    readonly items = Object.values(Department);\n\n    readonly filters$ = new BehaviorSubject<readonly string[]>([]);\n\n    @tuiPure\n    get model$(): Observable<readonly string[]> {\n        return this.filters$.pipe(\n            map(value => (value.length === this.items.length ? [] : value)),\n        );\n    }\n\n    @tuiPure\n    get buttonAppearance$(): Observable<TuiAppearance> {\n        return this.filters$.pipe(\n            map(value =>\n                value.length === this.items.length\n                    ? TuiAppearance.WhiteblockActive\n                    : TuiAppearance.Whiteblock,\n            ),\n        );\n    }\n\n    onModelChange(model: readonly string[]): void {\n        this.filters$.next(model);\n    }\n\n    toggleAll(): void {\n        this.filters$.next(\n            this.items.length === this.filters$.value.length ? [] : [...this.items],\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/4/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/group/examples/4/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-group-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiGroupExample4 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(``),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/4/index.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/hosted-dropdown/examples/4/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-hosted-dropdown-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample4 {\n    readonly testForm = new FormGroup({\n        option: new FormControl(false),\n    });\n\n    open = false;\n    openSettings = false;\n\n    index = 0;\n\n    onClick(): void {\n        this.open = false;\n        this.index = 1;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/index.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/index.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_DATE_RANGE_VALUE_TRANSFORMER,\n    TUI_DATE_VALUE_TRANSFORMER,\n} from '@taiga-ui/kit';\n\nimport {\n    ExampleDateTransformer,\n    getExampleDateRangeTransformer,\n} from './value-transformers';\n\n@Component({\n    selector: `tui-input-date-range-example-4`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_DATE_VALUE_TRANSFORMER,\n            useClass: ExampleDateTransformer,\n        },\n        {\n            provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,\n            deps: [TUI_DATE_VALUE_TRANSFORMER],\n            useFactory: getExampleDateRangeTransformer,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample4 {\n    readonly control = new FormControl([new Date(2018, 2, 10), new Date(2018, 3, 20)]);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/index.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';\n\nimport {ExampleDateTimeTransformer} from './value-transformer';\n\n@Component({\n    selector: `tui-input-date-time-example-4`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_DATE_TIME_VALUE_TRANSFORMER,\n            useClass: ExampleDateTimeTransformer,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateTimeExample4 {\n    readonly control = new FormControl(`19.01.2022, 12:33`);\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/4/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/4/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-date-example-4`,\n    templateUrl: `./index.html`,\n    providers: [\n        {provide: TUI_DATE_FORMAT, useValue: `YMD`},\n        {provide: TUI_DATE_SEPARATOR, useValue: `/`},\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample4 {\n    readonly control = new FormControl(new TuiDay(2017, 0, 15));\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/4/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-file/examples/4/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-file-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFileExample4 {\n    files: readonly File[] = [];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/4/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/4/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-files-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample4 {\n    height = 3;\n    readonly control = new FormControl();\n\n    readonly files: readonly TuiFileLike[] = [\n        {\n            name: `Loaded.txt`,\n        },\n        {\n            name: `one_more_file.txt`,\n        },\n        {\n            name: `one_more_file.txt`,\n        },\n        {\n            name: `one_more_file.txt`,\n        },\n        {\n            name: `one_more_file.txt`,\n        },\n        {\n            name: `one_more_file.txt`,\n        },\n        {\n            name: `last_file.txt`,\n        },\n    ];\n\n    readonly rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: `File with an error.txt`,\n        },\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/4/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/4/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-input-number-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {decimalSeparator: `.`, thousandSeparator: `,`},\n        },\n    ],\n})\nexport class TuiInputNumberExample4 {\n    value = 1234.56;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/4/index.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-range-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputRangeExample4 {\n    readonly control = new FormControl([20, 40]);\n\n    // See https://angular.io/api/common/I18nPluralPipe\n    readonly pluralize = {\n        other: `%`,\n    };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/4/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/4/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    EMPTY_ARRAY,\n    TUI_DEFAULT_MATCHER,\n    TuiBooleanHandler,\n    tuiPure,\n    TuiValidationError,\n} from '@taiga-ui/cdk';\n\nfunction createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {\n    return ({value}: AbstractControl) => {\n        const invalidTags = value ? value.filter(handler) : EMPTY_ARRAY;\n\n        return invalidTags.length > 0\n            ? {\n                  tags: new TuiValidationError(`Some tags are invalid`),\n              }\n            : null;\n    };\n}\n\nconst ITEMS = [`The Midnight`, `FM-84`, `Timecop1983`, `GUNSHIP`];\n\nfunction tagValidator(tag: string): boolean {\n    return !/\\d/.test(tag);\n}\n\n@Component({\n    selector: `tui-input-tag-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample4 {\n    search = ``;\n\n    readonly tagValidator = tagValidator;\n\n    readonly control = new FormControl([], createControlValidator(tagValidator));\n\n    get filtered(): readonly string[] {\n        return this.filterBy(this.search, this.control.value);\n    }\n\n    @tuiPure\n    private filterBy(search: string, value: readonly string[]): readonly string[] {\n        return ITEMS.filter(\n            item => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),\n        );\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/4/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/4/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-time-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: `HH:MM`,\n            postfix: `left`,\n            maxValues: {HH: 47, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport class TuiInputTimeExample4 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewChild} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\nimport {TUI_DEFAULT_MATCHER, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {map} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n        readonly accounts: Account[] = [],\n        readonly card: string = ``,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nclass Account {\n    constructor(\n        readonly id: string,\n        readonly name: string,\n        readonly amount: number,\n        readonly currency: TuiCurrency,\n        readonly cardSvg: string,\n    ) {}\n\n    toString(): string {\n        return this.name;\n    }\n}\n\nconst accountsRoman = [\n    new Account(\n        `1`,\n        `RUB`,\n        24876.55,\n        TuiCurrency.Ruble,\n        `https://ng-web-apis.github.io/dist/assets/images/common.svg`,\n    ),\n    new Account(\n        `2`,\n        `USD`,\n        335,\n        TuiCurrency.Dollar,\n        `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`,\n    ),\n];\nconst accountsAlex = [\n    new Account(\n        `3`,\n        `EUR`,\n        10000,\n        TuiCurrency.Euro,\n        `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,\n    ),\n    new Account(\n        `4`,\n        `PND`,\n        100,\n        TuiCurrency.Pound,\n        `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`,\n    ),\n];\nconst USERS = [\n    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`, accountsRoman),\n    new User(`Alex`, `Inkin`, avatar, accountsAlex, `1234123412341234`),\n    new User(`Dmitriy`, `Demenskiy`),\n    new User(`Evgeniy`, `Mamaev`),\n    new User(`Ivan`, `Ishmametiev`),\n    new User(`Igor`, `Katsuba`),\n    new User(`Yulia`, `Tsareva`),\n];\n\n@Component({\n    selector: `tui-input-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample4 {\n    @ViewChild(`avatar`)\n    private readonly avatar: PolymorpheusContent = ``;\n\n    private readonly user = new FormControl(``);\n\n    readonly testForm = new FormGroup({\n        user: this.user,\n        account: new FormControl(``),\n        card: new FormControl(``),\n    });\n\n    lastUser: User | null = null;\n\n    readonly users$ = tuiReplayedValueChangesFrom<string>(this.user).pipe(\n        map(value => {\n            const filtered = USERS.filter(user => TUI_DEFAULT_MATCHER(user, value));\n\n            if (\n                filtered.length !== 1 ||\n                String(filtered[0]).toLowerCase() !== value.toLowerCase()\n            ) {\n                return filtered;\n            }\n\n            this.onSelected(filtered[0]);\n\n            return [];\n        }),\n    );\n\n    get card(): string | null {\n        const value = this.testForm.get(`card`)!.value;\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case `0`:\n            case `1`:\n            case `2`:\n                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;\n            case `3`:\n            case `4`:\n            case `5`:\n                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;\n            case `6`:\n            case `7`:\n                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;\n            case `8`:\n            case `9`:\n            default:\n                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;\n        }\n    }\n\n    get isUserSelected(): boolean {\n        return (\n            this.lastUser !== null &&\n            this.lastUser.toString().toLowerCase() ===\n                this.testForm.get(`user`)!.value.toLowerCase()\n        );\n    }\n\n    get content(): PolymorpheusContent {\n        return this.avatar && this.isUserSelected ? this.avatar : ``;\n    }\n\n    get accounts(): Account[] {\n        return this.isUserSelected ? this.lastUser!.accounts : [];\n    }\n\n    onSelected(user: User): void {\n        this.lastUser = user;\n        this.testForm.get(`card`)!.setValue(user.card);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/4/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/link/examples/4/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-link-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLinkExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiLoaderOptionsProvider} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-loader-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiLoaderOptionsProvider({\n            size: `l`,\n            inheritColor: false,\n            overlay: true,\n        }),\n    ],\n})\nexport class TuiLoaderExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/4/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/4/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-money-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMoneyExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/4/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/4/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    isNumber,\n    TUI_DEFAULT_MATCHER,\n    TuiContextWithImplicit,\n    TuiHandler,\n} from '@taiga-ui/cdk';\nimport {Observable, Subject, timer} from 'rxjs';\nimport {map, mapTo, shareReplay, startWith, switchMap} from 'rxjs/operators';\n\nconst DICTIONARY = [\n    {id: 1, name: `Luke Skywalker`},\n    {id: 2, name: `Princess Leia`},\n    {id: 3, name: `Darth Vader`},\n    {id: 4, name: `Han Solo`},\n    {id: 5, name: `Obi-Wan Kenobi`},\n    {id: 6, name: `Yoda`},\n];\n\n@Component({\n    selector: `tui-multi-select-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiMultiSelectExample4 {\n    // Server request emulation\n    private readonly server$ = timer(5000).pipe(\n        mapTo(DICTIONARY),\n        shareReplay({bufferSize: 1, refCount: true}),\n    );\n\n    private readonly search$ = new Subject<string>();\n\n    // Items only hold IDs\n    readonly items$ = this.search$.pipe(\n        startWith(``),\n        switchMap(search =>\n            this.server$.pipe(\n                map(items =>\n                    items\n                        .filter(({name}) => TUI_DEFAULT_MATCHER(name, search))\n                        .map(({id}) => id),\n                ),\n            ),\n        ),\n        startWith(null), // <-- loading\n    );\n\n    // Stringify mapper that turns IDs to names\n    readonly stringify$: Observable<\n        TuiHandler<number | TuiContextWithImplicit<number>, string>\n    > = this.server$.pipe(\n        map(items => new Map(items.map<[number, string]>(({id, name}) => [id, name]))),\n        startWith(new Map()),\n        map(\n            map => (id: number | TuiContextWithImplicit<number>) =>\n                (isNumber(id) ? map.get(id) : map.get(id.$implicit)) || `Loading...`,\n        ),\n    );\n\n    readonly control = new FormControl([2, 3]);\n\n    onSearch(search: string | null): void {\n        this.search$.next(search || ``);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/4/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pagination/examples/4/index.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-pagination-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample4 {\n    readonly days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/4/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith, takeWhile} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-progress-bar-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample4 {\n    readonly max = 100;\n    readonly value$ = this.isCypress\n        ? of(30)\n        : timer(300, 300).pipe(\n              map(i => i + 30),\n              startWith(30),\n              takeWhile(value => value <= this.max),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-circle/examples/4/index.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-progress-circle-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressCircleExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/4/index.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-segmented/examples/4/index.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-progress-segmented-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressSegmentedExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiSelectComponent} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-select-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample4 {\n    readonly pythons = [\n        `de la Concordia «Gabo» García Márquez`,\n        `John Cleese`,\n        `Eric Idle`,\n        `Michael Palin`,\n        `Terry Gilliam`,\n        `Terry Jones`,\n        `Graham Chapman`,\n    ];\n\n    value = this.pythons[0];\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    addMore(select: TuiSelectComponent<unknown>): void {\n        select.handleOption(select.value);\n        this.alertService.open(`Add more is clicked`).subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/4/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/4/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: `tui-sheet-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample4 {\n    open = false;\n\n    elastic = 1;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        stops: [`12rem`],\n    };\n\n    get transform(): string {\n        return `scale(${this.elastic * this.elastic})`;\n    }\n\n    toggle(): void {\n        this.elastic = 1;\n        this.open = !this.open;\n    }\n\n    onElastic(elastic: number): void {\n        this.elastic = elastic;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/4/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/4/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-tabs-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample4 {\n    activeItemIndex = 0;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.alertService.open(item).subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/4/index.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tag-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTagExample4 {\n    tags: readonly string[] = [\n        `Taiga UI`,\n        `is an open-source library`,\n        `for awesome people`,\n    ];\n\n    handleTagEdited(newCaption: string, currentIndex: number): void {\n        this.tags = this.tags\n            .map((caption, index) => (index === currentIndex ? newCaption : caption))\n            .filter(Boolean);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/4/index.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/4/index.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\n\nconst LONG_TEXT_EXAMPLE = `\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n`;\n\nexport function maxLengthMessageFactory(context: {requiredLength: string}): string {\n    return `Maximum length — ${context.requiredLength}`;\n}\n\n@Component({\n    selector: `tui-text-area-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    styleUrls: [`./index.less`],\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: `Enter this!`,\n                maxlength: maxLengthMessageFactory,\n            },\n        },\n    ],\n})\nexport class TuiTextAreaExample4 {\n    readonly maxLength = 97;\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [\n            Validators.required,\n            Validators.maxLength(this.maxLength),\n        ]),\n    });\n\n    constructor() {\n        this.testForm.markAllAsTouched();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/4/index.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tooltip/examples/4/index.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiHintOptionsProvider} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-tooltip-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiHintOptionsProvider({\n            tooltipIcon: `tuiIconCameraLarge`,\n        }),\n    ],\n})\nexport class TuiTooltipExample4 {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/4/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/4/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: `tui-tree-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample4 {\n    readonly data: TreeNode = {\n        text: `Topmost`,\n        children: [\n            {\n                text: `Top level 1`,\n                children: [\n                    {\n                        text: `Another item`,\n                        children: [\n                            {text: `Next level 1`},\n                            {text: `Next level 2`},\n                            {text: `Next level 3`},\n                        ],\n                    },\n                ],\n            },\n            {text: `Top level 2`},\n            {\n                text: `Top level 3`,\n                children: [{text: `Test 1`}, {text: `Test 2`}],\n            },\n        ],\n    };\n\n    readonly map = new Map<TreeNode, boolean>();\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n\n    toggleTopmost(): void {\n        this.map.set(this.data, !this.map.get(this.data));\n    }\n\n    toggleLevel(): void {\n        this.map.set(this.data.children![0], !this.map.get(this.data.children![0]));\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormArray,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    ValidatorFn,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-field-error-pipe-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorPipeExample4 {\n    @ViewChild(`phoneErrorContent`)\n    phoneErrorContent: PolymorpheusContent = ``;\n\n    testForm = new FormGroup({\n        phones: new FormArray(\n            [new FormControl(``, [Validators.required, this.getPhoneLengthValidator()])],\n            [this.getPhoneArrayValidator()],\n        ),\n    });\n\n    get formData(): FormArray {\n        return <FormArray>this.testForm.get(`phones`);\n    }\n\n    addPhone(): void {\n        this.formData.push(new FormControl(``, this.addValidators()));\n    }\n\n    removePhone(index: number): void {\n        this.formData.removeAt(index);\n\n        let n = 0;\n\n        while (n <= 1 && this.formData.controls[n]) {\n            this.formData.controls[n].setValidators([\n                Validators.required,\n                this.getPhoneLengthValidator(),\n            ]);\n            n++;\n        }\n    }\n\n    addValidators(): ValidationErrors | null {\n        return this.formData.controls.length < 2\n            ? [Validators.required, this.getPhoneLengthValidator()]\n            : null;\n    }\n\n    private getPhoneLengthValidator(): (\n        field: AbstractControl,\n    ) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value.length !== 12\n                ? {\n                      length: new TuiValidationError(this.phoneErrorContent),\n                  }\n                : null;\n    }\n\n    private getPhoneArrayValidator(): ValidatorFn {\n        return ((array: FormArray): ValidationErrors | null =>\n            array.controls.length < 2 ||\n            (!!array.controls.filter(item => item.errors).length && array.controls.length)\n                ? {\n                      length: new TuiValidationError(\n                          `You should add at least 2 phone number`,\n                      ),\n                  }\n                : null) as ValidatorFn;\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/index.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/index.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiNotification} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleWithDataComponent} from './alert-example-with-data/alert-example-with-data.component';\n\n@Component({\n    selector: `tui-alerts-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent4 {\n    readonly notification: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alertService: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alertService\n            .open<number>(\n                new PolymorpheusComponent(AlertExampleWithDataComponent, this.injector),\n                {\n                    label: `Heading is so long that it should be shown in two lines of text`,\n                    data: 237,\n                    status: TuiNotification.Warning,\n                    autoClose: false,\n                },\n            )\n            .pipe(\n                switchMap(response =>\n                    alertService.open(`Got a value — ${response}`, {\n                        label: `Information`,\n                    }),\n                ),\n                takeUntil(router.events),\n            );\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/4/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {defaultSort, TuiComparator} from '@taiga-ui/addon-table';\nimport {\n    isPresent,\n    toInt,\n    TUI_DEFAULT_MATCHER,\n    TuiDay,\n    tuiReplayedValueChangesFrom,\n} from '@taiga-ui/cdk';\nimport {TUI_ARROW} from '@taiga-ui/kit';\nimport {BehaviorSubject, combineLatest, Observable, timer} from 'rxjs';\nimport {\n    debounceTime,\n    filter,\n    map,\n    mapTo,\n    share,\n    startWith,\n    switchMap,\n} from 'rxjs/operators';\n\ninterface User {\n    readonly name: string;\n    readonly dob: TuiDay;\n}\n\nconst TODAY = TuiDay.currentLocal();\nconst FIRST = [\n    `John`,\n    `Jane`,\n    `Jack`,\n    `Jill`,\n    `James`,\n    `Joan`,\n    `Jim`,\n    `Julia`,\n    `Joe`,\n    `Julia`,\n];\n\nconst LAST = [\n    `Smith`,\n    `West`,\n    `Brown`,\n    `Jones`,\n    `Davis`,\n    `Miller`,\n    `Johnson`,\n    `Jackson`,\n    `Williams`,\n    `Wilson`,\n];\n\ntype Key = 'name' | 'dob' | 'age';\n\nconst DATA: readonly User[] = Array.from({length: 300}, () => ({\n    name: `${LAST[Math.floor(Math.random() * 10)]}, ${\n        FIRST[Math.floor(Math.random() * 10)]\n    }`,\n    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),\n}));\nconst KEYS: Record<string, Key> = {\n    Name: `name`,\n    Age: `age`,\n    'Date of Birth': `dob`,\n};\n\n@Component({\n    selector: `tui-table-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample4 {\n    private readonly size$ = new BehaviorSubject(10);\n    private readonly page$ = new BehaviorSubject(0);\n\n    readonly direction$ = new BehaviorSubject<-1 | 1>(-1);\n    readonly sorter$ = new BehaviorSubject<Key>(`name`);\n\n    readonly minAge = new FormControl(21);\n\n    readonly request$ = combineLatest([\n        this.sorter$,\n        this.direction$,\n        this.page$,\n        this.size$,\n        tuiReplayedValueChangesFrom<number>(this.minAge),\n    ]).pipe(\n        // zero time debounce for a case when both key and direction change\n        debounceTime(0),\n        switchMap(query => this.getData(...query).pipe(startWith(null))),\n        share(),\n    );\n\n    initial: readonly string[] = [`Name`, `Date of Birth`, `Age`];\n\n    enabled = this.initial;\n\n    columns = [`name`, `dob`, `age`];\n\n    search = ``;\n\n    readonly arrow = TUI_ARROW;\n\n    readonly loading$ = this.request$.pipe(map(value => !value));\n\n    readonly total$ = this.request$.pipe(\n        filter(isPresent),\n        map(({length}) => length),\n        startWith(1),\n    );\n\n    readonly data$: Observable<readonly User[]> = this.request$.pipe(\n        filter(isPresent),\n        map(users => users.filter(isPresent)),\n        startWith([]),\n    );\n\n    onEnabled(enabled: readonly string[]): void {\n        this.enabled = enabled;\n        this.columns = this.initial\n            .filter(column => enabled.includes(column))\n            .map(column => KEYS[column]);\n    }\n\n    onDirection(direction: -1 | 1): void {\n        this.direction$.next(direction);\n    }\n\n    onSize(size: number): void {\n        this.size$.next(size);\n    }\n\n    onPage(page: number): void {\n        this.page$.next(page);\n    }\n\n    isMatch(value: unknown): boolean {\n        return !!this.search && TUI_DEFAULT_MATCHER(value, this.search);\n    }\n\n    getAge(user: User): number {\n        return getAge(user);\n    }\n\n    private getData(\n        key: 'name' | 'dob' | 'age',\n        direction: -1 | 1,\n        page: number,\n        size: number,\n        minAge: number,\n    ): Observable<ReadonlyArray<User | null>> {\n        console.info(`Making a request`);\n\n        const start = page * size;\n        const end = start + size;\n        const result = [...DATA]\n            .sort(sortBy(key, direction))\n            .filter(user => getAge(user) >= minAge)\n            .map((user, index) => (index >= start && index < end ? user : null));\n\n        // Imitating server response\n        return timer(3000).pipe(mapTo(result));\n    }\n}\n\nfunction sortBy(key: 'name' | 'dob' | 'age', direction: -1 | 1): TuiComparator<User> {\n    return (a, b) =>\n        key === `age`\n            ? direction * defaultSort(getAge(a), getAge(b))\n            : direction * defaultSort(a[key], b[key]);\n}\n\nfunction getAge({dob}: User): number {\n    const years = TODAY.year - dob.year;\n    const months = TODAY.month - dob.month;\n    const days = TODAY.day - dob.day;\n    const offset = toInt(months > 0 || (!months && days > 9));\n\n    return years + offset;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/4/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {capitalize} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-format-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl(`roman sEdOv`),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/4/index.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/4/index.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {quantize} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl(3),\n        quantum: new FormControl(2),\n    });\n\n    get quantized(): number {\n        const {value, quantum} = this.parametersForm.value;\n\n        return quantize(value, quantum);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/4/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {getPaymentSystem} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-miscellaneous-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample4 {\n    readonly items = [\n        `6734567890123456`,\n        `5536567890123456`,\n        `2202567890123456`,\n        `4405567890123456`,\n        `4000567890123456`,\n    ];\n\n    parametersForm = new FormGroup({\n        cardNumber: new FormControl(``),\n    });\n\n    get paymentSystem(): string | null {\n        const {cardNumber} = this.parametersForm.value;\n\n        return getPaymentSystem(cardNumber);\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/4/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/tokens/examples/4/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_ANDROID} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-token-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample4 {\n    constructor(@Inject(TUI_IS_ANDROID) readonly isAndroid: boolean) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-index-ts.js.map