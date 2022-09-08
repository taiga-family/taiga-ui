"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[74096],{

/***/ 74096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableCell": () => (/* binding */ TableCell),
/* harmony export */   "default": () => (/* binding */ TableCell)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const TableCell = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Node.create({
  name: 'tableCell',

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  content: 'block+',

  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: element => {
          const colwidth = element.getAttribute('colwidth');
          const value = colwidth ? [parseInt(colwidth, 10)] : null;
          return value;
        }
      }
    };
  },

  tableRole: 'cell',
  isolating: true,

  parseHTML() {
    return [{
      tag: 'td'
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['td', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }

});
 //# sourceMappingURL=tiptap-extension-table-cell.esm.js.map

/***/ })

}]);