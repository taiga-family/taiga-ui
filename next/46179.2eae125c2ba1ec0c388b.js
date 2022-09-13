"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46179],{

/***/ 46179:
/***/ ((module) => {

module.exports = "<span (tuiActiveZoneChange)=\"onActiveZone($event)\">\n    <button\n        tuiButton\n        type=\"button\"\n        iconRight=\"tuiIconChevronDown\"\n        [tuiDropdown]=\"dropdownContent\"\n        [tuiDropdownManual]=\"open\"\n        (tuiObscured)=\"onObscured($event)\"\n        (click)=\"onClick()\"\n    >\n        Choose\n    </button>\n    <ng-template #dropdownContent>\n        <div class=\"dropdown\">But there is nothing to choose...</div>\n    </ng-template>\n</span>\n";

/***/ })

}]);