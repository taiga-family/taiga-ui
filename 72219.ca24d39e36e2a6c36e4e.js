"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72219],{

/***/ 72219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableRow": () => (/* binding */ TableRow),
/* harmony export */   "default": () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const TableRow = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Node.create({
  name: 'tableRow',

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  content: '(tableCell | tableHeader)*',
  tableRole: 'row',

  parseHTML() {
    return [{
      tag: 'tr'
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['tr', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }

});
 //# sourceMappingURL=tiptap-extension-table-row.esm.js.map

/***/ })

}]);