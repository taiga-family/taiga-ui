"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[57953],{

/***/ 57953:
/***/ ((module) => {

module.exports = "<tui-notification class=\"tui-space_bottom-3\">\n    Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n</tui-notification>\n<button\n    tuiButton\n    (click)=\"show(actions)\"\n>\n    Taiga\n</button>\n<ng-template\n    #actions\n    let-content=\"content\"\n>\n    <a\n        tuiButton\n        shape=\"rounded\"\n        size=\"s\"\n        download\n        [href]=\"content\"\n    >\n        Download\n    </a>\n</ng-template>\n";

/***/ })

}]);