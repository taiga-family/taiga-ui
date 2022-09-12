"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[84798],{

/***/ 84798:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Step is 1 by default\"\n    >\n        <tui-input-count\n            formControlName=\"testValue1\"\n            [min]=\"1\"\n            [max]=\"200\"\n        >\n            Count something\n            <input\n                tuiTextfield\n                placeholder=\"1.. 2.. 3..\"\n            />\n        </tui-input-count>\n    </label>\n\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Step is 100\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-input-count\n            formControlName=\"testValue2\"\n            [tuiTextfieldLabelOutside]=\"true\"\n            [step]=\"100\"\n        ></tui-input-count>\n    </label>\n\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Also works with negative values\"\n        class=\"tui-space_top-4\"\n    >\n        <tui-input-count\n            formControlName=\"testValue3\"\n            [tuiTextfieldLabelOutside]=\"true\"\n            [min]=\"-100\"\n            [max]=\"100\"\n        ></tui-input-count>\n    </label>\n</form>\n";

/***/ })

}]);