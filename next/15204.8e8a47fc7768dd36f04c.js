"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[15204],{

/***/ 15204:
/***/ ((module) => {

module.exports = "<tui-tabs\n    tuiMobileTabs\n    [(activeItemIndex)]=\"activeItemIndex\"\n>\n    <button\n        *ngFor=\"let item of items\"\n        tuiTab\n        (click)=\"onClick(item.text)\"\n    >\n        <tui-svg\n            class=\"tui-space_right-2\"\n            [src]=\"item.icon\"\n        ></tui-svg>\n        {{ item.text }}\n    </button>\n</tui-tabs>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"2\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n";

/***/ })

}]);