"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[88918],{

/***/ 88918:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-radio-list-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioListExample2 {\n    readonly items = [\n        {\n            name: `Simple`,\n            description: `Something usual`,\n        },\n        {\n            name: `Advanced`,\n            description: `Something better`,\n        },\n        {\n            name: `PRO`,\n            description: `Something cool`,\n        },\n    ];\n\n    readonly testForm = new FormGroup({\n        tariff: new FormControl(this.items[0]),\n    });\n}\n";

/***/ })

}]);