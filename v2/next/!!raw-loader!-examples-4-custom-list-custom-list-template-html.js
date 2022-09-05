(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-custom-list-custom-list-template-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/custom-list/custom-list.template.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/4/custom-list/custom-list.template.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-primitive-textfield\n    #input\n    iconContent=\"tuiIconSearchLarge\"\n    iconAlign=\"left\"\n    class=\"tui-space_all-2\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(value)]=\"value\"\n    (keydown.arrowDown.prevent)=\"onArrowDown(list, $event)\"\n>\n    Search categories\n</tui-primitive-textfield>\n<hr />\n<tui-data-list\n    #list\n    emptyContent=\"No results found\"\n    (keydown)=\"onKeyDown($event.key, input.nativeFocusableElement)\"\n>\n    <tui-opt-group *ngIf=\"!value\">\n        <button\n            tuiOption\n            [value]=\"all\"\n        >\n            All\n        </button>\n        <button\n            *ngFor=\"let item of items\"\n            tuiOption\n            [value]=\"item.items\"\n        >\n            {{ item.name }} only\n        </button>\n    </tui-opt-group>\n    <ng-container *ngFor=\"let item of items\">\n        <tui-opt-group\n            *tuiLet=\"item.items | tuiFilter: filter:value as filtered\"\n            [label]=\"item.name\"\n        >\n            <tui-opt-group\n                *ngIf=\"filtered.length\"\n                tuiMultiSelectGroup\n            >\n                <button\n                    *ngFor=\"let item of filtered\"\n                    tuiOption\n                    [value]=\"item\"\n                >\n                    {{ item }}\n                </button>\n            </tui-opt-group>\n        </tui-opt-group>\n    </ng-container>\n</tui-data-list>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-custom-list-custom-list-template-html.js.map