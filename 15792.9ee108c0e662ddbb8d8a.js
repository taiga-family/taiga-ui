"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[15792],{

/***/ 15792:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-dialog-example-6`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent6 {\n    exampleForm = new FormGroup({\n        exampleControl: new FormControl(``),\n    });\n\n    open = false;\n\n    showDialog(): void {\n        this.open = true;\n    }\n}\n";

/***/ })

}]);