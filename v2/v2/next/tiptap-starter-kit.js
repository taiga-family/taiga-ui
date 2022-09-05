(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-starter-kit"],{

/***/ "../../node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StarterKit; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-blockquote */ "../../node_modules/@tiptap/extension-blockquote/dist/tiptap-extension-blockquote.esm.js");
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-bold */ "../../node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js");
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-bullet-list */ "../../node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js");
/* harmony import */ var _tiptap_extension_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/extension-code */ "../../node_modules/@tiptap/extension-code/dist/tiptap-extension-code.esm.js");
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/extension-code-block */ "../../node_modules/@tiptap/extension-code-block/dist/tiptap-extension-code-block.esm.js");
/* harmony import */ var _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-document */ "../../node_modules/@tiptap/extension-document/dist/tiptap-extension-document.esm.js");
/* harmony import */ var _tiptap_extension_dropcursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-dropcursor */ "../../node_modules/@tiptap/extension-dropcursor/dist/tiptap-extension-dropcursor.esm.js");
/* harmony import */ var _tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-gapcursor */ "../../node_modules/@tiptap/extension-gapcursor/dist/tiptap-extension-gapcursor.esm.js");
/* harmony import */ var _tiptap_extension_hard_break__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-hard-break */ "../../node_modules/@tiptap/extension-hard-break/dist/tiptap-extension-hard-break.esm.js");
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tiptap/extension-heading */ "../../node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js");
/* harmony import */ var _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tiptap/extension-history */ "../../node_modules/@tiptap/extension-history/dist/tiptap-extension-history.esm.js");
/* harmony import */ var _tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tiptap/extension-horizontal-rule */ "../../node_modules/@tiptap/extension-horizontal-rule/dist/tiptap-extension-horizontal-rule.esm.js");
/* harmony import */ var _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tiptap/extension-italic */ "../../node_modules/@tiptap/extension-italic/dist/tiptap-extension-italic.esm.js");
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tiptap/extension-list-item */ "../../node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "../../node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js");
/* harmony import */ var _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tiptap/extension-paragraph */ "../../node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js");
/* harmony import */ var _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tiptap/extension-strike */ "../../node_modules/@tiptap/extension-strike/dist/tiptap-extension-strike.esm.js");
/* harmony import */ var _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tiptap/extension-text */ "../../node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js");




















const StarterKit = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Extension"].create({
    name: 'starterKit',
    addExtensions() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const extensions = [];
        if (this.options.blockquote !== false) {
            extensions.push(_tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_1__["default"].configure((_a = this.options) === null || _a === void 0 ? void 0 : _a.blockquote));
        }
        if (this.options.bold !== false) {
            extensions.push(_tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_2__["default"].configure((_b = this.options) === null || _b === void 0 ? void 0 : _b.bold));
        }
        if (this.options.bulletList !== false) {
            extensions.push(_tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_3__["default"].configure((_c = this.options) === null || _c === void 0 ? void 0 : _c.bulletList));
        }
        if (this.options.code !== false) {
            extensions.push(_tiptap_extension_code__WEBPACK_IMPORTED_MODULE_4__["default"].configure((_d = this.options) === null || _d === void 0 ? void 0 : _d.code));
        }
        if (this.options.codeBlock !== false) {
            extensions.push(_tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_5__["default"].configure((_e = this.options) === null || _e === void 0 ? void 0 : _e.codeBlock));
        }
        if (this.options.document !== false) {
            extensions.push(_tiptap_extension_document__WEBPACK_IMPORTED_MODULE_6__["default"].configure((_f = this.options) === null || _f === void 0 ? void 0 : _f.document));
        }
        if (this.options.dropcursor !== false) {
            extensions.push(_tiptap_extension_dropcursor__WEBPACK_IMPORTED_MODULE_7__["default"].configure((_g = this.options) === null || _g === void 0 ? void 0 : _g.dropcursor));
        }
        if (this.options.gapcursor !== false) {
            extensions.push(_tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_8__["default"].configure((_h = this.options) === null || _h === void 0 ? void 0 : _h.gapcursor));
        }
        if (this.options.hardBreak !== false) {
            extensions.push(_tiptap_extension_hard_break__WEBPACK_IMPORTED_MODULE_9__["default"].configure((_j = this.options) === null || _j === void 0 ? void 0 : _j.hardBreak));
        }
        if (this.options.heading !== false) {
            extensions.push(_tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_10__["default"].configure((_k = this.options) === null || _k === void 0 ? void 0 : _k.heading));
        }
        if (this.options.history !== false) {
            extensions.push(_tiptap_extension_history__WEBPACK_IMPORTED_MODULE_11__["default"].configure((_l = this.options) === null || _l === void 0 ? void 0 : _l.history));
        }
        if (this.options.horizontalRule !== false) {
            extensions.push(_tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_12__["default"].configure((_m = this.options) === null || _m === void 0 ? void 0 : _m.horizontalRule));
        }
        if (this.options.italic !== false) {
            extensions.push(_tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_13__["default"].configure((_o = this.options) === null || _o === void 0 ? void 0 : _o.italic));
        }
        if (this.options.listItem !== false) {
            extensions.push(_tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_14__["default"].configure((_p = this.options) === null || _p === void 0 ? void 0 : _p.listItem));
        }
        if (this.options.orderedList !== false) {
            extensions.push(_tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_15__["default"].configure((_q = this.options) === null || _q === void 0 ? void 0 : _q.orderedList));
        }
        if (this.options.paragraph !== false) {
            extensions.push(_tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_16__["default"].configure((_r = this.options) === null || _r === void 0 ? void 0 : _r.paragraph));
        }
        if (this.options.strike !== false) {
            extensions.push(_tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_17__["default"].configure((_s = this.options) === null || _s === void 0 ? void 0 : _s.strike));
        }
        if (this.options.text !== false) {
            extensions.push(_tiptap_extension_text__WEBPACK_IMPORTED_MODULE_18__["default"].configure((_t = this.options) === null || _t === void 0 ? void 0 : _t.text));
        }
        return extensions;
    },
});


//# sourceMappingURL=tiptap-starter-kit.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-starter-kit.js.map