"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47428],{

/***/ 47428:
/***/ ((module) => {

module.exports = "<div\n    class=\"t-container\"\n    (tuiZoom)=\"onZoom($event)\"\n>\n    <div\n        class=\"t-zoomable\"\n        [style.transform]=\"transform$ | async\"\n    >\n        <span>{{ scale$ | async | number: '1.0-3' }}</span>\n    </div>\n</div>\n";

/***/ })

}]);