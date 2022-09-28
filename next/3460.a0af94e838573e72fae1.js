"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[3460],{

/***/ 3460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarterKit)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40256);
/* harmony import */ var _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10763);
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32892);
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12258);
/* harmony import */ var _tiptap_extension_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70837);
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93743);
/* harmony import */ var _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44225);
/* harmony import */ var _tiptap_extension_dropcursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81121);
/* harmony import */ var _tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50587);
/* harmony import */ var _tiptap_extension_hard_break__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34278);
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15400);
/* harmony import */ var _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10590);
/* harmony import */ var _tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36129);
/* harmony import */ var _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30440);
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82861);
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94493);
/* harmony import */ var _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70670);
/* harmony import */ var _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56793);
/* harmony import */ var _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28343);



















const StarterKit = _tiptap_core__WEBPACK_IMPORTED_MODULE_18__.Extension.create({
  name: 'starterKit',

  addExtensions() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

    const extensions = [];

    if (this.options.blockquote !== false) {
      extensions.push(_tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_0__/* .default.configure */ .ZP.configure((_a = this.options) === null || _a === void 0 ? void 0 : _a.blockquote));
    }

    if (this.options.bold !== false) {
      extensions.push(_tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__/* .default.configure */ .ZP.configure((_b = this.options) === null || _b === void 0 ? void 0 : _b.bold));
    }

    if (this.options.bulletList !== false) {
      extensions.push(_tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_2__/* .default.configure */ .ZP.configure((_c = this.options) === null || _c === void 0 ? void 0 : _c.bulletList));
    }

    if (this.options.code !== false) {
      extensions.push(_tiptap_extension_code__WEBPACK_IMPORTED_MODULE_3__/* .default.configure */ .ZP.configure((_d = this.options) === null || _d === void 0 ? void 0 : _d.code));
    }

    if (this.options.codeBlock !== false) {
      extensions.push(_tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_4__/* .default.configure */ .ZP.configure((_e = this.options) === null || _e === void 0 ? void 0 : _e.codeBlock));
    }

    if (this.options.document !== false) {
      extensions.push(_tiptap_extension_document__WEBPACK_IMPORTED_MODULE_5__/* .default.configure */ .Z.configure((_f = this.options) === null || _f === void 0 ? void 0 : _f.document));
    }

    if (this.options.dropcursor !== false) {
      extensions.push(_tiptap_extension_dropcursor__WEBPACK_IMPORTED_MODULE_6__/* .default.configure */ .Z.configure((_g = this.options) === null || _g === void 0 ? void 0 : _g.dropcursor));
    }

    if (this.options.gapcursor !== false) {
      extensions.push(_tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_7__/* .default.configure */ .Z.configure((_h = this.options) === null || _h === void 0 ? void 0 : _h.gapcursor));
    }

    if (this.options.hardBreak !== false) {
      extensions.push(_tiptap_extension_hard_break__WEBPACK_IMPORTED_MODULE_8__/* .default.configure */ .Z.configure((_j = this.options) === null || _j === void 0 ? void 0 : _j.hardBreak));
    }

    if (this.options.heading !== false) {
      extensions.push(_tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_9__/* .default.configure */ .Z.configure((_k = this.options) === null || _k === void 0 ? void 0 : _k.heading));
    }

    if (this.options.history !== false) {
      extensions.push(_tiptap_extension_history__WEBPACK_IMPORTED_MODULE_10__/* .default.configure */ .Z.configure((_l = this.options) === null || _l === void 0 ? void 0 : _l.history));
    }

    if (this.options.horizontalRule !== false) {
      extensions.push(_tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_11__/* .default.configure */ .Z.configure((_m = this.options) === null || _m === void 0 ? void 0 : _m.horizontalRule));
    }

    if (this.options.italic !== false) {
      extensions.push(_tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_12__/* .default.configure */ .ZP.configure((_o = this.options) === null || _o === void 0 ? void 0 : _o.italic));
    }

    if (this.options.listItem !== false) {
      extensions.push(_tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_13__/* .default.configure */ .Z.configure((_p = this.options) === null || _p === void 0 ? void 0 : _p.listItem));
    }

    if (this.options.orderedList !== false) {
      extensions.push(_tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_14__/* .default.configure */ .ZP.configure((_q = this.options) === null || _q === void 0 ? void 0 : _q.orderedList));
    }

    if (this.options.paragraph !== false) {
      extensions.push(_tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_15__/* .default.configure */ .Z.configure((_r = this.options) === null || _r === void 0 ? void 0 : _r.paragraph));
    }

    if (this.options.strike !== false) {
      extensions.push(_tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_16__/* .default.configure */ .ZP.configure((_s = this.options) === null || _s === void 0 ? void 0 : _s.strike));
    }

    if (this.options.text !== false) {
      extensions.push(_tiptap_extension_text__WEBPACK_IMPORTED_MODULE_17__/* .default.configure */ .Z.configure((_t = this.options) === null || _t === void 0 ? void 0 : _t.text));
    }

    return extensions;
  }

});
 //# sourceMappingURL=tiptap-starter-kit.esm.js.map

/***/ })

}]);