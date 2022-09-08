"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[55433],{

/***/ 50590:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiTablePaginationOptionsProvider} from '@taiga-ui/addon-table';\n\n@Component({\n    selector: `tui-table-pagination-example-3`,\n    templateUrl: `./index.html`,\n    providers: [\n        tuiTablePaginationOptionsProvider({\n            showPages: false,\n        }),\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTablePaginationExample3 {\n    total = 350;\n    sizeOptions = [10, 50, 100, this.total];\n}\n";

/***/ })

}]);