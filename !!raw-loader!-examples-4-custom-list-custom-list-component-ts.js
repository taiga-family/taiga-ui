(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-custom-list-custom-list-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/custom-list/custom-list.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/custom-list/custom-list.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {EMPTY_ARRAY, setNativeFocused, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {isEditingKey, TuiDataListComponent} from '@taiga-ui/core';\n\ninterface Items<T> {\n    readonly name: string;\n    readonly items: readonly T[];\n}\n\n@Component({\n    selector: `custom-list`,\n    templateUrl: `./custom-list.template.html`,\n    changeDetection,\n})\nexport class CustomListComponent<T> {\n    @Input()\n    items: ReadonlyArray<Items<T>> = [];\n\n    value = ``;\n\n    readonly all = EMPTY_ARRAY;\n\n    readonly filter = TUI_DEFAULT_MATCHER;\n\n    onArrowDown<T>(list: TuiDataListComponent<T>, event: Event): void {\n        list.onFocus(event, true);\n    }\n\n    onKeyDown(key: string, element: HTMLElement | null): void {\n        if (element && isEditingKey(key)) {\n            setNativeFocused(element, true, true);\n        }\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-custom-list-custom-list-component-ts.js.map