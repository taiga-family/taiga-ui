"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[84254],{

/***/ 84254:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiFormatPhone} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-format-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(`+79991234567`),\n        countryCode: new FormControl(`+7`),\n        phoneMask: new FormControl(`### ###-##-##`),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return tuiFormatPhone(value ?? ``, countryCode ?? ``, phoneMask ?? ``);\n    }\n}\n";

/***/ })

}]);