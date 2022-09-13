"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[10686],{

/***/ 10686:
/***/ ((module) => {

module.exports = "```html\n<ng-container *tuiLet=\"someStream | async as streamValue\">\n  <p>\n    {{streamValue}}\n    <tui-tooltip [content]=\"template\"></tui-tooltip>\n  </p>\n  <button\n    tuiButton\n    type=\"button\"\n  >\n    Delete {{streamValue}}\n  </button>\n  <ng-template #template>{{streamValue}} is a current value of a someStream</ng-template>\n</ng-container>\n```\n";

/***/ })

}]);