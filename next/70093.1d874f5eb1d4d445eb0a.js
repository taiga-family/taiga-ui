"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[70093],{

/***/ 70093:
/***/ ((module) => {

module.exports = "<div class=\"wrapper\">\n    <tui-input-slider\n        [min]=\"min\"\n        [max]=\"max\"\n        [steps]=\"totalSteps\"\n        [keySteps]=\"keySteps\"\n        [formControl]=\"control\"\n        [segments]=\"ticksLabels.length - 1\"\n    >\n        Not linear growing slider\n    </tui-input-slider>\n\n    <div class=\"slider-ticks-labels\">\n        <span *ngFor=\"let label of ticksLabels\">{{ label }}</span>\n    </div>\n\n    <p>\n        Control value:\n        <code>{{ control.value }}</code>\n    </p>\n</div>\n";

/***/ })

}]);