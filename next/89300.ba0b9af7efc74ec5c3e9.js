"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89300],{

/***/ 89300:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-calendar-month-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample1 {\n    value: TuiMonth | null = null;\n    hoveredMonth: TuiMonth | null = null;\n\n    onMonthClick(month: TuiMonth): void {\n        this.value = month;\n    }\n\n    onMonthHovered(month: TuiMonth | null): void {\n        this.hoveredMonth = month;\n    }\n}\n";

/***/ })

}]);