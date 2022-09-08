"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46528],{

/***/ 46528:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBooleanHandler} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-filter-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly form = new FormGroup({\n        filters: new FormControl([`Food`]),\n    });\n\n    readonly items = [\n        `News`,\n        `Food`,\n        `Clothes`,\n        `Popular`,\n        `Goods`,\n        `Furniture`,\n        `Tech`,\n        `Building materials`,\n    ];\n\n    disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;\n}\n";

/***/ })

}]);