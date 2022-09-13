"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[52261],{

/***/ 52261:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"tui-form__row\">\n        <tui-input\n            formControlName=\"text\"\n            class=\"input\"\n        >\n            Enter some text\n        </tui-input>\n\n        <tui-error\n            formControlName=\"text\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </div>\n</form>\n";

/***/ })

}]);