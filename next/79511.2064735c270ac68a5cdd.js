"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[79511],{

/***/ 79511:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"testForm\">\n    <tui-input-inline\n        formControlName=\"testValue1\"\n        class=\"input1\"\n    ></tui-input-inline>\n    <tui-input-inline\n        formControlName=\"testValue2\"\n        class=\"input2\"\n    ></tui-input-inline>\n    <tui-input-inline\n        formControlName=\"testValue3\"\n        class=\"input3\"\n    ></tui-input-inline>\n    <tui-input-inline\n        formControlName=\"testValue4\"\n        class=\"input4\"\n        [class.input4_empty]=\"input4Empty\"\n    >\n        (Show placeholder if control is empty)\n    </tui-input-inline>\n</form>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"onToggleClick()\"\n>\n    {{ toggleContent }}\n</button>\n";

/***/ })

}]);