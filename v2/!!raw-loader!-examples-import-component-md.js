(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-component-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/import/component.md":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/preview/examples/import/component.md ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n  // ...\n})\nexport class SomeComponent {\n  @ViewChild('preview')\n  readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n  constructor(@Inject(PreviewDialogService) private readonly previewDialogService: PreviewDialogService) {}\n\n  show() {\n    this.previewDialogService.open(this.preview).subscribe();\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/import/component.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/active-zone/examples/import/component.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  active = false;\n\n  onActiveZone(active: boolean) {\n    this.active = active;\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/import/component.md":
/*!****************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/import/component.md ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport {clamp} from '@taiga-ui/cdk';\n\nexport class MyComponent {\n  scale = 1;\n\n  // ...\n\n  onElastic(scale: number) {\n    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/import/component.md":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/sidebar/examples/import/component.md ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  open = false;\n\n  toggle(open: boolean) {\n    this.open = open;\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/import/component.md":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/directives/zoom/examples/import/component.md ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  scale = 1;\n\n  onZoom(scale: TuiScale) {\n    this.scale += scale.delta;\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-component-md.js.map