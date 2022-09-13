"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[32569],{

/***/ 32569:
/***/ ((module) => {

module.exports = "<tui-combo-box\n    class=\"b-form\"\n    [stringify]=\"stringify\"\n    [(ngModel)]=\"value\"\n>\n    Find the best employees\n    <input\n        tuiTextfield\n        placeholder=\"Type a name\"\n    />\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"items | tuiFilterByInputWith: stringify\"\n        [itemContent]=\"stringify | tuiStringifyContent\"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n";

/***/ })

}]);