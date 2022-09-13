"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29259],{

/***/ 29259:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiFormatNumber} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-format-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample6 {\n    parametersForm = new FormGroup({\n        value: new FormControl(123456.789),\n        decimalLimit: new FormControl(2),\n        decimalSeparator: new FormControl(`.`),\n        thousandSeparator: new FormControl(` `),\n    });\n\n    get formattedNumber(): string {\n        const {value, decimalLimit, decimalSeparator, thousandSeparator} =\n            this.parametersForm.value;\n\n        return tuiFormatNumber(value ?? 123456.789, {\n            decimalLimit: decimalLimit ?? 2,\n            decimalSeparator: decimalSeparator ?? `.`,\n            thousandSeparator: thousandSeparator ?? ` `,\n        });\n    }\n}\n";

/***/ })

}]);