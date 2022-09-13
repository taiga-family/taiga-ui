"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91839],{

/***/ 91839:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <p>\n        <tui-input\n            tuiTextfieldSize=\"s\"\n            formControlName=\"testValue\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input\n            tuiTextfieldSize=\"m\"\n            formControlName=\"testValue\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n    <p>\n        <tui-input\n            formControlName=\"testValue\"\n            tuiHintContent=\"It will be used for sending documents\"\n            [tuiTextfieldCleaner]=\"true\"\n        >\n            Type an email&nbsp;\n            <span class=\"tui-required\"></span>\n            <input\n                tuiTextfield\n                placeholder=\"mail@mail.ru\"\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n</form>\n";

/***/ })

}]);