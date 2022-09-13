(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-define-options-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/import/define-options.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/avatar/examples/import/define-options.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {tuiAvatarOptionsProvider} from '@taiga-ui/kit';\n// ...\n\n@NgModule({\n  providers: [\n    tuiAvatarOptionsProvider({\n      size: 'l',\n      autoColor: true,\n      rounded: true,\n    }),\n  ],\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/import/define-options.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/import/define-options.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_BUTTON_OPTIONS} from '@taiga-ui/core';\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_BUTTON_OPTIONS,\n      useValue: {\n        appearance: 'flat',\n        size: 'm',\n        shape: 'rounded',\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/import/define-options.md":
/*!***************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/import/define-options.md ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_CHECKBOX_OPTIONS, TUI_CHECKBOX_DEFAULT_OPTIONS} from '@taiga-ui/core';\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_CHECKBOX_OPTIONS,\n      useValue: {\n        ...TUI_CHECKBOX_DEFAULT_OPTIONS,\n        size: 'l',\n      },\n    },\n  ],\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/import/define-options.md":
/*!******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/import/define-options.md ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_INPUT_COUNT_OPTIONS, TUI_INPUT_COUNT_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_INPUT_COUNT_OPTIONS,\n      useValue: {\n        ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,\n        icons: {\n          up: 'tuiIconChevronUp',\n          down: 'tuiIconChevronDown',\n        },\n        appearance: 'secondary',\n        step: 10,\n        min: 10,\n        max: 100,\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-password/examples/import/define-options.md":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-password/examples/import/define-options.md ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_INPUT_PASSWORD_OPTIONS, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_INPUT_PASSWORD_OPTIONS,\n      useValue: {\n        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,\n        icons: {\n          hide: 'tuiIconEyeClosed',\n          show: 'tuiIconEyeOpen',\n        },\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/import/define-options.md":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/import/define-options.md ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_INPUT_TIME_OPTIONS} from '@taiga-ui/kit';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_INPUT_TIME_OPTIONS,\n      useValue: {\n        icon: 'tuiIconCheckCircleLarge',\n        mode: 'HH:MM:SS',\n        itemSize: 's',\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/import/define-options.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/loader/examples/import/define-options.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {tuiLoaderOptionsProvider} from '@taiga-ui/core';\n// ...\n\n@NgModule({\n  providers: [\n    tuiLoaderOptionsProvider({\n      size: 'l',\n      inheritColor: false,\n      overlay: true,\n    }),\n  ],\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/notification/examples/import/define-options.md":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/notification/examples/import/define-options.md ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiNotification, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_NOTIFICATION_OPTIONS,\n      useValue: {\n        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,\n        status: TuiNotification.Error,\n        hasIcon: false,\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-checkbox/examples/import/define-options.md":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-checkbox/examples/import/define-options.md ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_CHECKBOX_OPTIONS, TUI_CHECKBOX_DEFAULT_OPTIONS} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_CHECKBOX_OPTIONS,\n      useValue: {\n        ...TUI_CHECKBOX_DEFAULT_OPTIONS,\n        size: 'l',\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio/examples/import/define-options.md":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/radio/examples/import/define-options.md ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_RADIO_OPTIONS, TUI_RADIO_DEFAULT_OPTIONS} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_RADIO_OPTIONS,\n      useValue: {\n        ...TUI_RADIO_DEFAULT_OPTIONS,\n        size: 'l',\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/import/define-options.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/rating/examples/import/define-options.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TUI_RATING_OPTIONS, TUI_RATING_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_RATING_OPTIONS,\n      useValue: {\n        ...TUI_RATING_DEFAULT_OPTIONS,\n        iconNormal: 'tuiIconHeart',\n        iconFilled: 'tuiIconHeartFilled',\n      },\n    },\n  ],\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/import/define-options.md":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/import/define-options.md ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {tuiTagOptionsProvider} from '@taiga-ui/core';\n// ...\n\n@NgModule({\n  providers: [\n    tuiTagOptionsProvider({\n      size: 'l',\n      status: 'success',\n    }),\n  ],\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/toggle/examples/import/define-options.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/toggle/examples/import/define-options.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {ToggleOptions, TUI_TOGGLE_DEFAULT_OPTIONS, TUI_TOGGLE_OPTIONS} from '@taiga-ui/kit';\n\n// ...\nconst options: Partial<ToggleOptions> = {\n  icons: {\n    toggleOff: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronRight' : 'tuiIconChevronRightLarge'),\n    toggleOn: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge'),\n  },\n};\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_TOGGLE_OPTIONS,\n      useValue: {\n        ...TUI_TOGGLE_DEFAULT_OPTIONS,\n        ...options,\n      },\n    },\n  ],\n})\nexport class MyModule {}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/define-options.md":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/define-options.md ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {TuiNotification, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_NOTIFICATION_OPTIONS,\n      useValue: {\n        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,\n        autocloseTimeout: 7000,\n        label: ({$implicit}: any) => ($implicit === TuiNotification.Error ? 'Error' : 'Info'),\n        status: TuiNotification.Error,\n        hasIcon: false,\n        hasCloseButton: false,\n      },\n    },\n  ],\n  //  ...\n})\nexport class MyModule {}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-define-options-md.js.map