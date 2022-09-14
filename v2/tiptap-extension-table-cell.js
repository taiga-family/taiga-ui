(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-table-cell"],{

/***/ "../../node_modules/@tiptap/extension-table-cell/dist/tiptap-extension-table-cell.esm.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-table-cell/dist/tiptap-extension-table-cell.esm.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: TableCell, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return TableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableCell; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const TableCell = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Node"].create({
    name: 'tableCell',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    content: 'block+',
    addAttributes() {
        return {
            colspan: {
                default: 1,
            },
            rowspan: {
                default: 1,
            },
            colwidth: {
                default: null,
                parseHTML: element => {
                    const colwidth = element.getAttribute('colwidth');
                    const value = colwidth
                        ? [parseInt(colwidth, 10)]
                        : null;
                    return value;
                },
            },
        };
    },
    tableRole: 'cell',
    isolating: true,
    parseHTML() {
        return [
            { tag: 'td' },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['td', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
});


//# sourceMappingURL=tiptap-extension-table-cell.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-table-cell.js.map