"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[80615],{

/***/ 80615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiExtension": () => (/* binding */ EmojiExtension)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const EmojiExtension = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: `emoji`,

  addGlobalAttributes() {
    return [{
      types: [`paragraph`],
      attributes: {
        dataType: {
          default: ``,
          keepOnSplit: false,
          renderHTML: ({
            dataType
          }) => dataType === `emoji` ? {
            style: `display: inline`
          } : null,
          parseHTML: element => element.getAttribute(`data-type`)
        }
      }
    }];
  }

});

/***/ })

}]);