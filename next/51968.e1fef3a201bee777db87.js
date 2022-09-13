"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[51968],{

/***/ 51968:
/***/ ((module) => {

module.exports = "<tui-multi-select\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [stringify]=\"(stringify$ | async)!\"\n    (searchChange)=\"onSearch($event)\"\n>\n    <tui-data-list-wrapper\n        *tuiDataList\n        tuiMultiSelectGroup\n        [items]=\"items\"\n        [itemContent]=\"(stringify$ | async)!\"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n";

/***/ })

}]);