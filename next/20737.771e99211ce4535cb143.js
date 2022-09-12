"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[20737],{

/***/ 20737:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-money-example-5`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {\n                decimalSeparator: `.`,\n                thousandSeparator: `,`,\n                zeroPadding: true,\n            },\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMoneyExample5 {}\n";

/***/ })

}]);