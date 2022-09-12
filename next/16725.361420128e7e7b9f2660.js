"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[16725],{

/***/ 16725:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';\nimport {of} from 'rxjs';\n\nexport const calendarStream$ = of(\n    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),\n);\n\n@Component({\n    selector: `tui-range-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_CALENDAR_DATE_STREAM,\n            useValue: calendarStream$,\n        },\n    ],\n})\nexport class TuiRangeExample2 {}\n";

/***/ })

}]);