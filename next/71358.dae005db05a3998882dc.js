"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[71358],{

/***/ 71358:
/***/ ((module) => {

module.exports = "<tui-hosted-dropdown\n    tuiDropdownAlign=\"left\"\n    [content]=\"picker\"\n    [tuiDropdownMaxHeight]=\"999\"\n>\n    <button\n        tuiButton\n        type=\"button\"\n        appearance=\"\"\n        automation-id=\"color-picker__button\"\n        [style.background]=\"background\"\n        [style.color]=\"background\"\n    >\n        <span class=\"invert\">Color me Kubrick</span>\n    </button>\n</tui-hosted-dropdown>\n<ng-template\n    #picker\n    let-activeZone\n>\n    <tui-color-selector\n        [tuiActiveZoneParent]=\"activeZone\"\n        [(color)]=\"color\"\n    ></tui-color-selector>\n</ng-template>\n";

/***/ })

}]);