"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72530],{

/***/ 72530:
/***/ ((module) => {

module.exports = "<tui-tabs [(activeItemIndex)]=\"activeItemIndex\">\n    <button\n        tuiTab\n        (click)=\"onClick('Maps')\"\n    >\n        <tui-svg\n            src=\"tuiIconCard\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Maps\n    </button>\n    <button\n        tuiTab\n        disabled\n        (click)=\"onClick('Calls')\"\n    >\n        <tui-svg\n            src=\"tuiIconCall\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Calls\n    </button>\n    <button\n        tuiTab\n        (click)=\"onClick('Settings')\"\n    >\n        <tui-svg\n            src=\"tuiIconSettings\"\n            class=\"tui-space_right-2\"\n        ></tui-svg>\n        Settings\n    </button>\n</tui-tabs>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"2\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n";

/***/ })

}]);