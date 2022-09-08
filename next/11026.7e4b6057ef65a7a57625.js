"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[11026],{

/***/ 11026:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-checkbox-labeled-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxLabeledExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n";

/***/ })

}]);