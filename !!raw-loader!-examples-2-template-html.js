(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-template-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/template.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/template.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2\n    class=\"header\"\n    [class.header_empty]=\"!heading\"\n>\n    <tui-input-inline\n        *ngIf=\"editing; else text\"\n        tuiAutoFocus\n        [(ngModel)]=\"heading\"\n        (focusedChange)=\"onFocusedChange($event)\"\n        (keydown.esc.prevent)=\"toggle()\"\n        (keydown.enter.prevent)=\"toggle()\"\n    >\n        Type a heading\n    </tui-input-inline>\n    <ng-template #text>\n        <span>{{ heading }}</span>\n        <button\n            tuiIconButton\n            type=\"button\"\n            title=\"Edit heading\"\n            size=\"xs\"\n            appearance=\"icon\"\n            icon=\"tuiIconEditLarge\"\n            class=\"tui-space_left-1\"\n            (click)=\"toggle()\"\n        ></button>\n    </ng-template>\n</h2>\n\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem\n    doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus\n    tempore voluptates!\n</p>\n<p>\n    Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam\n    quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/2/template.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/2/template.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-scrollbar class=\"box\">\n    <div class=\"line\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis\n        quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum?\n    </div>\n    <div class=\"line\">\n        Ab aperiam beatae consequatur magnam mollitia necessitatibus quam qui quibusdam soluta, suscipit. Aut doloremque\n        eum, hic quae ratione sunt suscipit! Eaque esse illo libero minima molestiae neque, nobis velit voluptates?\n    </div>\n    <div class=\"line\">\n        Animi est facere maxime porro quae quibusdam quos totam? Consectetur eligendi, explicabo magnam maxime sit\n        voluptatibus. Assumenda beatae deserunt dolorem earum et eum harum in maxime quae, quam quos rem.\n    </div>\n    <div class=\"line\">\n        Adipisci commodi consectetur id iure praesentium quam quisquam unde veniam. Corporis cum dicta distinctio error\n        excepturi, impedit quidem veritatis? Cupiditate eos illum ipsum labore, modi omnis repudiandae velit veniam\n        voluptatem.\n    </div>\n    <div class=\"line\">\n        Asperiores dolorum, ex facilis hic maiores modi neque nisi nobis nostrum numquam placeat quod repellendus sequi\n        velit voluptate! Adipisci atque deleniti eligendi ex tenetur. Beatae cumque dolore impedit perferendis repellat.\n    </div>\n</tui-scrollbar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/2/template.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/2/template.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"testForm\">\n    <tui-input-number\n        formControlName=\"testValue\"\n        [postfix]=\"826 | tuiCurrency\"\n    >\n        Type a sum\n    </tui-input-number>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/2/template.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/2/template.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Transform {{ numbers }} into {{ numbers | tuiMapper: mapper:3 }}</p>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-template-html.js.map