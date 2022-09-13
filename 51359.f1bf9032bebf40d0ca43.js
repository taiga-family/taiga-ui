"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[51359],{

/***/ 51359:
/***/ ((module) => {

module.exports = "<tui-select [formControl]=\"language\">\n    <ng-content></ng-content>\n    <tui-data-list *tuiDataList>\n        <button\n            *ngFor=\"let name of names\"\n            tuiOption\n            [value]=\"name | titlecase\"\n            (click)=\"switcher.setLanguage(name)\"\n        >\n            <img\n                alt=\"\"\n                class=\"t-flag\"\n                [src]=\"getFlagPath(flags.get(name))\"\n            />\n            {{ name | titlecase }}\n        </button>\n    </tui-data-list>\n</tui-select>\n";

/***/ })

}]);