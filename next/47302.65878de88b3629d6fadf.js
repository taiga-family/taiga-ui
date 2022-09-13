"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47302],{

/***/ 47302:
/***/ ((module) => {

module.exports = "<p>\n    Make right click on this icon ->\n    <tui-svg\n        #dropdown=\"tuiDropdown\"\n        src=\"tuiIconSettingsLarge\"\n        tuiDropdownContext\n        class=\"icon\"\n        [tuiDropdown]=\"content\"\n    >\n        <ng-template #content>\n            <span class=\"text\">Nothing special</span>\n            <button\n                tuiIconButton\n                size=\"s\"\n                appearance=\"icon\"\n                icon=\"tuiIconCloseLarge\"\n                title=\"Close\"\n                (click)=\"dropdown.toggle(false)\"\n            ></button>\n        </ng-template>\n    </tui-svg>\n</p>\n";

/***/ })

}]);