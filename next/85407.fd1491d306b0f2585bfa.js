"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[85407],{

/***/ 85407:
/***/ ((module) => {

module.exports = "<tui-range\n    id=\"range-with-key-steps\"\n    size=\"m\"\n    class=\"range\"\n    [step]=\"stepPercentage\"\n    [keySteps]=\"keySteps\"\n    [segments]=\"segments\"\n    [(ngModel)]=\"value\"\n></tui-range>\n\n<div class=\"ticks-labels\">\n    <span *ngFor=\"let label of ticksLabels\">{{ label }}</span>\n</div>\n\n<p class=\"tui-space_top-12 tui-space_bottom-0\">\n    Control value:\n    <output for=\"range-with-key-steps\">\n        <code>{{ value | json }}</code>\n    </output>\n</p>\n";

/***/ })

}]);