"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[85654],{

/***/ 85654:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <p i18n>Default:</p>\n\n    <tui-input-date-time\n        formControlName=\"testValue\"\n        timeMode=\"HH:MM\"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>With seconds:</p>\n\n    <tui-input-date-time\n        formControlName=\"testValue\"\n        timeMode=\"HH:MM:SS\"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>With SS and MS:</p>\n\n    <tui-input-date-time\n        formControlName=\"testValue\"\n        timeMode=\"HH:MM:SS.MSS\"\n    >\n        Choose date and time\n    </tui-input-date-time>\n\n    <p i18n>Form value:</p>\n\n    <pre><code>{{testForm.value | json}}</code></pre>\n</form>\n";

/***/ })

}]);