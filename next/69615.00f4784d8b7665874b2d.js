"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[69615],{

/***/ 69615:
/***/ ((module) => {

module.exports = "<p>\n    <button\n        tuiButton\n        (click)=\"refresh()\"\n    >\n        Refresh\n    </button>\n</p>\n<div *ngFor=\"let item of items$ | async; else: loading; empty: blank\">\n    {{ item }}\n</div>\n<ng-template #loading>\n    <tui-loader></tui-loader>\n</ng-template>\n<ng-template #blank>Data is not available</ng-template>\n";

/***/ })

}]);