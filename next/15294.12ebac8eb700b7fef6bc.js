"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[15294],{

/***/ 15294:
/***/ ((module) => {

module.exports = "<div class=\"flex\">\n    <tui-axes\n        class=\"axes\"\n        [axisXLabels]=\"labelsX\"\n        [axisYLabels]=\"labelsY\"\n    >\n        <tui-bar-chart\n            [tuiHintAppearance]=\"appearance\"\n            [max]=\"10000\"\n            [value]=\"value\"\n            [tuiHintContent]=\"hint\"\n        ></tui-bar-chart>\n    </tui-axes>\n\n    <tui-axes\n        class=\"axes\"\n        [axisXLabels]=\"labelsX\"\n        [axisYLabels]=\"labelsY\"\n    >\n        <tui-bar-chart\n            [tuiHintAppearance]=\"appearance\"\n            [max]=\"10000\"\n            [value]=\"value\"\n            [collapsed]=\"true\"\n            [tuiHintContent]=\"hint\"\n        ></tui-bar-chart>\n    </tui-axes>\n</div>\n\n<tui-select\n    class=\"b-form\"\n    [(ngModel)]=\"appearance\"\n>\n    Hint appearance\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]=\"appearances\"\n    ></tui-data-list-wrapper>\n</tui-select>\n";

/***/ })

}]);