"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[33798],{

/***/ 33798:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-table-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample1 {\n    readonly data = [\n        {\n            name: `Alex Inkin`,\n            balance: 1323525,\n        },\n        {\n            name: `Roman Sedov`,\n            balance: 423242,\n        },\n    ] as const;\n\n    readonly columns = Object.keys(this.data[0]);\n}\n";

/***/ })

}]);