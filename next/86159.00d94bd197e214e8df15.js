"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[86159],{

/***/ 86159:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-dropdown-context-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownContextExample3 {\n    testForm = new FormGroup({\n        reportText: new FormControl(`Misspell HERE!`),\n    });\n\n    report(): void {\n        console.info(this.testForm.value);\n    }\n}\n";

/***/ })

}]);