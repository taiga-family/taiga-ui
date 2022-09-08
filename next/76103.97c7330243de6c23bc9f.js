"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[76103],{

/***/ 76103:
/***/ ((module) => {

module.exports = "<button (click)=\"add()\">Add</button>\n<tui-scrollbar>\n    <cdk-virtual-scroll-viewport\n        tuiScrollable\n        itemSize=\"50\"\n        class=\"example-viewport tui-zero-scrollbar\"\n    >\n        <div\n            *cdkVirtualFor=\"let item of items\"\n            class=\"example-item\"\n        >\n            {{ item }}\n        </div>\n    </cdk-virtual-scroll-viewport>\n</tui-scrollbar>\n";

/***/ })

}]);