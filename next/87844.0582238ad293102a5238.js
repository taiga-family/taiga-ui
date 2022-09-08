"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[87844],{

/***/ 87844:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-checkbox-block-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxBlockExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n        testValue4: new FormControl(false),\n    });\n}\n";

/***/ })

}]);