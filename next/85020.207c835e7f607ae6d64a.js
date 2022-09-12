"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[85020],{

/***/ 85020:
/***/ ((module) => {

module.exports = "<label\n    *ngIf=\"value$ | async as value\"\n    tuiProgressLabel\n    class=\"label-wrapper\"\n>\n    {{ value }}%\n    <progress\n        tuiProgressBar\n        [max]=\"max\"\n        [value]=\"value\"\n    ></progress>\n</label>\n";

/***/ })

}]);