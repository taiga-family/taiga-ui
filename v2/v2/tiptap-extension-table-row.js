(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-table-row"],{

/***/ "../../node_modules/@tiptap/extension-table-row/dist/tiptap-extension-table-row.esm.js":
/*!***************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-table-row/dist/tiptap-extension-table-row.esm.js ***!
  \***************************************************************************************************************************/
/*! exports provided: TableRow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableRow; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const TableRow = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Node"].create({
    name: 'tableRow',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    content: '(tableCell | tableHeader)*',
    tableRole: 'row',
    parseHTML() {
        return [
            { tag: 'tr' },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['tr', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
});


//# sourceMappingURL=tiptap-extension-table-row.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-table-row.js.map