"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[83156],{

/***/ 83156:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDayOfWeek} from '@taiga-ui/cdk';\nimport {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-calendar-range-example-4`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_FIRST_DAY_OF_WEEK,\n            useValue: TuiDayOfWeek.Sunday,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarRangeExample4 {}\n";

/***/ })

}]);