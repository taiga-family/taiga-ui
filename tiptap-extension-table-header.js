(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-table-header"],{

/***/ "../../node_modules/@tiptap/extension-table-header/dist/tiptap-extension-table-header.esm.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-table-header/dist/tiptap-extension-table-header.esm.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: TableHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableHeader; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const TableHeader = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Node"].create({
    name: 'tableHeader',
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
    tableRole: 'header_cell',
    isolating: true,
    parseHTML() {
        return [
            { tag: 'th' },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['th', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
});


//# sourceMappingURL=tiptap-extension-table-header.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-table-header.js.map