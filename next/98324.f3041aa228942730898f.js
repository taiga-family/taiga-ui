"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98324],{

/***/ 98324:
/***/ ((module) => {

module.exports = "<tui-carousel\n    [itemsCount]=\"3\"\n    [(index)]=\"index\"\n>\n    <ng-container *ngFor=\"let item of items\">\n        <tui-island\n            *tuiItem\n            class=\"item\"\n        >\n            <h2 class=\"tui-island__title\">{{ item.title }}</h2>\n            <div class=\"tui-island__content\">{{ item.content }}</div>\n        </tui-island>\n    </ng-container>\n</tui-carousel>\n<tui-pagination\n    size=\"s\"\n    class=\"tui-space_top-4\"\n    [length]=\"items.length / itemsCount\"\n    [index]=\"rounded\"\n    (indexChange)=\"onIndex($event)\"\n></tui-pagination>\n";

/***/ })

}]);