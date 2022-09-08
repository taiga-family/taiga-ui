"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[80036],{

/***/ 80036:
/***/ ((module) => {

module.exports = "<form\n    tuiTextfieldSize=\"m\"\n    class=\"b-form\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [tuiTextfieldCleaner]=\"true\"\n>\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Modified cleaner icon\"\n    >\n        <tui-primitive-textfield\n            [value]=\"value\"\n            (valueChange)=\"onValueChange($event)\"\n            (focusedChange)=\"onFocused($event)\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-primitive-textfield>\n    </label>\n\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Override modified cleaner icon\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-primitive-textfield\n            [value]=\"value\"\n            [iconCleaner]=\"iconCleaner\"\n            (valueChange)=\"onValueChange($event)\"\n            (focusedChange)=\"onFocused($event)\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type=\"email\"\n            />\n        </tui-primitive-textfield>\n    </label>\n</form>\n\n<ng-template #iconCleaner>\n    <tui-svg src=\"tuiIconDraft\"></tui-svg>\n</ng-template>\n";

/***/ })

}]);