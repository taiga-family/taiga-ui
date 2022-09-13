"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[20477],{

/***/ 20477:
/***/ ((module) => {

module.exports = "<p\n    tuiDropdownContext\n    [tuiDropdown]=\"reportForm\"\n>\n    Some text with mistake. Make right click on it.\n</p>\n\n<p\n    tuiDropdownContext\n    [tuiDropdown]=\"reportForm\"\n>\n    Another text\n</p>\n\n<ng-template\n    #reportForm\n    let-close=\"close\"\n>\n    <form\n        class=\"container\"\n        [formGroup]=\"testForm\"\n    >\n        <tui-text-area formControlName=\"reportText\">Have you found a mistake ? Write about it!</tui-text-area>\n\n        <button\n            type=\"button\"\n            tuiButton\n            class=\"button\"\n            (click)=\"report(); close()\"\n        >\n            SEND IT\n        </button>\n    </form>\n</ng-template>\n";

/***/ })

}]);