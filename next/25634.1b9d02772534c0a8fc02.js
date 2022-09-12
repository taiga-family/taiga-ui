"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[25634],{

/***/ 25634:
/***/ ((module) => {

module.exports = "<div\n    i18n\n    class=\"description\"\n>\n    To highlight extra characters:\n    <ul class=\"steps\">\n        <li>\n            use\n            <code>maxLength</code>\n            input\n        </li>\n        <li class=\"steps_optional\">\n            (Optional) Dont forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters limit\n        </li>\n    </ul>\n</div>\n\n<form\n    class=\"form tui-col_md-6\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel=\"Write a wise thought\"\n        class=\"tui-row\"\n    >\n        <tui-text-area\n            formControlName=\"testValue1\"\n            tuiHintContent=\"it's just a joke\"\n            [expandable]=\"true\"\n            [maxLength]=\"maxLength\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Type it\n        </tui-text-area>\n        <tui-error\n            formControlName=\"testValue1\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n</form>\n";

/***/ })

}]);